---
title JS
---

```ts
webpack是一个静态的模块化打包工具;
```

## webpack 打包指定入口

```ts
默认会寻找  src/index.js 作为入口

指定入口
npx webpack --entry ./src/main.js --output-path ./build
```

## webpack 配置文件

```ts
根目录下创建一个webpack.config.js文件，来作为webpack的配置文件 自动作为配置文件

指定配置文件

webpack --config wk.config.js
```

## css-loader less-loader 的使用

```ts
npm install css-loader -D

// 内联方式
import "css-loader!../css/index.css"

// 配置文件

const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    // 必须是一个绝对路径
    path: path.resolve(__dirname, "./build")
  },
  module: {
    rules: [
      {
        // 规则使用正则表达式
        test: /\.css$/, // 匹配资源
        use: [
          // { loader: "css-loader" },
          // 注意: 编写顺序(从下往上, 从右往做, 从后往前)
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ],
        // loader: "css-loader"
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          "postcss-loader",
          "less-loader"
        ]
      }
    ]
  }
}
```

## 配置 browserslist

```js
package.json 中配置

"browserslist": [
  ">1%",
  "last 2 version",
  "not dead"
]

或直接创建 .browserslistrc 文件

>1%
last 2 version
not dead

```

## PostCSS

```ts
PostCSS是一个通过JavaScript来转换样式的工具；
这个工具可以帮助我们进行一些CSS的转换和适配，比如自动添加浏览器前缀、css样式的重置；
但是实现这些工具，我们需要借助于PostCSS对应的插件

npm install postcss-loader autoprefixer -D

在webpack.config.js 中使用

// 需要安装对应的插件

const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                    loader: "postcss-loader",
                    options: {
                      postcssOption: {
                        plugins: [
                          require('autoprefixer')
                        ]
                      }
                    }
                  }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    {
                      loader: 'css-loader',
                      options: {
                          importLoaders: 2
                      }
                    },
                    {
                      loader: "postcss-loader",
                      options: {
                        postcssOption: {
                          plugins: [
                            require('autoprefixer')
                          ]
                        }
                      }
                    }
                    { loader: 'less-loader' }
                ]
            }
        ]
    }
}

## 单独配置postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

## postcss-preset-env 的使用

```ts
postcss-preset-env也是一个postcss的插件；
它可以帮助我们将一些现代的CSS特性，转成大多数浏览器认识的CSS，并且会根据目标浏览器或者运行时环
境添加所需的polyfill；
也包括会自动帮助我们添加autoprefixer（所以相当于已经内置了autoprefixer）

单独配置

npm install postcss-preset-env -D

module.exports = {
  plugins: [
    require('postcss-preset-env')
  ]
}

//  省略 require 写法
module.exports = {
  plugins: [
    'postcss-preset-env'
  ]
}

```

## 处理其他资源

```ts
webpack 已不支持使用 raw-loader，url-loader、file-loader等
推荐使用内置的 资源模块类型（asset module type）

const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    // 必须是一个绝对路径
    path: path.resolve(__dirname, "./build"),
    // //引用资源文件打包后的文件名
    // assetModuleFilename: "img/[name].[hash:6][ext]"
  },
  module: {
    rules: [
      {
        // 规则使用正则表达式
        test: /\.css$/, // 匹配资源
        use: [
          // { loader: "css-loader" },
          // 注意: 编写顺序(从下往上, 从右往做, 从后往前)
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // 处理@import 引用
              // importLoaders 要使用前面几个loader处理css
              importLoaders: 1
            }
          },
          "postcss-loader"
        ],
        // loader: "css-loader"
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // 处理@import 引用
              // importLoaders 要使用前面几个loader处理css
              importLoaders: 2
            }
          },
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        // type: "asset/resource", file-loader的效果
        // type: "asset/inline", url-loader
        type: "asset",
        generator: {
          filename: "img/[name].[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      // asset/inline 直接生成到代码中，不生成文件
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/,
      //   // type: "asset/resource", file-loader的效果
      //   // type: "asset/inline", url-loader
      //   type: "asset/inline"
      // },
      {
        test: /\.ttf|eot|woff2?$/i,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[hash:6][ext]"
        }
      }
    ]
  }
}

```

## 认识 webpack 常见 plugin

```ts
1. CleanWebpackPlugin
// 自动删除打包后的文件夹
 npm install clean-webpack-plugin -D

2. html-webpack-plugin
// 自定义index.html模板

3. DefinePlugin
// 定义一个全局常量
// index.html 中使用
<link rel="icon" href="<%= BASE_URL %>favicon.ico">

4.copy-webpack-plugin
// 复制对应文件到打包文件中

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'coder_webpack',
            template: './public/index.html',
            filename: 'index.html'
        }),
        new DefinePlugin({
            BASE_URL: "'./'"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../public'),
                    globOptions: {
                        ignore: ['**/index.html']
                    }
                }
            ]
        })
    ]
```

## mode 取值

```ts
mode = 'production': 'none' | 'production' | 'development'
```

## source-map

```js
// 已转换的代码映射到源文件的文件

devtool取值
1. flase
// production模式下才能设置none 默认值
2. node
// 不会生成sourceMap文件

3. eval
// 不会生成sourceMap文件
// 执行eval函数

4.source-map
// 生成一个完整的sourceMap文件

5. eval-source-map
// 没有独立的sourceMap文件，与js文件一体

5. inline-source-map
// 没有独立的sourceMap文件，与js文件一体 放在最后

6.cheap-source-map
// 只精确到行报错，不精确到列

7. cheap-module-source-map
// 对于源自于loader处理的源代码sourceMap更友好
// 列如babel-loader

8. nosources-source-map
// 显示正确的错误信息，但不能映射到对应的文件

9. hidden-source-map
// 隐藏注释，不能正确映射

```

## babel 的使用

```ts
npm install babel-loader @babel/core @babel/preset-env

// webpack配置文件中使用
{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [
        "@babel/preset-env"
        // ["@babel/preset-env", {
        //   targets: ["chrome 88"]
        //   enmodules: true
        // }]
      ]
      // plugins: [
      //   "@babel/plugin-transform-arrow-functions",
      //   "@babel/plugin-transform-block-scoping"
      // ]
    }
  }
},
{
  test: /\.ts$/,
  exclude: /node_modules/,
  // 本质上是依赖于typescript(typescript compiler)
  use: "babel-loader"
}


babel.config.js

npm i  "core-js";
npm i "regenerator-runtime";

module.exports = {
  presets: [
    ["@babel/preset-env", {
      // false: 不用任何的polyfill相关的代码
      // usage: 代码中需要哪些polyfill, 就引用相关的api
      // entry: 手动在入口文件中导入 core-js/regenerator-runtime, 根据目标浏览器引入所有对应的polyfill
      useBuiltIns: "usage",
      corejs: 3
    }],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"]
  ],
  // plugins: [
  //   ["@babel/plugin-transform-runtime", {
  //     corejs: 3
  //   }]
  // ]
}

```

## vue-loader

```ts
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    filename: "js/bundle.js",
    // 必须是一个绝对路径
    path: path.resolve(__dirname, "./build"),
    // assetModuleFilename: "img/[name].[hash:6][ext]"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: [
          //     ["@babel/preset-env", {
          //       // targets: ["chrome 88"]
          //       // enmodules: true
          //     }]
          //   ]
          //   // plugins: [
          //   //   "@babel/plugin-transform-arrow-functions",
          //   //   "@babel/plugin-transform-block-scoping"
          //   // ]
          // }
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        // 本质上是依赖于typescript(typescript compiler)
        use: "babel-loader",
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "coderwhy webpack",
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
  ],
};
```

## weback-dev-server

```ts
npm i weback-dev-server
// 执行命令
webpack server

HMR 模块热替换
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
new ReactRefreshWebpackPlugin(),

devServer: {
  hot: true
}
// babel.config.js
module.exports = {
  presets: [
    ["@babel/preset-env"],
    ["@babel/preset-react"],
  ],
  plugins: [
    ["react-refresh/babel"]
  ]
}
```

## output 的 publicPath

```ts
// 本地服务
publicPath: "/";

// 打包
publicPath: "./";
```

## devServe 的 publicPath

```js
// 指定本地服务所在的文件夹
// 默认值
publicPath: "/";

// 如果修改，列：
publicPath: "/abc";
// output publicPath 也许修改为 /abc
// 访问项目：
http://localhost:8080/abc

```

## devServe 的 contentBase

```js
将html中引入的静态资源 去contentBase设置的路径下查找


  contentBase: path.resolve(__dirname, "./why"),
// 去why目录下寻找abc.js
  <script src="./abc.js"></script>


wtachContentBase
// 监听静态文件的变化，刷新页面
```

## devServe 的 hotOnly host

```ts
// 编译出错时，修复后不刷新整个页面
hotOnly: true;

