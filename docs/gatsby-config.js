module.exports = {
    plugins: [{
        resolve: 'gatsby-plugin-svgr',
        options: {
            prettier: true, // use prettier to format JS code output (default)
            svgo: false, // use svgo to optimize SVGs (default)
            svgoConfig: {
                plugins: {
                    removeViewBox: false, // remove viewBox when possible (default)
                    cleanupIDs: false // remove unused IDs and minify remaining IDs (default)
                }
            }
        }
    }]
}
