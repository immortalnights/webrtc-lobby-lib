import { Connection, ConnectionMap, DataChannelMessageHandler } from './types';

export declare const peerConnectionStore: {
    getConnections(): ConnectionMap;
    find(peer: string): Connection;
    subscribe(onStoreChange: () => void): () => void;
    notify(): void;
    sendTo(peer: string, message: object): void;
    sendToAll(message: object): void;
    setMessageCallback(callback: DataChannelMessageHandler): void;
    removeMessageCallback(callback: DataChannelMessageHandler): void;
    addConnection(peer: string, pc: RTCPeerConnection, dc?: RTCDataChannel): void;
    setDataChannel(peer: string, dc: RTCDataChannel): void;
    listenToDataChannel(peer: string, dc: RTCDataChannel): void;
    stopListeningToDataChannel(connection: Connection): void;
    removeConnection(peer?: string): void;
};
//# sourceMappingURL=store.d.ts.map