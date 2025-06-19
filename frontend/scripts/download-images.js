const https = require('https');
const fs = require('fs');
const path = require('path');

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const dir = path.dirname(filepath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        
        const writeStream = fs.createWriteStream(filepath);
        response.pipe(writeStream);
        
        writeStream.on('finish', () => {
          writeStream.close();
          resolve();
        });
      } else {
        reject(`Failed to download image: ${response.statusCode}`);
      }
    }).on('error', reject);
  });
};

const images = {
  'public/hero-jewelry.jpg': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338',
  'public/categories/rings.jpg': 'https://images.unsplash.com/photo-1605100804763-247f67b3557e',
  'public/categories/necklaces.jpg': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f',
  'public/categories/earrings.jpg': 'https://images.unsplash.com/photo-1635767798638-3e25273a8236',
  'public/products/diamond-ring.jpg': 'https://images.unsplash.com/photo-1605100804763-247f67b3557e',
  'public/products/pearl-necklace.jpg': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f',
  'public/products/sapphire-earrings.jpg': 'https://images.unsplash.com/photo-1635767798638-3e25273a8236',
  'public/products/gold-bracelet.jpg': 'https://images.unsplash.com/photo-1611652022419-a9419f74343d'
};

(async () => {
  try {
    for (const [filepath, url] of Object.entries(images)) {
      console.log(`Downloading ${filepath}...`);
      await downloadImage(url, filepath);
      console.log(`Downloaded ${filepath}`);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
})(); 