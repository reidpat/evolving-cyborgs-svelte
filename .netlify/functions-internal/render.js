const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","manifest.json","meditation_192.png","meditation_512.png","service-worker.js"]),
	_: {
		mime: {".png":"image/png",".json":"application/json"},
		entry: {"file":"start-a49c9859.js","js":["start-a49c9859.js","chunks/index-d41602b9.js","chunks/index-ffc5a9d1.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/signin\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/signin.js'))
			},
			{
				type: 'page',
				pattern: /^\/vices\/?$/,
				params: null,
				path: "/vices",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		]
	}
});
