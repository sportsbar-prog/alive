// keep-alive.js

const URLS = [
  "https://alive2.vercel.app",
  "https://bot-main-9k83.onrender.com"
];

async function ping(url) {
  try {
    const res = await fetch(url);
    console.log(`[${new Date().toISOString()}] Pinged ${url} → Status: ${res.status}`);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Failed ${url} →`, err.message);
  }
}

// Run immediately once
URLS.forEach(ping);

// Repeat every 40 seconds
setInterval(() => {
  URLS.forEach(ping);
}, 40000);
