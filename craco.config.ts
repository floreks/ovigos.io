import { resolve } from 'path';

const config = () => ({
  webpack: {
    alias: {
      '@images': resolve(__dirname, 'src/assets/images'),
      '@icons': resolve(__dirname, 'src/assets/icons'),
      '@components': resolve(__dirname, 'src/components'),
      '@theming': resolve(__dirname, 'src/theming'),
      '@contexts': resolve(__dirname, 'src/contexts'),
    },
  },
});

export default config;
