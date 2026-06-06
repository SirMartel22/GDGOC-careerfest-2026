"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import Toast from "./ui/Toast";

const DPGenerator = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isCropping, setIsCropping] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        // Reset scale and offsets for new uploads
        setScale(1);
        setOffsetX(0);
        setOffsetY(0);
        // Set cropping mode to true
        setIsCropping(true);
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
            drawH = radius * 2 * scale;
            drawW = drawH * aspect;
          } else {
            drawW = radius * 2 * scale;
            drawH = drawW / aspect;
          }

          // Center user photo inside the circular canvas crop zone, applying custom X & Y offsets
          drawX = centerX - drawW / 2 + offsetX;
          drawY = centerY - drawH / 2 + offsetY;

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
  }, [image, name, scale, offsetX, offsetY]);

  // Preload template on mount and whenever drawDP changes
  useEffect(() => {
    drawDP();
  }, [drawDP]);

  const drawName = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    // Center horizontally under the circle
    const textX = canvas.width * 0.6994;

    // Position vertically below the circle (circle bottom is at centerY + radius = ~2332px)
    // 2530px is a great height that centers the text perfectly in the white/cream space
    const textY = canvas.height * 0.7809;

    // Erase the pre-printed "Adeleke" placeholder name on the template using a seamless linear gradient
    const grad = ctx.createLinearGradient(0, textY - 80, 0, textY + 80);
    grad.addColorStop(0, "#FEE7C1"); // top gradient color in the text area
    grad.addColorStop(1, "#FDE1B0"); // bottom gradient color in the text area
    ctx.fillStyle = grad;
    ctx.fillRect(textX - 450, textY - 80, 900, 160);

    if (!name) return;

    // Let's use a nice large, premium font size for 3240x3240 canvas
    let fontSize = 150;
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

    // Completely clear name, uploaded photo, and reset crop states on download
    setName("");
    setImage(null);
    setIsCropping(false);
    setScale(1);
    setOffsetX(0);
    setOffsetY(0);

    // Show success toast notification
    setShowToast(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-10 pb-10 px-4 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-0 sm:px-6 w-full">
        <div className="flex flex-col items-center text-center mb-8 space-y-3">
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] w-fit">
            <span className="font-bold text-xs tracking-widest uppercase text-[#1E1E1E]">CareerFest '26</span>
          </div>
          <h1 className="text-5xl md:text-5xl font-anton text-[#1E1E1E] uppercase leading-[0.9] tracking-tighter">
            Represent <br /> the Movement.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Form Side */}
          <div className="flex flex-col h-full space-y-4">
            <div className="flex-grow bg-white p-6 md:p-8 rounded-[2rem] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="space-y-6">
                <h3 className="text-2xl font-anton uppercase text-[#1E1E1E]">Upload Your Photo</h3>
                <p className="text-gray-500 font-semibold text-sm">Drop a clear headshot for best results. Square images work great.</p>

                <div className="space-y-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name (Optional)"
                    className="w-full px-4 py-3 rounded-xl border-4 border-black focus:outline-none focus:bg-gray-50 transition-all text-base font-bold placeholder:text-gray-300"
                  />

                  {!image ? (
                    /* Step 1: Upload Photo State */
                    <div className="relative group">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="border-4 border-dashed border-black rounded-2xl p-6 text-center group-hover:bg-gray-50 transition-all flex flex-col items-center justify-center gap-3">
                        <div className="bg-gray-100 p-3 rounded-xl text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                          <HiOutlineArrowUpTray size={24} />
                        </div>
                        <p className="text-black font-bold text-base">
                          Drag and drop or <span className="text-[#4285F4] underline decoration-2">browse</span>
                        </p>
                      </div>
                    </div>
                  ) : isCropping ? (
                    /* Step 2: Crop & Adjust Sliders inside the same container */
                    <div className="space-y-4 bg-gray-50 p-4 rounded-2xl border-2 border-black">
                      <div className="flex justify-between items-center">
                        <h4 className="font-anton uppercase text-base text-black">Crop & Adjust</h4>
                        <button
                          onClick={() => {
                            setScale(1);
                            setOffsetX(0);
                            setOffsetY(0);
                          }}
                          className="px-3 py-1 bg-white border-2 border-black rounded-lg text-[10px] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase"
                        >
                          Reset
                        </button>
                      </div>

                      <div className="space-y-3">
                        {/* Zoom Slider */}
                        <div>
                          <div className="flex justify-between text-[11px] font-bold text-gray-700 mb-0.5">
                            <span>Zoom / Scale</span>
                            <span>{Math.round(scale * 100)}%</span>
                          </div>
                          <input
                            type="range"
                            min="0.5"
                            max="3.0"
                            step="0.05"
                            value={scale}
                            onChange={(e) => setScale(parseFloat(e.target.value))}
                            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                          />
                        </div>

                        {/* Horizontal Shift */}
                        <div>
                          <div className="flex justify-between text-[11px] font-bold text-gray-700 mb-0.5">
                            <span>Move Horizontal (X)</span>
                            <span>{offsetX}px</span>
                          </div>
                          <input
                            type="range"
                            min="-1000"
                            max="1000"
                            step="5"
                            value={offsetX}
                            onChange={(e) => setOffsetX(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                          />
                        </div>

                        {/* Vertical Shift */}
                        <div>
                          <div className="flex justify-between text-[11px] font-bold text-gray-700 mb-0.5">
                            <span>Move Vertical (Y)</span>
                            <span>{offsetY}px</span>
                          </div>
                          <input
                            type="range"
                            min="-1000"
                            max="1000"
                            step="5"
                            value={offsetY}
                            onChange={(e) => setOffsetY(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                          />
                        </div>

                        {/* Okay Confirmation CTA */}
                        <button
                          onClick={() => setIsCropping(false)}
                          className="w-full mt-2 py-2 bg-[#4285F4] text-white border-2 border-black rounded-xl font-anton text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
                        >
                          Okay
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Step 3: Photo Confirmed Uploaded State */
                    <div className="flex flex-col items-center justify-center p-5 bg-gray-50 border-4 border-dashed border-[#34A853] rounded-2xl gap-3 text-center">
                      <div className="bg-[#E6F4EA] p-2.5 rounded-full text-[#34A853] border-2 border-[#34A853]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-black font-bold text-base leading-tight">Photo Selected Successfully!</p>
                        <p className="text-gray-500 text-[11px] mt-0.5">Ready to generate your Display Picture.</p>
                      </div>

                      <div className="flex gap-3 w-full mt-1">
                        <button
                          onClick={() => setIsCropping(true)}
                          className="flex-1 py-2 bg-white border-2 border-black rounded-xl font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase"
                        >
                          Adjust Crop
                        </button>
                        <button
                          onClick={() => {
                            setImage(null);
                            setIsCropping(false);
                            setScale(1);
                            setOffsetX(0);
                            setOffsetY(0);
                          }}
                          className="flex-1 py-2 bg-white border-2 border-black rounded-xl font-bold text-xs text-[#EA4336] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-red-50 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase"
                        >
                          Remove Photo
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>

          {/* Preview Side */}
          <div className="flex flex-col h-full">
            <div className="relative w-full aspect-square bg-white p-4 rounded-[2rem] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-full flex items-center justify-center">
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
                    <p className="text-gray-400 font-anton text-xl uppercase opacity-50">Loading Template...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Download Button Outside the Card */}
          {previewUrl && (
            <div className="col-span-1 lg:col-span-2 flex justify-center mt-2">
              <button
                onClick={downloadDP}
                className="w-full max-w-xs flex items-center justify-center gap-3 bg-[#EA4336] text-white py-3 rounded-xl font-anton text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
              >
                Download My DP
              </button>
            </div>
          )}
        </div>
      </div>
      <Toast
        message="Your Display Picture has been downloaded successfully!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default DPGenerator;
