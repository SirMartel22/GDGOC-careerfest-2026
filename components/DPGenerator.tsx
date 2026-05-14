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
    ctx.font = `bold ${fontSize}px sans-serif`;
    
    // Auto-scale font size if name is too long
    while (ctx.measureText(name).width > pillW - 20 && fontSize > 16) {
      fontSize -= 2;
      ctx.font = `bold ${fontSize}px sans-serif`;
    }

    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(name, pillX, pillY);
  };



  const downloadDP = () => {
    if (!previewUrl) return;
    const link = document.createElement("a");
    link.download = `${name || "build-with-ai"}-dp.png`;
    link.href = previewUrl;
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1F2937] flex items-center justify-center gap-3">
            Show demmm! <span className="text-4xl">🥳</span>
          </h1>
          <p className="text-lg text-gray-500 mt-6 font-medium">
            Generate and share your unique BuildWithAI Ilorin 2025 DP
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Side */}
          <div className="space-y-8 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div>
              <label className="block text-gray-700 font-semibold mb-3 text-lg">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name or nickname"
                className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#34A853]/20 focus:border-[#34A853] transition-all text-lg placeholder:text-gray-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-3 text-lg">Photo</label>
              <div className="relative group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center group-hover:border-[#34A853] transition-colors flex flex-col items-center justify-center gap-4">
                  <div className="bg-gray-50 p-4 rounded-2xl text-gray-400 group-hover:text-[#34A853] transition-colors">
                    <Upload size={32} />
                  </div>
                  <p className="text-gray-500 text-lg">
                    Drag and drop to upload or <span className="text-[#34A853] font-semibold">browse</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-4 text-lg">Select preferred color</label>
              <div className="flex items-center gap-3">
                <div className="relative w-6 h-6">
                  <input
                    type="radio"
                    checked
                    readOnly
                    className="appearance-none w-6 h-6 rounded-full border-2 border-[#4285F4] checked:bg-[#4285F4] cursor-pointer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-white">
                    <Check size={14} />
                  </div>
                </div>
                <span className="text-gray-700 font-medium">White</span>
              </div>
            </div>

            {previewUrl && (
              <button
                onClick={downloadDP}
                className="w-full bg-[#34A853] text-white py-5 rounded-2xl font-bold text-xl hover:bg-[#2d9147] transition-colors shadow-lg shadow-green-200"
              >
                Download DP
              </button>
            )}
          </div>

          {/* Preview Side */}
          <div className="flex justify-center lg:sticky lg:top-32">
            <div className="relative w-full max-w-[500px] aspect-square bg-white p-4 rounded-[2.5rem] shadow-xl shadow-gray-200/50">
              <canvas ref={canvasRef} className="hidden" />
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="DP Preview"
                  className="w-full h-full object-contain rounded-2xl"
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src="/download-dp.png"
                    alt="DP Template"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain rounded-2xl opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-400 font-medium text-lg">Fill form to see preview</p>
                  </div>
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
