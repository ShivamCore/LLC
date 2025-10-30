"use client";

import { useEffect } from 'react';

export function ChatbotWidget() {
  const enabled = process.env.NEXT_PUBLIC_ENABLE_CHATBOT === 'true';
  useEffect(() => {
    if (!enabled) return;
    // Placeholder for chatbot script injection
    // e.g., load third-party widget when going live
  }, [enabled]);
  return null;
}


