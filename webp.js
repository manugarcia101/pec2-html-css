const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
 
imagemin(['./app/images/*.{jpg,png}'], './app/images', {
    use: [
        imageminWebp({quality: 65})
    ]
}).then(() => {
    console.log('Images optimized');
});
