import { ConnectionMap, DataChannelMessageHandler } from './types';
import { ReactNode } from 'react';
import { RTCIceCandidateLike, RTCSessionDescriptionLike } from 'game-signaling-server/client';

export interface PeerConnectionContextValue {
    connections: ConnectionMap;
    offer: (peer: string, name?: string) => Promise<{
        offer: RTCSessionDescriptionInit;
        candidates: RTCIceCandidate[];
    }>;
    reply: (peer: string, answer: RTCSessionDescriptionLike) => Promise<void>;
    answer: (offer: RTCSessionDescriptionLike, candidates: RTCIceCandidateLike[]) => Promise<RTCSessionDescriptionInit>;
    send: (name: string, body: object, target?: string) => void;
    subscribe: (cb: DataChannelMessageHandler) => void;
    unsubscribe: (cb: DataChannelMessageHandler) => void;
    close: (peer?: string) => void;
}
export declare const PeerConnectionContext: import('react').Context<PeerConnectionContextValue>;
export declare const PeerConnectionProvider: ({ children, }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Provider.d.ts.map