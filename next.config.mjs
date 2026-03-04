import nextra from "nextra";
// import { remarkMermaid } from "@theguild/remark-mermaid";

const withNextra = nextra({
  // remarkMermaid removed due to build errors
});

export default withNextra({
  reactStrictMode: true,
});
