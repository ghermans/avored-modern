let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.config.fileLoaderDirs.fonts     = "vendor/avored-default/fonts";
mix.config.fileLoaderDirs.images    = "vendor/avored-default/images";

mix.copy('themes/ghermans/avored-modern/assets/images', 'public/ghermans/avored-modern/images');
mix.sass('themes/ghermans/avored-modern/assets/sass/app.scss', 'vendor/ghermans/avored-modern/css');
mix.js('themes/ghermans/avored-modern/assets/js/app.js', 'vendor/ghermans/avored-modern/js');
