const res = await fetch('https://www.nupurmadaan.xyz/');
console.log('Status:', res.status);
const html = await res.text();
console.log('HTML length:', html.length);
console.log('Title:', html.match(/<title>([^<]+)<\/title>/)?.[1]);
const scriptMatches = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Scripts:', scriptMatches);
const linkMatches = [...html.matchAll(/<link[^>]+href=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Links:', linkMatches);

// Check if any referenced asset 404s
for (const s of scriptMatches) {
  const url = new URL(s, 'https://www.nupurmadaan.xyz/').href;
  const sRes = await fetch(url);
  console.log('Script check:', url, '->', sRes.status);
}
