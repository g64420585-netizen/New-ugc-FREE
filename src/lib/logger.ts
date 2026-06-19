const BASE = import.meta.env.BASE_URL ?? "/";

type LogLevel = "info" | "warn" | "error";

async function log(
  event: string,
  level: LogLevel = "info",
  detail?: string,
  fields?: Record<string, string>,
) {
  try {
    await fetch(`${BASE}api/log`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, level, detail, fields }),
    });
  } catch {
  }
}

export const clientLogger = {
  info: (event: string, detail?: string, fields?: Record<string, string>) =>
    log(event, "info", detail, fields),
  warn: (event: string, detail?: string, fields?: Record<string, string>) =>
    log(event, "warn", detail, fields),
  error: (event: string, detail?: string, fields?: Record<string, string>) =>
    log(event, "error", detail, fields),
};
