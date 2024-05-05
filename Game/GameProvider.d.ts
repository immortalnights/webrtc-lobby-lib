import { ReactNode } from 'react';

export type GameState = "setup" | "ready" | "playing" | "paused" | "finished";
export type PlayerGameState = "joining" | "initializing" | "world-building" | "ready" | "paused" | "disconnected";
export interface GameContextValue {
    state: GameState;
    name: string;
    setup: () => void;
    ready: () => void;
    finish: () => void;
}
export declare const GameContext: import('react').Context<GameContextValue>;
export declare const GameProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=GameProvider.d.ts.map