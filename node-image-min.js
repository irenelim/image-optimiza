import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

// import sharp from 'sharp';
// import path from 'path';
// import fs from 'fs';


// imagemin
(async () => {
	await imagemin(['img/*.{jpg,png}'], {
		destination: 'minimg',
		plugins: [
			imageminWebp({quality: 50})
			// imageminMozjpeg( { quality: 80 }),
			// imageminPngquant({
			// 	quality: [0.6, 0.8]
			// })
		]
	});

	console.log('Images optimized');
})();

// sharp
// const sourceDir = './img';
// const targetDir = './minimg';

// fs.readdirSync(sourceDir).forEach((file) => {
// 	const extension = path.extname(file);
// 	const filename = path.basename(file, extension);

// 	sharp(`${sourceDir}/${file}`)
// 		.resize({ width: 320 })
// 		.toFile(`${targetDir}/${filename}-small${extension}`);
// 	sharp(`${sourceDir}/${file}`)
// 		.resize({ width: 640 })
// 		.toFile(`${targetDir}/${filename}-medium${extension}`);
// 	sharp(`${sourceDir}/${file}`)
// 		.resize({ width: 1200 })
// 		.toFile(`${targetDir}/${filename}-large${extension}`);
})