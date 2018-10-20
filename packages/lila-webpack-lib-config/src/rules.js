import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const babelLoader = ({
  babelImport,
  babelExclude,
  flow,
  flowRuntime,
}) => ({
  loader: 'babel-loader',
  test: /\.(js|jsx)$/,
  options: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      ...(flow ? ['flow'] : []),
    ],
    plugins: [
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-syntax-dynamic-import',
      ['import', babelImport],
      ...(flowRuntime ? [['flow-runtime', { assert: !0, annotate: !0 }]] : []),
    ],
  },
  exclude: babelExclude,
});

export const urlLoader = ({ extensions }) => ({
  loader: 'url-loader',
  options: {
    // 0 means infinite, put 1 here to disable base64.
    limit: 1,
  },
  test: new RegExp(`\\.(${extensions.join('|')})$`),
});

export const htmlLoader = () => ({
  loader: 'html-loader',
  test: /\.html$/,
  options: {
    attrs: ['img:src', 'link:href'],
    interpolate: 'require',
  },
});

export const cssLoader = isBuild => ({
  test: /\.css$/,
  use: [
    {
      loader: isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
    },
    {
      loader: 'css-loader',
    },
  ],
});

export const lessLoader = isBuild => ({
  test: /\.less$/,
  use: [
    {
      loader: isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'less-loader',
    },
  ],
});

export const sassLoader = isBuild => ({
  test: /\.scss$/,
  use: [
    {
      loader: isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'sass-loader',
    },
  ],
});