// 设置主机地址
host: "localhost";
host: "0.0.0.0";
```

## devServe 的 port open compress

```js
// 端口号
port: 3000;

// 编译完成后自动打开网页
open: true;

// compress  代码压缩 性能优化 开启gzip
compress: true;
```

## devServe 的 proxy

```js
// 配置代理
// 原地址为 http://localhost:8888/moment
// 访问地址为 http://localhost:8080/api/moment
// 代理后为 http://localhost:8888/api/moment
// 设置pathRewrite 重写 /api
// 得到 http://localhost:8888/moment
proxy: {
    // "/api": "http://localhost:8888"
    "/api": {
      target: "http://localhost:8888",
      pathRewrite: {
        "^/api": ""
      },
      // 代理https 不验证证书
      secure: false,
      // 修改请求地址,与服务器一致
      changeOrigin: true
    }
  },
```

## devServe 的 historyApiFallback

```ts
// 防止页面刷新 页面路由匹配失败
// historyApiFallback: true
// 设置映射关系
historyApiFallback: {
  rewrites: [{ from: /abc/, to: "/index.html" }];
}
```

## resolve

```js
// 设置模块如何被解析
resolve: {
    // 配置查找后缀名
    // import xx from './pages/index'
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.vue'],
    // 配置查找路径
    // import xx from '@/pages'
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "pages": path.resolve(__dirname, "./src/pages")
    }
  },
```

## 环境分离

```js
作为函数导出配置文件时, 可获取参数;
// 启动命令
("webpack serve --config ./config/webpack.common.js --env development");

const resolveApp = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const { merge } = require("webpack-merge");

const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

const commonConfig = {
  // 相对与context 设置的路径
  // 默认为webpack启动时所在的路径 ./config/webpack.common.js  整个config文件夹所在路径
  // context: path.resolve(__dirname, '../')
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: resolveApp("./build"),
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx", ".ts", ".vue"],
    alias: {
      "@": resolveApp("./src"),
      pages: resolveApp("./src/pages"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: "babel-loader",
      },
      {
        test: /\.vue$/i,
        use: "vue-loader",
      },
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
  ],
};

module.exports = function (env) {
  const isProduction = env.production;
  process.env.NODE_ENV = isProduction ? "production" : "development";

  const config = isProduction ? prodConfig : devConfig;
  const mergeConfig = merge(commonConfig, config);

  return mergeConfig;
};
```

## 代码分离

```js
// 指定多入口进行分离
entry: {
    main: "./src/main.js",
    index: "./src/index.js"
  },
  output: {
    path: resolveApp("./build"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].[hash:6].chunk.js"
  },


  // 入口依赖
  // 单独打包第三方库 不推荐
  entry: {
    main: { import: "./src/main.js", dependOn: "shared" },
    index: { import: "./src/index.js", dependOn: "shared" },
    // lodash: "lodash",
    // dayjs: "dayjs"
    shared: ["lodash", "dayjs"]
  },
  output: {
    path: resolveApp("./build"),
    filename: "[name].bundle.js",
    // 设置异步加载文件名称
    chunkFilename: "[name].[hash:6].chunk.js"
  },


  // splitChunks
  optimization: {
    // 对代码进行压缩相关的操作
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    // natural: 使用自然数(不推荐),
    // named: 使用包所在目录作为name(在开发环境推荐)
    // deterministic: 生成id, 针对相同文件生成的id是不变
    // chunkIds: "deterministic",
    splitChunks: {
      // 默认值 async异步导入
      // initial同步导入
      // all 异步/同步导入
      chunks: "all",
      // 最小尺寸: 如果拆分出来一个, 那么拆分出来的这个包的大小最小为minSize
      minSize: 20000,
      // 将大于maxSize的包, 拆分成不小于minSize的包
      maxSize: 20000,
      // minChunks表示引入的包, 至少被导入了几次
      minChunks: 1,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: "[id]_vendors.js",
          // name: "vendor-chunks.js",
          priority: -10
        },
        // bar: {
        //   test: /bar_/,
        //   filename: "[id]_bar.js"
        // }
        default: {
          minChunks: 2,
          filename: "common_[id].js",
          priority: -20
        }
      }
    },
    // 入口文件 导入文件分离
    // true/multiple
    // single
    // object: name
    runtimeChunk: {
      name: function(entrypoint) {
        return `why-${entrypoint.name}`
      }
    }
  },


  // externals
  // 不需要打包, 自己配置cdn地址

  <% if (process.env.NODE_ENV === 'production') { %>
  <script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
  <% } %>

  externals: {
    // window._
    lodash: "_",
    // window.dayjs
    dayjs: "dayjs"
  },
