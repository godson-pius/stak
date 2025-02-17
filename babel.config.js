module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ... other plugins
      require.resolve('react-native-reanimated/plugin'), // Use require.resolve to provide the absolute path
    ],
  };
};
