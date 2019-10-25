module.exports = function (api) {
	api.cache.never()

	return {
		"presets": [
			"react-app",
			"next/babel"
		],
		"plugins": [
			[
				"babel-plugin-root-import",
				{
					"rootPathSuffix": "./",
					"rootPathPrefix": "@/"
				}
			]
		]
	};
}