/* eslint-disable @typescript-eslint/no-var-requires */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      // eslint-disable-next-line no-undef
      modifyVars: path.join(__dirname, './src/theme/vars.less'),
    },
  })
);
