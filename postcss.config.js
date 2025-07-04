import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  plugins: [tailwindcss, autoprefixer, cssnano()],
};
/*
  If you want to add more PostCSS plugins, include them in the plugins array above.
  Example:
  plugins: [tailwindcss, autoprefixer, cssnano()],
*/
// Note: Ensure that you have the necessary PostCSS plugins installed in your project.
// You can install them using npm or yarn: