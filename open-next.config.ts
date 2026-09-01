import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Minimal config: no incremental (ISR) cache override is needed for this
// mostly-static / SSR marketing site. If you later add ISR or on-demand
// revalidation, wire an incremental cache here (e.g. the R2 override) and
// provision the matching R2 bucket in wrangler.jsonc.
export default defineCloudflareConfig({});
