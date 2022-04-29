import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const sourceDir = './img';
const targetDir = './minimg';

fs.readdirSync(sourceDir).forEach((file) => {
	const extension = path.extname(file);
	const filename = path.basename(file, extension);

	sharp(`${sourceDir}/${file}`)
		.resize({ width: 320 })
		.toFile(`${targetDir}/${filename}-small${extension}`);
	sharp(`${sourceDir}/${file}`)
		.resize({ width: 640 })
		.toFile(`${targetDir}/${filename}-medium${extension}`);
	sharp(`${sourceDir}/${file}`)
		.resize({ width: 1200 })
		.toFile(`${targetDir}/${filename}-large${extension}`);
})