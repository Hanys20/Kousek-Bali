// Cloudflare Workers nemá zapnuté zónové "Always Use HTTPS" (nastavení
// dashboardu, ke kterému tento repozitář nemá přístup), takže bez tohoto
// worker skriptu se plain HTTP požadavky servírují rovnou beze změny
// schématu. Tady je vynucené přesměrování na HTTPS ještě před předáním
// požadavku statickým souborům z `out/`.

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.protocol === "http:") {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
