import { type ConfigObject } from "@eslint/core";
import { type defineConfig as config } from "eslint/config";

declare const wopjs: ConfigObject[];

export default wopjs;

/** @deprecated use `import { defineConfig } from "eslint/config";` instead. */
export declare const defineConfig: typeof config;
