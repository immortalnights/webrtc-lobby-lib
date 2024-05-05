import { ReactNode } from 'react';
import { PlayerRecord, RoomRecord } from 'game-signaling-server/client';

export type State = "main-menu" | "lobby" | "in-game";
export interface ManagerContextValue {
    state: State;
    player?: PlayerRecord;
    room?: RoomRecord;
    game?: string;
    setPlayer: React.Dispatch<React.SetStateAction<PlayerRecord | undefined>>;
    joinLobby: () => void;
    leaveLobby: () => void;
    joinRoom: (room: RoomRecord, host: boolean) => void;
    leaveRoom: () => void;
    joinGame: (id: string) => void;
    leaveGame: () => void;
}
export declare const ManagerContext: import('react').Context<ManagerContextValue>;
export declare const ManagerProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ManagerProvider.d.ts.map