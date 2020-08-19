module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~': './src',
          },
        },
      ],
    ],
    ignore: ['**/*/.test.ts', '**/*/.test.js', './src/types', '**/*.d.ts'],
  };
};
