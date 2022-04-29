import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

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