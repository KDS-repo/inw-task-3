const svgContext = require.context('./', false, /\.(svg)$/);

const svgs = {};

svgContext.keys().forEach((path) => {
  const key = path
    .replace('./', '')
    .replace('.svg', '');   // Remove extension
  svgs[key] = svgContext(path).default || svgContext(path);
});

export default svgs;