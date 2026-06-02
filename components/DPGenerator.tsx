"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { HiOutlineArrowUpTray } from "react-icons/hi2";

const DPGenerator = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const drawDP = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const template = new window.Image();
    template.src = "/dp-image.png";
    template.onload = () => {
      canvas.width = template.width;
      canvas.height = template.height;
      ctx.drawImage(template, 0, 0);

      const centerX = canvas.width * 0.6994;
      const centerY = canvas.height * 0.5123;
      const radius = canvas.width * 0.2074;

      if (image) {
        const userImg = new window.Image();
        userImg.src = image;
        userImg.onload = () => {
          ctx.save();
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();

          const aspect = userImg.width / userImg.height;
          let drawW, drawH, drawX, drawY;
          if (aspect > 1) {
            drawH = radius * 2;
            drawW = drawH * aspect;
            drawX = centerX - drawW / 2;
            drawY = centerY - radius;
          } else {
            drawW = radius * 2;
            drawH = drawW / aspect;
            drawX = centerX - radius;
            drawY = centerY - drawH / 2;
          }

          ctx.drawImage(userImg, drawX, drawY, drawW, drawH);
          ctx.restore();

          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.lineWidth = 12;
          ctx.strokeStyle = "#000000";
          ctx.stroke();

          // After drawing the user image, draw the template on top 
          // so that if the template has a transparent hole, it overlays perfectly.
          // Or wait, if we clip the user image, it won't overflow the circle anyway!
          // But we just draw the template FIRST right now in DPGenerator, and then user image on top.
          
          drawName(ctx, canvas);
          setPreviewUrl(canvas.toDataURL("image/png"));
        };
      } else {
        // Draw template even without user image
        drawName(ctx, canvas);
        setPreviewUrl(canvas.toDataURL("image/png"));
      }
    };
  }, [image, name]);

  // Preload template on mount and whenever drawDP changes
  useEffect(() => {
    drawDP();
  }, [drawDP]);

  const drawName = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    if (!name) return;

    // Center horizontally under the circle
    const textX = canvas.width * 0.6994;
    
    // Position vertically below the circle (circle bottom is at centerY + radius = ~2332px)
    // 2530px is a great height that centers the text perfectly in the white/cream space
    const textY = canvas.height * 0.7809;

    // Let's use a nice large, premium font size for 3240x3240 canvas
    let fontSize = 110;
    ctx.font = `bold ${fontSize}px Anton, sans-serif`;
    
    // Limit text width to ~1100px to prevent overlapping the card edges
    const maxWidth = canvas.width * 0.34;
    while (ctx.measureText(name).width > maxWidth && fontSize > 40) {
      fontSize -= 4;
      ctx.font = `bold ${fontSize}px Anton, sans-serif`;
    }

    ctx.fillStyle = "#1E1E1E";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(name, textX, textY);
  };

  const downloadDP = () => {
    if (!previewUrl) return;
    const link = document.createElement("a");
    link.download = `${name || "careerfest-2026"}-dp.png`;
    link.href = previewUrl;
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto px-0 sm:px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit">
            <span className="font-bold text-sm tracking-widest uppercase text-[#1E1E1E]">CareerFest '26</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-anton text-[#1E1E1E] uppercase leading-[0.9] tracking-tighter">
            Represent <br /> the Movement.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Form Side */}
          <div className="flex flex-col h-full space-y-8">
            <div className="flex-grow bg-white p-8 md:p-12 rounded-[3rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="space-y-8">
                <h3 className="text-3xl font-anton uppercase text-[#1E1E1E]">Upload Your Photo</h3>
                <p className="text-gray-500 font-bold">Drop a clear headshot for best results. Square images work great.</p>

                <div className="space-y-6">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name (Optional)"
                    className="w-full px-6 py-4 rounded-xl border-4 border-black focus:outline-none focus:bg-gray-50 transition-all text-lg font-bold placeholder:text-gray-300"
                  />

                  <div className="relative group">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="border-4 border-dashed border-black rounded-3xl p-10 text-center group-hover:bg-gray-50 transition-all flex flex-col items-center justify-center gap-4">
                      <div className="bg-gray-100 p-4 rounded-2xl text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <HiOutlineArrowUpTray size={32} />
                      </div>
                      <p className="text-black font-bold text-lg">
                        Drag and drop or <span className="text-[#4285F4] underline decoration-2">browse</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Preview Side */}
          <div className="flex flex-col h-full">
            <div className="relative w-full aspect-square bg-white p-6 rounded-[3rem] border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] h-full flex items-center justify-center">
              <canvas ref={canvasRef} className="hidden" />
              <div className="w-full h-full relative rounded-2xl overflow-hidden border-2 border-black bg-gray-50">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="DP Preview"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-400 font-anton text-2xl uppercase opacity-50">Loading Template...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Download Button Outside the Card */}
          {previewUrl && (
            <div className="col-span-1 lg:col-span-2 flex justify-center mt-4">
              <button
                onClick={downloadDP}
                className="w-full max-w-xs md:max-w-sm flex items-center justify-center gap-3 bg-[#EA4336] text-white py-4 rounded-2xl font-anton text-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
              >
                Download My DP
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DPGenerator;
