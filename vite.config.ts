/// <reference types="vite/client" />
/// <reference types="vitest" />
/// <reference types="node" />

import { resolve } from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import dts from "vite-plugin-dts"
import tsConfigPaths from "vite-tsconfig-paths"
import * as packageJson from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        dts({
            include: ["src/components"],
        }),
        tsConfigPaths(),
        react(),
    ],
    build: {
        lib: {
            entry: resolve("src", "components/index.ts"),
            name: "ReactViteLibrary",
            formats: ["es", "umd"],
            fileName: (format) => `webrtc-lobby-lib.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./test/setup.ts",
        css: false,
    },
})
