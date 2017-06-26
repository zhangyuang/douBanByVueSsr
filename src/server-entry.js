import { createApp } from './main'

export default context => {
	return new Promise((resolve, reject) => {
		const { app, router, store } = createApp(context)
		router.push(context.url)
		router.onReady(() => {
			const matchedComponents = router.getMatchedComponents()
			if(!matchedComponents.length) {
				reject({ code: 404 })
			}
			Promise.all(matchedComponents.map(Component => {
				if(Component.preFetch) {
					return Component.preFetch({
						store,
						router: router.currentRoute
					})
				}
			})).then(() => {
				context.state = store.state
				resolve(app)
			}).catch(reject)
			
		}, reject)
	})
}