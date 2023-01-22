/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const nextConfig = {
  reactStrictMode: true,
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  webpack(config) {
    config.module.rules.push({
      enforce: 'pre',
      test: /\.module\.scss$/,
      loader: 'sass-resources-loader',
      options: {
        resources: [path.resolve(__dirname, './src/styles/_variables.scss')],
      },
    })
    return config
  },
}
