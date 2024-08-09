import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "pnpm",
  monorepoRedirect: {},
  plugins: [
    "@umijs/plugins/dist/antd",
    "@umijs/plugins/dist/initial-state",
    "@umijs/plugins/dist/model",
    "@umijs/plugins/dist/styled-components",
  ],
  headScripts: [],
  icons: {},
  hash: true,
  antd: {},
  model: {},
  initialState: {},
  styledComponents: {},
});
