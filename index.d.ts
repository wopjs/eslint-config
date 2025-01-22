import { config, type ConfigArray } from "typescript-eslint";

declare const wopjs: ConfigArray;

export default wopjs;

export const defineConfig = config;
