import { ConnectionState, WebSocketMessageHandler } from './types';

export declare const store: {
    getState(): ConnectionState;
    subscribe(onStoreChange: () => void): () => void;
    unsubscribe(onStoreChange: () => void): void;
    notify(): void;
    send(name: string, body: object | undefined): void;
    connect(address: string): void;
    disconnect(): void;
    addMessageListener(callback: WebSocketMessageHandler): void;
    removeMessageListener(callback: WebSocketMessageHandler): void;
};
//# sourceMappingURL=store.d.ts.map