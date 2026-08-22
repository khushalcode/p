import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.thuso.pos",
  appName: "Thuso",
  webDir: "public",
  server: {
    url: "https://thusomain1.vercel.app/",
    cleartext: false
  }
};

export default config;