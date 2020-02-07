// Instead of using svgr to generate per component icons, create generic icon
// component and icon hash using create-react-scripts included svgr webpack
// from https://stackoverflow.com/questions/45754739/how-to-import-an-entire-folder-of-svg-images-or-how-to-load-them-dynamically-i/46210355
const iconSvgs = require.context('!@svgr/webpack?svgo=false!../../../static/icons/', true, /\.svg$/)

export const iconNames = iconSvgs.keys().map(key => key.match(/\/(.+)\.svg$/i).pop())
