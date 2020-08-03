# Octopus
Stylindex Component Library

This is a library for the miscellaneous base components used throughout the Stylindex site with designs from the brand style guide. Documentation for the various components can be accessed at https://octopus.stylindex.com/. The library documentation also details the various brand fonts and colors.

## Using fonts and styles
In addition to components, this repo contains two CSS files - one with reset styles and the other general styles with font imports - that can be imported by using `@stylindex/octopus/lib/reset.css` or `@stylindex/octopus/lib/styles.css`.

Fonts are currently hosted on our static assets url (see src/css/fonts.css). These fonts, and additional CSS can be used by simply importing `@stylindex/octopus/fonts.css` at the top level of your application, providing you have [css-loading](https://webpack.js.org/loaders/css-loader/) in your build pipeline.

## Development

This project uses [Docz](https://github.com/doczjs/docz) to generate the development playground and environment. To run the development env use `yarn start`.

To create a component entry in the documentation simply create an `<ComponentName>.mdx` file in the same directory as the component. Full details on using docz can be found on the above link.
