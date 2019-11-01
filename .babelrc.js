module.exports = function (api) {
	api.cache.never()

	return {
		"presets": [
			// "react-app",
			[
				"next/babel",
				{
					"preset-env": { "targets": { "node": "current" } }
				}
			]
		],
		"plugins": [
			[
				"babel-plugin-root-import",
				{
					"rootPathSuffix": "./",
					"rootPathPrefix": "@/"
				}
			],
			[
				'babel-plugin-import',
				{
					'libraryName': '@material-ui/core',
					'libraryDirectory': '',
					'camel2DashComponentName': false
				},
				'core'
			],
			[
				'babel-plugin-import',
				{
					'libraryName': '@material-ui/icons',
					'libraryDirectory': '',
					'camel2DashComponentName': false
				},
				'icons'
			]
		]
	};
}