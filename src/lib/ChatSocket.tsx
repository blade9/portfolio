import {useState, useRef, useEffect } from 'react';

interface ServerMessage {
    status: string;
    username?: string;
    peer?: string;
    content?: string;
}


export function ChatSocket(url: string) {
    const [connected, setConnected] = useState(false);
    const [hasPeer, setHasPeer] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);
    const socketRef = useRef<WebSocket | null>(null);
    const [userID, setUserID] = useState<string | null>(null);
    const [isDisconnecting, setIsDisconnecting] = useState(false);

    
    // Clean up the WebSocket connection when the component unmounts or when the connection state changes
    const connect = () => {
        console.log("Websocket current state: ", socketRef.current?.readyState);

        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            console.warn("WebSocket is already connected. Cannot connect again.");
            return;
        }
        else if (socketRef.current && socketRef.current.readyState === WebSocket.CLOSING) {
            console.warn("WebSocket is currently disconnecting. Please wait...");
            return;
        }

        else{
            const protocol = window.location.protocol === "https:" ? "wss" : "ws";
            socketRef.current = new WebSocket(`wss${url}`);
        }

        socketRef.current.onopen = () => {
            setConnected(true);
        };
        socketRef.current.onmessage = (event) => {
        try {
            const msgObj = JSON.parse(event.data);
            console.log("Received message:", msgObj);

            if (msgObj.status === "connected" && msgObj.userID) {
                setConnected(true);
                setMessages((prev) => [...prev, `Connected as ${msgObj.userID}`]);
                setUserID(msgObj.userID);
            }
            else if (msgObj.status === "matched" && msgObj.peer) {
                setHasPeer(true);
                setMessages((prev) => [...prev, `Peer connected: ${msgObj.peer}`]);
            }
            else if (msgObj.status === "disconnected_peer" && msgObj.peer) {
                setHasPeer(false);
                setMessages((prev) => [...prev, `Disconnected from ${msgObj.peer}`]);
                setMessages((prev) => [...prev, `Set to back in waiting list`]);                
            }
            else {    
                const content = msgObj.content ?? "Unknown message format";
                setMessages((prev) => [...prev, content]);
            }
        } catch (err) { 
            console.error("Invalid JSON message:", event.data);
            setMessages((prev) => [...prev, `${event.data}`]); // fallback to raw data
        }
        };

        socketRef.current.onclose = () => {
            if (socketRef.current) {
                socketRef.current.close();
                setConnected(false);
                setHasPeer(false)
                setMessages([]);
                socketRef.current = null; // Clear the reference to the WebSocket
            }
            setIsDisconnecting(false);
        };
    };

    const sendMessage = (message: string) => {
        if (socketRef.current && connected) {
            if (hasPeer) {
                socketRef.current.send(JSON.stringify({content: message}));
            }
            else{
                console.log("User is not connected to a peer")
            }
        } else {
            console.error("WebSocket is not connected This is my message");
        }
    };

    const clearMessages = () => {
        console.log("Websocket current state: ", socketRef.current?.readyState);
        setMessages([]);    
    }

    const disconnect = () => {
        if (!connected) {
            console.warn("WebSocket is not connected. Cannot disconnect.");
            return;
        }
        setIsDisconnecting(true);
        setConnected(false);
        setHasPeer(false)
        setMessages([]);
        socketRef.current?.close();
    }

    return {
        connected,
        hasPeer,
        messages,
        userID,
        isDisconnecting,
        connect,
        sendMessage,
        clearMessages,
        disconnect,
    }
}