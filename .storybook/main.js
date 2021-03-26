module.exports = {
  "stories": [
    "../src/**/*.stories.mdx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.module\.s(a|c)ss$/,
      loader: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
            sourceMap: true
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    });

    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      exclude: /\.module.(s(a|c)ss)$/,
      loader: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    });

    console.log(config);

    return config;
  }
}