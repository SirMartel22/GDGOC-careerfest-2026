"use client";

import React, { useState, useRef, useEffect } from "react";
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

  // Preload template on mount and whenever name/image changes
  useEffect(() => {
    drawDP();
  }, [image, name]);

  const drawDP = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const template = new window.Image();
    template.src = "/download-dp.png";
    template.onload = () => {
      canvas.width = template.width;
      canvas.height = template.height;
      ctx.drawImage(template, 0, 0);

      const centerX = canvas.width * 0.742;
      const centerY = canvas.height * 0.388;
      const radius = canvas.width * 0.115;

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
          ctx.lineWidth = 3;
          ctx.strokeStyle = "#000000";
          ctx.stroke();

          drawName(ctx, canvas);
          setPreviewUrl(canvas.toDataURL("image/png"));
        };
      } else {
        // Draw template even without user image
        drawName(ctx, canvas);
        setPreviewUrl(canvas.toDataURL("image/png"));
      }
    };
  };

  const drawName = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    if (!name) return;

    const pillX = canvas.width * 0.742;
    const pillY = canvas.height * 0.61;
    const pillW = canvas.width * 0.25;
    const pillH = canvas.height * 0.055;
    const radius = pillH / 2;

    ctx.beginPath();
    ctx.moveTo(pillX - pillW / 2 + radius, pillY - pillH / 2);
    ctx.lineTo(pillX + pillW / 2 - radius, pillY - pillH / 2);
    ctx.quadraticCurveTo(pillX + pillW / 2, pillY - pillH / 2, pillX + pillW / 2, pillY - pillH / 2 + radius);
    ctx.lineTo(pillX + pillW / 2, pillY + pillH / 2 - radius);
    ctx.quadraticCurveTo(pillX + pillW / 2, pillY + pillH / 2, pillX + pillW / 2 - radius, pillY + pillH / 2);
    ctx.lineTo(pillX - pillW / 2 + radius, pillY + pillH / 2);
    ctx.quadraticCurveTo(pillX - pillW / 2, pillY + pillH / 2, pillX - pillW / 2 + radius, pillY + pillH / 2);
    ctx.lineTo(pillX - pillW / 2, pillY - pillH / 2 + radius);
    ctx.quadraticCurveTo(pillX - pillW / 2, pillY - pillH / 2, pillX - pillW / 2 + radius, pillY - pillH / 2);
    ctx.closePath();

    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000000";
    ctx.stroke();

    let fontSize = 32;
    ctx.font = `bold ${fontSize}px Anton, sans-serif`;
    while (ctx.measureText(name).width > pillW - 20 && fontSize > 16) {
      fontSize -= 2;
      ctx.font = `bold ${fontSize}px Anton, sans-serif`;
    }

    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(name, pillX, pillY);
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
      <div className="max-w-7xl mx-auto px-6">
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
            <button
              onClick={downloadDP}
              className="w-full flex items-center justify-center gap-3 bg-[#EA4336] text-white py-6 rounded-2xl font-anton text-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase mt-auto"
            >
              Download My DP
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DPGenerator;
