const fs = require('fs')
const path = require('path')
const express = require('express')
const compression = require('compression')
const isProd = process.env.NODE_ENV === 'production'
const serverInfo =
  `express/${require('express/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`
const app = express()
const { createBundleRenderer } = require('vue-server-renderer')
const template = require('fs').readFileSync(path.resolve('./src/template.html'), 'utf-8')
const serverBundle = require(path.resolve('./dist/vue-ssr-server-bundle.json'))
const clientManifest = require(path.resolve('./dist/vue-ssr-client-manifest.json'))
function resolve (dir) {
  return path.join(__dirname, dir)
}
let renderer
let readyPromise
function createRenderer (bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    template,
    runInNewContext: false,
  }))
}
if (isProd) {
    const bundle = serverBundle
    renderer = createRenderer(bundle, {
      clientManifest
    })
} 
else {
  readyPromise = require('./setup-dev-server')(app, (bundle, options) => {
    renderer = createRenderer(bundle, options)
  })
}
const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})
app.use('/dist', serve('../dist', true))
function render (req, res) {
  const s = Date.now()
  res.setHeader('Content-Type','text/html;charset=UTF-8');
  res.setHeader("Server", serverInfo)

  const handleError = err => {
    if (err && err.code === 404) {
      res.status(404).end('404 | Page Not Found')
    } else {
      // Render Error Page or Redirect
      res.status(500).end('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }

  const context = {
    title: 'douban', // default title
    url: req.url
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    }
    res.end(html)
    if (!isProd) {
      console.log(`whole request: ${Date.now() - s}ms`)
    }
  })
}

app.get('*', isProd ? render : (req, res) => {
  readyPromise.then(() => render(req, res))
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})