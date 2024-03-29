const build = require("./config/esbuild.defaults.js")
const { plugins } = require("./config/esbuild-plugins.js")


// Update this if you need to configure a destination folder other than `output`
const outputFolder = "output"

// You can customize this as you wish, perhaps to add new esbuild plugins.
//
// ```
// const path = require("path")
// const esbuildCopy = require('esbuild-plugin-copy').default
// const esbuildOptions = {
//   plugins: [
//     esbuildCopy({
//       assets: {
//         from: [path.resolve(__dirname, 'node_modules/somepackage/files/*')],
//         to: [path.resolve(__dirname, 'output/_bridgetown/somepackage/files')],
//       },
//       verbose: false
//     }),
//   ]
// }
// ```
//
// You can also support custom base_path deployments via changing `publicPath`.
//
// ```
// const esbuildOptions = { publicPath: "/my_subfolder/_bridgetown/static" }
// ```
const esbuildOptions = {
  plugins: [...plugins],
  // Uncomment the following to opt into `.global.css` & `.lit.css` nomenclature.
  // Read https://edge.bridgetownrb.com/docs/components/lit#sidecar-css-files for documentation.
  /*
  postCssPluginConfig: {
    filter: /(?:index|.global).css$/,
  },
  */
}

build(outputFolder, esbuildOptions)
