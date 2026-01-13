export default async function handler(req, res) {
  const URLS = [
    "https://alive2.vercel.app",
    "https://bot-main-9k83.onrender.com"
  ];

  const results = await Promise.all(URLS.map(async (url) => {
    try {
      const r = await fetch(url);
      return `${url} → ${r.status}`;
    } catch (e) {
      return `${url} → FAILED`;
    }
  }));

  console.log(results.join(" | "));
  res.status(200).json({ results });
}
