const tasksPlugin = require('../../../lila-tasks/lib');
const rollupPlugin = require('../../../lila-rollup/lib');
const rollupConfigPlugin = require('../../../lila-rollup-config/lib');

module.exports = lila => {
  const { setSetting } = lila;

  setSetting('src', 'components');
  setSetting('build', 'lib');

  tasksPlugin(lila);
  rollupPlugin(lila);
  rollupConfigPlugin(lila);

  return ({ cmd }) => ({
    tasks: [
      // ['@lila/del', 'lib'],
      '@lila/rollup',
    ],
    flow: !0,
    flowRuntime: cmd === 'start',
    // minCss: !1,
    // minJs: !1,
    // banner: '/* hello */',
    // filename: 'hi',
    // name: 'Demo',
    external: ['react', 'react-dom'],
    globals: { react: 'react', 'react-dom': 'react-dom' },
    watch: ['src', 'demo'],
  });
};