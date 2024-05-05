import { ConnectionState, WebSocketMessageHandler } from './types';
import { ReactNode } from 'react';

export interface WebSocketContextValue {
    state: ConnectionState;
    connect: () => Promise<void>;
    subscribe: (callback: WebSocketMessageHandler) => void;
    unsubscribe: (callback: WebSocketMessageHandler) => void;
    disconnect: () => void;
    send: (name: string, data: object | undefined) => void;
    sendWithReply: (name: string, data: object | undefined, replyName: string) => Promise<object | undefined>;
}
export declare const WebSocketContext: import('react').Context<WebSocketContextValue>;
export declare const WebSocketProvider: ({ address, children, }: {
    address?: string;
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Provider.d.ts.map