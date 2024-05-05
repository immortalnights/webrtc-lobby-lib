import { RoomRecord } from 'game-signaling-server/client';

export declare const LobbyRoom: ({ localPlayerId, room: initialRoom, onJoinGame, onLeaveRoom, }: {
    localPlayerId: string;
    room: RoomRecord;
    onJoinGame: (game: string) => void;
    onLeaveRoom: () => void;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LobbyRoom.d.ts.map