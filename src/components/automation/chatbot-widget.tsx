"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { siteContent } from '@/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, Calendar } from 'lucide-react';

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'bot',
      text: siteContent.automation.chatbot.messages[0],
      timestamp: new Date()
    }
  ]);

  // Show pulse animation after 10 seconds if not interacted
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setHasInteracted(false);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      type: 'user',
      text: message,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: siteContent.automation.chatbot.messages[1],
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickAction = (action: 'call' | 'calendar') => {
    if (action === 'call') {
      window.location.href = `tel:${siteContent.contact.phone}`;
    } else {
      window.open(siteContent.contact.calendlyUrl, '_blank');
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 2 }}
      >
        <div className="relative">
          {/* Pulse animation when not interacted */}
          {!hasInteracted && (
            <motion.div
              className="absolute inset-0 rounded-full bg-gold-400"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
          
          <Button
            onClick={() => {
              setIsOpen(true);
              setHasInteracted(true);
            }}
            className="w-16 h-16 rounded-full shadow-glow-gold premium-button relative"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          
          {/* Notification badge */}
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
            1
          </div>
        </div>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="w-80 h-96 luxury-card shadow-premium border-0">
              <CardHeader className="gradient-gold text-white p-4 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Valenza Assistant</h3>
                      <p className="text-xs opacity-90">
                        {siteContent.automation.chatbot.trigger}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 h-8 w-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-0 h-full">
                {/* Messages */}
                <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-60">
                  {chatMessages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-3 py-2 rounded-lg text-sm font-medium ${
                          msg.type === 'user'
                            ? 'btn-gold'
                            : 'bg-neutral-100 text-neutral-800 border border-neutral-200'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="p-3 border-t border-neutral-100">
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction('call')}
                      className="text-xs"
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Call Now
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction('calendar')}
                      className="text-xs"
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      Book Call
                    </Button>
                  </div>

                  {/* Message Input */}
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1 px-3 py-2 border-2 border-neutral-300 rounded-lg text-sm text-neutral-900 font-medium focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                    />
                    <Button
                      size="sm"
                      onClick={handleSendMessage}
                      className="px-3 premium-button"
                    >
                      <Send className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}