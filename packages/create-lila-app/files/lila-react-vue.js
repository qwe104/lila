/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import tasksPlugin from 'lila-tasks';
import webpackPlugin from 'lila-webpack';
import { forReactVue } from 'lila-webpack-config';

export default lila => {
  tasksPlugin(lila);
  webpackPlugin(lila);
  forReactVue(lila);

  return ({ entry }) => ({
    tasks: [
      '@lila/webpack',
      [
        '@lila/move',
        { source: 'build/index.html', target: `build/${entry}.html` },
      ],
    ],
  });
};