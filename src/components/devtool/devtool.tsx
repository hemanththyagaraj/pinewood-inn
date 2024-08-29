import * as hookFormDevTools from '@hookform/devtools';

const DevTool: (typeof hookFormDevTools)['DevTool'] =
  import.meta.env.MODE !== 'development'
    ? function () {
        return null;
      }
    : hookFormDevTools.DevTool;

export default DevTool;
