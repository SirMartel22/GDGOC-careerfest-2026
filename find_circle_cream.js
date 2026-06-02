const { Jimp } = require("jimp");

async function run() {
  const image = await Jimp.read("public/dp-image.png");
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  
  const cx = 2266;
  const cy = 1711;
  
  console.log(`Checking outward from (${cx}, ${cy}):`);
  
  // Scan right
  let rightBoundary = cx;
  for (let x = cx; x < w; x++) {
    const idx = (cy * w + x) * 4;
    const r = image.bitmap.data[idx];
    const g = image.bitmap.data[idx+1];
    const b = image.bitmap.data[idx+2];
    
    // Check if we hit black/dark border (e.g. RGB < 50)
    if (r < 50 && g < 50 && b < 50) {
      rightBoundary = x;
      break;
    }
  }
  
  // Scan left
  let leftBoundary = cx;
  for (let x = cx; x >= 0; x--) {
    const idx = (cy * w + x) * 4;
    const r = image.bitmap.data[idx];
    const g = image.bitmap.data[idx+1];
    const b = image.bitmap.data[idx+2];
    
    if (r < 50 && g < 50 && b < 50) {
      leftBoundary = x;
      break;
    }
  }

  // Scan down
  let downBoundary = cy;
  for (let y = cy; y < h; y++) {
    const idx = (y * w + cx) * 4;
    const r = image.bitmap.data[idx];
    const g = image.bitmap.data[idx+1];
    const b = image.bitmap.data[idx+2];
    
    if (r < 50 && g < 50 && b < 50) {
      downBoundary = y;
      break;
    }
  }

  // Scan up
  let upBoundary = cy;
  for (let y = cy; y >= 0; y--) {
    const idx = (y * w + cx) * 4;
    const r = image.bitmap.data[idx];
    const g = image.bitmap.data[idx+1];
    const b = image.bitmap.data[idx+2];
    
    if (r < 50 && g < 50 && b < 50) {
      upBoundary = y;
      break;
    }
  }

  console.log(`Left border: ${leftBoundary}, Right border: ${rightBoundary}, Width: ${rightBoundary - leftBoundary}`);
  console.log(`Up border: ${upBoundary}, Down border: ${downBoundary}, Height: ${downBoundary - upBoundary}`);
  
  const finalCx = (leftBoundary + rightBoundary) / 2;
  const finalCy = (upBoundary + downBoundary) / 2;
  const radiusX = (rightBoundary - leftBoundary) / 2;
  const radiusY = (downBoundary - upBoundary) / 2;
  
  console.log(`Adjusted Center: x=${finalCx}, y=${finalCy}`);
  console.log(`Radius X: ${radiusX}, Radius Y: ${radiusY}`);
  console.log(`Normalized Center: cx=${(finalCx/w).toFixed(4)}, cy=${(finalCy/h).toFixed(4)}, r=${((radiusX+radiusY)/2/w).toFixed(4)}`);
}

run().catch(console.error);
