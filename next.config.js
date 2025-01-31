const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css')

module.exports = withImages(
    withCss(
        withSass({
            cssModules: true,
            webpack(config, options) {
                config.module.rules.push({
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: "javascript/auto"
                });

                return config;
            }
        })
    )
);