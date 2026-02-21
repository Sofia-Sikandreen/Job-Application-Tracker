"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("organize");
  const isActive = activeTab === "organize"; 
  

  return (
    <section className="py-24 border-t">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Buttons */}
        <div className="flex gap-6 mb-12">
          <Button
            size="lg"
            onClick={() => setActiveTab("organize")}
            className ={`flex-1 flex items-center justify-center gap-2
rounded-xl h-12 px-6 text-lg font-bold
transition duration-300 shadow-sm
${isActive ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}

          >
            Organize Application
          </Button>

          <Button
            size="lg"
          
            onClick={() => setActiveTab("hired")}
            className ={`flex-1 flex items-center justify-center gap-2
rounded-xl h-12 px-6 text-lg font-bold
transition duration-300 shadow-sm
${isActive ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}

            
          >
            Get Hired
          </Button>

          <Button
            size="lg"
        
            onClick={() => setActiveTab("boards")}
            className ={`flex-1 flex items-center justify-center gap-2
rounded-xl h-12 px-6 text-lg font-bold
transition duration-300 shadow-sm
${isActive ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}

          >
            Manage Boards
          </Button>
        </div>

        {/* Image Display */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg mb-16">
          {activeTab === "organize" && (
            <Image
              src="/hero-images/hero1.png"
              alt="Organize Applications"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          )}

          {activeTab === "hired" && (
            <Image
              src="/hero-images/hero2.png"
              alt="Get Hired"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          )}

          {activeTab === "boards" && (
            <Image
              src="/hero-images/hero3.png"
              alt="Manage Boards"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          )}
        </div>
      </div>
    </section>
  );
}
