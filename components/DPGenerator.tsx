"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Upload, Check } from "lucide-react";

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

  useEffect(() => {
    if (image || name) {
      drawDP();
    }
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

      // Coordinates based on analysis of the template
      const centerX = canvas.width * 0.742;
      const centerY = canvas.height * 0.388;
      const radius = canvas.width * 0.115;

      // Draw User Image in the circle
      if (image) {
        const userImg = new window.Image();
        userImg.src = image;
        userImg.onload = () => {
          ctx.save();
          
          // Create circular clip
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();

          // Calculate aspect ratio to fit image in circle (cover)
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

          // Draw the circle border (matching the template's stroke)
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.lineWidth = 3;
          ctx.strokeStyle = "#000000";
          ctx.stroke();
          
          // Draw Name Section
          drawName(ctx, canvas);
          setPreviewUrl(canvas.toDataURL("image/png"));
        };
      } else {
        // Just draw name if no image
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

    // Draw Pill Background
    ctx.beginPath();
    ctx.moveTo(pillX - pillW / 2 + radius, pillY - pillH / 2);
    ctx.lineTo(pillX + pillW / 2 - radius, pillY - pillH / 2);
    ctx.quadraticCurveTo(pillX + pillW / 2, pillY - pillH / 2, pillX + pillW / 2, pillY - pillH / 2 + radius);
    ctx.lineTo(pillX + pillW / 2, pillY + pillH / 2 - radius);
    ctx.quadraticCurveTo(pillX + pillW / 2, pillY + pillH / 2, pillX + pillW / 2 - radius, pillY + pillH / 2);
    ctx.lineTo(pillX - pillW / 2 + radius, pillY + pillH / 2);
    ctx.quadraticCurveTo(pillX - pillW / 2, pillY + pillH / 2, pillX - pillW / 2, pillY + pillH / 2 - radius);
    ctx.lineTo(pillX - pillW / 2, pillY - pillH / 2 + radius);
    ctx.quadraticCurveTo(pillX - pillW / 2, pillY - pillH / 2, pillX - pillW / 2 + radius, pillY - pillH / 2);
    ctx.closePath();
    
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000000";
    ctx.stroke();

    // Draw Name Text
    let fontSize = 32;
    ctx.font = `bold ${fontSize}px Anton, sans-serif`;
    
    // Auto-scale font size if name is too long
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
    <div className="min-h-screen bg-[#F5F5F5] pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit">
                <span className="font-bold text-sm tracking-widest uppercase text-[#1E1E1E]">CareerFest '26</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-anton text-[#1E1E1E] uppercase leading-[0.9] tracking-tighter">
                Represent <br /> the Movement.
            </h1>
            <div className="max-w-2xl space-y-4">
                <p className="text-xl md:text-2xl font-bold text-[#1E1E1E] leading-tight">
                    Generate your official CareerFest 2026 DP and show the world you're career-ready.
                </p>
                <p className="text-gray-500 font-medium">
                    Upload your photo, grab your frame, and share it everywhere. Let people know you're part of something real.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form Side */}
          <div className="space-y-12 bg-white p-8 md:p-12 rounded-[3rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            
            {/* Step 1: Upload */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#EA4336] border-2 border-black flex items-center justify-center text-white font-anton text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">1</div>
                 <h3 className="text-3xl font-anton uppercase text-[#1E1E1E]">Upload Your Photo</h3>
              </div>
              <p className="text-gray-500 font-bold ml-16">Drop a clear headshot for best results. Square images work great.</p>
              
              <div className="ml-16">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name (Optional)"
                    className="w-full px-6 py-4 rounded-xl border-4 border-black focus:outline-none focus:bg-gray-50 transition-all text-lg font-bold placeholder:text-gray-300 mb-6"
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
                        <Upload size={32} />
                      </div>
                      <p className="text-black font-bold text-lg">
                        Drag and drop or <span className="text-[#4285F4] underline decoration-2">browse</span>
                      </p>
                    </div>
                  </div>
              </div>
            </div>

            {/* Step 2: Pick Frame */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#4285F4] border-2 border-black flex items-center justify-center text-white font-anton text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">2</div>
                 <h3 className="text-3xl font-anton uppercase text-[#1E1E1E]">Pick Your Frame</h3>
              </div>
              
              <div className="ml-16 grid grid-cols-1 gap-4">
                 {["Innovation Challenge Participant", "CareerFest Attendee", "Speaker / Mentor"].map((frame, i) => (
                   <label key={i} className="flex items-center gap-4 p-4 border-2 border-black rounded-2xl cursor-pointer hover:bg-gray-50 transition-all">
                      <input type="radio" name="frame" defaultChecked={i === 1} className="w-6 h-6 accent-[#34A853]" />
                      <span className="font-bold text-[#1E1E1E]">{frame}</span>
                   </label>
                 ))}
              </div>
            </div>

            {/* Step 3: Download */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#34A853] border-2 border-black flex items-center justify-center text-white font-anton text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">3</div>
                 <h3 className="text-3xl font-anton uppercase text-[#1E1E1E]">Download & Share</h3>
              </div>
              <p className="text-gray-500 font-bold ml-16">Save your DP and post with <span className="text-[#34A853]">#CareerFest2026</span></p>

              <div className="ml-16 space-y-6">
                  {previewUrl && (
                    <button
                      onClick={downloadDP}
                      className="w-full bg-[#EA4336] text-white py-6 rounded-2xl font-anton text-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
                    >
                      Download My DP →
                    </button>
                  )}
                  <p className="text-center font-bold text-gray-500 italic">
                    Tag us when you post! @[handle] · #CareerFest2026
                  </p>
              </div>
            </div>
          </div>

          {/* Preview Side */}
          <div className="flex justify-center lg:sticky lg:top-32">
            <div className="relative w-full max-w-[500px] aspect-square bg-white p-6 rounded-[3rem] border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <canvas ref={canvasRef} className="hidden" />
              {previewUrl ? (
                <div className="w-full h-full relative rounded-2xl overflow-hidden border-2 border-black">
                    <img
                      src={previewUrl}
                      alt="DP Preview"
                      className="w-full h-full object-contain"
                    />
                </div>
              ) : (
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-black bg-gray-50 flex items-center justify-center">
                  <p className="text-gray-400 font-anton text-2xl uppercase opacity-50">Preview</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DPGenerator;
