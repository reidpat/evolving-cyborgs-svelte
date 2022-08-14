const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["cyborg.png","cyborg.svg","favicon.png","manifest.json","meditation_192.png","meditation_512.png","thinking.svg","service-worker.js"]),
	_: {
		mime: {".png":"image/png",".svg":"image/svg+xml",".json":"application/json"},
		entry: {"file":"start-182b876c.js","js":["start-182b876c.js","chunks/index-e545626c.js","chunks/index-11e3d9f4.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js'))
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
				type: 'page',
				pattern: /^\/productivity\/?$/,
				params: null,
				path: "/productivity",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/timeline\/?$/,
				params: null,
				path: "/timeline",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/friends\/?$/,
				params: null,
				path: "/friends",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/offline\/?$/,
				params: null,
				path: "/offline",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/habits\/?$/,
				params: null,
				path: "/habits",
				shadow: null,
				a: [0,7],
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
				a: [0,8],
				b: [1]
			}
		]
	}
});