```

## MiniCssExtractPlugin

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

{
  test: /\.css/i,
  // style-lodader -> development
  use: [
    isProduction ? MiniCssExtractPlugin.loader: "style-loader",
    "css-loader"],
},

new MiniCssExtractPlugin({
  filename: "css/[name].[hash:8].css",
});
```

## TerserPlugin 代码压缩丑化

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

const isProduction = true;

module.exports = {
  mode: "development",
  devtool: "source-map",
  externals: {
    lodash: "_",
    dayjs: "dayjs",
  },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          compress: {
            arguments: false,
            dead_code: true,
          },
          mangle: true,
          toplevel: true,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
  plugins: [
    // 生成环境
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css",
    }),
    // css 压缩
    new CssMinimizerPlugin(),
    // 作用域提升
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
```

## treeshaking

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const PurgeCssPlugin = require("purgecss-webpack-plugin");
const webpack = require("webpack");
const glob = require("glob");

const resolveApp = require("./paths");

const isProduction = true;

module.exports = {
  mode: "development",
  devtool: "source-map",
  externals: {
    lodash: "_",
    dayjs: "dayjs",
  },
  optimization: {
    // usedExports: 目的是标注出来哪些函数是没有被使用 unused
    // 开启treeshaking
    usedExports: true, // production 模式 默认为 true
    minimize: true,
    minimizer: [
      // 由Terser将未使用的函数, 从我们的代码中删除
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          compress: {
            arguments: false,
            dead_code: true,
          },
          mangle: true,
          toplevel: true,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
  plugins: [
    // 生成环境
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css",
    }),
    new CssMinimizerPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new PurgeCssPlugin({
      paths: glob.sync(`${resolveApp("./src")}/**/*`, { nodir: true }),
      safelist: function () {
        return {
          standard: ["body", "html"],
        };
      },
    }),
  ],
};


// package.json 设置 开启treeshaking
  "sideEffects": false,

{
  test: /\.css/i,
  // style-lodader -> development
  use: [
    isProduction ? MiniCssExtractPlugin.loader: "style-loader",
    "css-loader"],
  sideEffects: true // react 脚手架中
},


// css treeshaking
new PurgeCssPlugin({
      paths: glob.sync(`${resolveApp("./src")}/**/*`, {nodir: true}),
      safelist: function() {
        return {
          standard: ["body", "html"]
        }
      }
    })
```

## http 压缩 开启 gzip 压缩

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const PurgeCssPlugin = require("purgecss-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const glob = require("glob");

const resolveApp = require("./paths");

const isProduction = true;

module.exports = {
  mode: "production",
  devtool: "source-map",
  externals: {
    lodash: "_",
    dayjs: "dayjs",
  },
  optimization: {
    // usedExports: 目的是标注出来哪些函数是没有被使用 unused
    usedExports: true, // production
    minimize: true,
    minimizer: [
      // 由Terser将未使用的函数, 从我们的代码中删除
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          compress: {
            arguments: false,
            dead_code: true,
          },
          mangle: true,
          toplevel: true,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
  plugins: [
    // html文件中代码压缩
    new HtmlWebpackPlugin({
      template: "./index.html",
      // inject: "body"
      cache: true, // 当文件没有发生任何改变时, 直接使用之前的缓存
      minify: isProduction
        ? {
            removeComments: false, // 是否要移除注释
            removeRedundantAttributes: false, // 是否移除多余的属性
            removeEmptyAttributes: true, // 是否移除一些空属性
            collapseWhitespace: false,
            removeStyleLinkTypeAttributes: true,
            minifyCSS: true,
            minifyJS: {
              mangle: {
                toplevel: true,
              },
            },
          }
        : false,
    }),
    // 生成环境
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css",
    }),
    new CssMinimizerPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new PurgeCssPlugin({
    //   paths: glob.sync(`${resolveApp("./src")}/**/*`, {nodir: true}),
    //   safelist: function() {
    //     return {
    //       standard: ["body", "html"]
    //     }
    //   }
    // }),
    new CompressionPlugin({
      test: /\.(css|js)$/i,
      // 文件大小进行压缩
      threshold: 0,
      // 压缩比列
      minRatio: 0.8,
      algorithm: "gzip",
      // exclude
      // include
    }),
    // 将部分代码注入到html中
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime.*\.js/]),
  ],
};
```
