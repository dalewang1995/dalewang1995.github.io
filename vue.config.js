const path = require('path')
const fs = require('fs')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//     .BundleAnalyzerPlugin;

const isProd = process.env.NODE_ENV === 'production'

function resolveRealPath(dir) {
  return path.join(__dirname, dir)
}
function loadGlobalStyles() {
  const variables = fs.readFileSync('src/assets/styles/variables.scss', 'utf-8')
  const mixins = fs.readFileSync('src/assets/styles/mixins.scss', 'utf-8')
  return variables + mixins
}

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: loadGlobalStyles()
      }
    }
  },
  configureWebpack:config => {
    // plugins: [new BundleAnalyzerPlugin()]

    if (isProd) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          // 正在匹配需要压缩的文件后缀
          test: /\.(js|css|svg|woff|ttf|json|html)$/,
          // 大于10kb的会压缩
          threshold: 10240
          // 其余配置查看compression-webpack-plugin
        })
      )
    }

  },
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@helper', resolveRealPath('src/helper'))
      .set('@pages', resolveRealPath('src/pages'))
      .set('@assets', resolveRealPath('src/assets'))
      .set('@router', resolveRealPath('src/router'))
      .set('@mixins', resolveRealPath('src/mixins'))
      .set('@components', resolveRealPath('src/components'))

    // remove the old loader & add new one
    config.module.rules.delete('svg')
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        name: '[name]-[hash:7]',
        prefixize: true
      })

    const splitOptions = config.optimization.get('splitChunks')
    config.optimization.splitChunks(
      Object.assign({}, splitOptions, {
        // （缺省值5）按需加载时的最大并行请求数
        maxAsyncRequests: 16,
        // （默认值3）入口点上的最大并行请求数
        maxInitialRequests: 16,
        // （默认值：1）分割前共享模块的最小块数
        minChunks: 1,
        // （默认值：30000）块的最小大小
        minSize: 30000,
        // webpack 将使用块的起源和名称来生成名称: `vendors~main.js`,如项目与"~"冲突，则可通过此值修改，Eg: '-'
        automaticNameDelimiter: '~',
        // cacheGroups is an object where keys are the cache group names.
        name: true,
        cacheGroups: {
          default: false,
          common: {
            name: `chunk-common`,
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          },
          // element: {
          //   name: 'element',
          //   test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          //   chunks: 'initial',
          //   // 默认组的优先级为负数，以允许任何自定义缓存组具有更高的优先级（默认值为0）
          //   priority: -30
          // }
        }
      })
    )

    // https://github.com/webpack-contrib/webpack-bundle-analyzer
    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
}