const { Jimp } = require("jimp");

async function run() {
  const image = await Jimp.read("public/dp-image.png");
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  
  let minX = w, maxX = 0, minY = h, maxY = 0;
  let found = false;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = image.bitmap.data[idx];
      const g = image.bitmap.data[idx+1];
      const b = image.bitmap.data[idx+2];
      
      // Check for #D9D9D9
      if (Math.abs(r - 217) < 5 && Math.abs(g - 217) < 5 && Math.abs(b - 217) < 5) {
        found = true;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (found) {
    const width = maxX - minX;
    const height = maxY - minY;
    const centerX = minX + width / 2;
    const centerY = minY + height / 2;
    const radius = Math.max(width, height) / 2;
    
    console.log(`D9D9D9 Area Bounding Box: minX=${minX}, maxX=${maxX}, minY=${minY}, maxY=${maxY}`);
    console.log(`Center: x=${centerX}, y=${centerY}`);
    console.log(`Radius: ${radius}`);
    console.log(`Normalized: centerX=${(centerX / w).toFixed(4)}, centerY=${(centerY / h).toFixed(4)}, radius=${(radius / w).toFixed(4)}`);
  } else {
    console.log("No D9D9D9 pixels found.");
  }
}

run().catch(console.error);
