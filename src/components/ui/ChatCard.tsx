'use client';

import { useEffect, useRef, useState } from 'react';
import { ChatSocket } from '../../lib/ChatSocket';

export default function ChatCard() {
  const [input, setInput] = useState('');
  const {messages, connected, hasPeer, userID, isDisconnecting, connect, sendMessage, clearMessages, disconnect } = ChatSocket('ws://localhost:3000//ws');

  return (
    <div className="p-4 border rounded shadow max-w-lg mx-auto mt-20">
      <h2 className="text-xl font-bold mb-2">WebSocket Chat as {userID} </h2>

      <div className="mb-2">
        <button
          onClick={connect}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded mr-2"
        >
          Connect
        </button>
        <button
          onClick={clearMessages}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded mr-2"
        >
          Clear
        </button>
        <button
          onClick={disconnect}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded"
        >
          Disconnect
        </button>
        <span className={`ml-4 font-semibold ${connected ? (hasPeer ? 'text-green-500' : 'text-gray-500') : 'text-red-500'}`}>
          {connected ? (hasPeer ? 'Connected to Peer' : 'Searching...') : (isDisconnecting ? 'Disconnecting...' : 'Disconnected') }
        </span>
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded px-2 py-1 w-full mb-2"
          placeholder="Type a message..."
        />
        <button
          onClick={() => {
            sendMessage(input);
            setInput('');
          }}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded w-full"
        >
          Send
        </button>
      </div>

      <div className="max-h-60 overflow-y-auto border-t pt-2">
        {messages.length === 0 ? (
          <p className="text-gray-400 text-sm">No messages yet.</p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className="text-sm text-gray-800 mb-1">
              {msg}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
