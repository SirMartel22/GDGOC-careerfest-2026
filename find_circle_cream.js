const { Jimp } = require("jimp");

async function run() {
  const image = await Jimp.read("public/dp-image.png");
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  
  // The name text "Adeleke" is printed under the circle.
  // The circle ends around y=2334. The text is around y=2400 to 2600.
  // Let's sample colors in a box from x=1800 to 2700 and y=2450 to 2600.
  const colorCounts = {};
  
  const startX = 1800;
  const endX = 2700;
  const startY = 2450;
  const endY = 2600;
  
  for (let y = startY; y < endY; y += 2) {
    for (let x = startX; x < endX; x += 2) {
      const idx = (y * w + x) * 4;
      const r = image.bitmap.data[idx];
      const g = image.bitmap.data[idx+1];
      const b = image.bitmap.data[idx+2];
      
      const key = `${r},${g},${b}`;
      colorCounts[key] = (colorCounts[key] || 0) + 1;
    }
  }
  
  const sorted = Object.entries(colorCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
    
  console.log("Top colors in the name text region:");
  for (const [color, count] of sorted) {
    const [r, g, b] = color.split(",").map(Number);
    const hex = "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
    console.log(`Color: ${hex} (${r},${g},${b}) -> Count: ${count}`);
  }
}

run().catch(console.error);
