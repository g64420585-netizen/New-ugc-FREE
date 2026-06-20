type LogLevel = "info" | "warn" | "error";

  async function log(
    event: string,
    level: LogLevel = "info",
    detail?: string,
    fields?: Record<string, string>,
  ) {
    try {
      await fetch("/api/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event, level, detail, fields }),
      });
    } catch {
      // silent — logging should never break the app
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
  