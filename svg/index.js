// Index for mass importing of images. Necessary for build systems that put builds in a different folder
/*
// This part will be necessary when migrating to Webpack
const importAll = (r) => {
  let images = {};
  r.keys().forEach(key => {
    // Convert './logo.png' to 'logo'
    const name = key.replace('./', '').replace(/\.[^/.]+$/, '');
    images[name] = r(key);
  });
  return images;
};

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
*/

// Remove in case of migrating away from Vite
const imageModules = import.meta.glob('./*.svg', { 
  eager: true,
});

const svgs = {};
for (const path in imageModules) {
  const key = path
    .replace('./', '')      // Remove './'
    .replace('.svg', '');   // Remove extension
  
  // ⭐ CRITICAL: Access .default to get the URL
  svgs[key] = imageModules[path].default;
}

export default svgs;