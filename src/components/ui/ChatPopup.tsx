'use client';

import { useEffect, useRef, useState } from 'react';
import { ChatSocket } from '../../lib/ChatSocket';
import { FaTimes, FaTerminal, FaGithub, FaPlay, FaStop, FaTrash } from 'react-icons/fa';

interface ChatPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatPopup({ isOpen, onClose }: ChatPopupProps) {
  const [input, setInput] = useState('');
  const {messages, connected, hasPeer, userID, isDisconnecting, isConnecting, connect, sendMessage, clearMessages, disconnect } = ChatSocket('://go-chat-portfolio.onrender.com/ws');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 border border-purple-500/30 rounded-lg shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-purple-500/30 p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaTerminal className="text-purple-400 text-xl" />
              <div>
                <h2 className="text-white font-mono font-bold text-lg">WebSocket Chat Terminal</h2>
                <p className="text-purple-300 text-sm font-mono">Go Server Demo</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-red-400 transition-colors duration-200"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-gray-800 border-b border-purple-500/20 px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 font-mono">User ID:</span>
              <span className="text-purple-400 font-mono font-bold">{userID || 'N/A'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${connected ? (hasPeer ? 'bg-green-500' : 'bg-yellow-500') : 'bg-red-500'}`}></div>
              <span className={`font-mono text-xs ${connected ? (hasPeer ? 'text-green-400' : 'text-yellow-400') : 'text-red-400'}`}>
                {connected ? (hasPeer ? 'CONNECTED' : 'SEARCHING FOR PEER...') : (isDisconnecting ? 'DISCONNECTING...' : (isConnecting ? 'CONNECTING TO SERVER... PLEASE WAIT' : 'DISCONNECTED'))}
              </span>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="bg-gray-850 border-b border-purple-500/20 p-3">
          <div className="flex items-center space-x-2">
            <button
              onClick={connect}
              disabled={connected || isDisconnecting || isConnecting}
              className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-xs font-mono rounded transition-colors duration-200"
            >
              <FaPlay className="text-xs" />
              <span>CONNECT</span>
            </button>
            <button
              onClick={disconnect}
              disabled={!connected}
              className="flex items-center space-x-1 px-3 py-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-xs font-mono rounded transition-colors duration-200"
            >
              <FaStop className="text-xs" />
              <span>DISCONNECT</span>
            </button>
            <button
              onClick={clearMessages}
              className="flex items-center space-x-1 px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white text-xs font-mono rounded transition-colors duration-200"
            >
              <FaTrash className="text-xs" />
              <span>CLEAR</span>
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 bg-gray-950 p-4 overflow-y-auto min-h-[300px]">
          <div className="space-y-2">
            {messages.length === 0 ? (
              <div className="text-gray-500 font-mono text-sm text-center py-8">
                <FaTerminal className="text-2xl mx-auto mb-2 opacity-50" />
                <p>No messages yet. Connect to start chatting...</p>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} className="bg-gray-900 border border-purple-500/20 rounded p-3">
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-400 font-mono text-xs">{'>'}</span>
                    <span className="text-gray-300 font-mono text-sm break-words">{"<" + msg.sender + '> ' + msg.content}</span>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-gray-800 border-t border-purple-500/30 p-4 rounded-b-lg">
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 font-mono">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={!connected || !hasPeer}
                className="w-full bg-gray-900 border border-purple-500/30 rounded px-8 py-2 text-gray-300 font-mono text-sm focus:outline-none focus:border-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder={connected && hasPeer ? "Type your message..." : "Connect to start chatting..."}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!connected || !hasPeer || !input.trim()}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-mono text-sm rounded transition-colors duration-200"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 