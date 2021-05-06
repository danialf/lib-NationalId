const ignore = ['src/**/*.test.ts'];

module.exports = {
  env: {
    esm: {
      ignore,
      presets: [["@babel/preset-typescript"],
      [
        "@babel/preset-env",
        {
          modules: false
        }
      ]],
      plugins: [
        "@babel/plugin-proposal-class-properties",
        "babel-plugin-add-module-exports",
        "@babel/plugin-transform-classes"
      ]
    },
    cjs: {
      ignore,
      presets: [["@babel/preset-typescript"],
      ['@babel/preset-env',
        {
          modules: 'commonjs'
        }
      ]],
      plugins: ["@babel/plugin-transform-modules-commonjs",
      "babel-plugin-add-module-exports"]
    },
    sjs: {
      ignore,
      presets: [["@babel/preset-typescript"],
      ],
      plugins: ["@babel/plugin-transform-modules-systemjs"]
    },
    umd: {
      ignore,
      presets: [["@babel/preset-typescript"],
      ],
      plugins: [[
        "@babel/plugin-transform-modules-umd",
        {
          "globals": {
            "es6-promise": "Promise"
          }
        }
      ]]
    }
  }
}