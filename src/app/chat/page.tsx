"use client";

import React from "react";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { PromptInputBox } from "@/components/ui/ai-prompt-box";

export default function ChatPage() {
  const handleSendMessage = (message: string, files?: File[]) => {
    console.log('Message:', message);
    if (files) console.log('Files:', files);
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-transparent text-foreground relative">
      <div className="absolute inset-0 z-0">
        <FallingPattern className="h-full w-full [mask-image:radial-gradient(ellipse_at_center,transparent,var(--background))]" />
      </div>
      
      <div className="p-4 w-full max-w-3xl relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
          Study Buddy AI
        </h1>
        
        <div className="w-full bg-[#1F2023]/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <h2 className="text-xl font-medium text-white/90 mb-4 text-center">How can I help you study today?</h2>
          <PromptInputBox 
            placeholder="Ask a question, paste code, or upload an image..." 
            onSend={handleSendMessage} 
          />
        </div>
      </div>
    </div>
  );
}
