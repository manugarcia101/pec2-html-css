// var imagemin = require("imagemin");
// var webp = require("imagemin-webp");
// var outputFolder = "./app/images";
// var PNGImages = "./app/images/*.png";
// var JPEGImages = "./app/images/*.jpg";

// imagemin([PNGImages], outputFolder, {
//   plugins: [webp({
//       lossless: true 
//   })]
// });

// imagemin([JPEGImages], outputFolder, {
//   plugins: [webp({
//     quality: 65 
//   })]
// });

const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
 
imagemin(['./app/images/*.{jpg,png}'], './app/images', {
    use: [
        imageminWebp({quality: 65})
    ]
}).then(() => {
    console.log('Images optimized');
});
