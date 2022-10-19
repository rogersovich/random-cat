module.exports = {
    transpileDependencies: [
        'vue-meta'
      ],
    devServer: {
      proxy: 'https://random-d.uk/api/v2/',
      host: '0.0.0.0',
      https: process.env.NODE_ENV === 'production',
      port: 4444,
    },
  };