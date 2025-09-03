module.exports = {
    presets: ['@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: './',
                extensions: ['.tsx', '.ts', '.js', '.json'],
                alias: {
                    '@/': './src',
                },
            },
        ],
        'react-native-reanimated/plugin',
    ],
};
