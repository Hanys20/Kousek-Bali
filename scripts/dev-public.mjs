import { spawn } from "node:child_process";

// Samostatný port a cache dovolují současně sledovat veřejnou i plnou verzi.
const child = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "dev", "--hostname", "127.0.0.1", "--port", "3001"],
  {
    stdio: "inherit",
    env: { ...process.env, SITE_MODE: "coming-soon" },
  },
);

child.on("exit", (code) => process.exit(code ?? 1));
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
