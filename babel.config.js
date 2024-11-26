module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins:[
    [
      "module-resolver",
      {
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@config": "./src/config",
        },
      },
    ],
    'react-native-reanimated/plugin'
  ],
};
