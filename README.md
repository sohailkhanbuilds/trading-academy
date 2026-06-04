# 🚀 Trading Academy — Setup Guide

## Folder Structure
```
trading-academy/
├── index.html                  ← Main course (12 lessons + AI tutor + visual charts)
├── demo-trade.html             ← Live paper trading simulator
├── netlify.toml                ← Netlify config
├── netlify/
│   └── functions/
│       └── chat.js             ← API proxy (Groq — FREE tier)
└── README.md
```

---

## Step 1 — FREE Groq API Key Lo

1. https://console.groq.com pe jaao
2. Google se login karo (free hai)
3. Left sidebar → "API Keys" → "Create API Key"
4. Key copy karo — `gsk_xxxxxxxxxx` se shuru hogi

---

## Step 2 — GitHub pe Upload Karo

1. https://github.com pe login karo
2. "+" → "New repository" → Name: `trading-academy` → Public → Create
3. "uploading an existing file" click karo
4. Poora `trading-academy` folder ka andar ka content drag karo:
   - index.html ✅
   - demo-trade.html ✅
   - netlify.toml ✅
   - README.md ✅
   - netlify/ folder ✅ (ye zaroor include karo)
5. "Commit changes" click karo

---

## Step 3 — Netlify se GitHub Connect Karo

1. https://netlify.com → Login
2. "Add new site" → "Import an existing project"
3. "GitHub" click karo → Permission do
4. `trading-academy` repo select karo
5. Build settings:
   - Build command: (khali chhodo)
   - Publish directory: `.`  (sirf ek dot)
6. "Deploy site" click karo

---

## Step 4 — Groq API Key Set Karo ← ZAROORI

Deploy hone ke baad:

1. Netlify Dashboard → Apni site pe click karo
2. Top menu: **"Site configuration"** click karo
3. Left sidebar: **"Environment variables"** click karo
4. **"Add a variable"** button dabao
5. Key: `GROQ_API_KEY`
6. Value: `gsk_xxxxxxxxxx` (teri actual key paste karo)
7. **Save** karo

---

## Step 5 — Redeploy Karo

1. Top menu: **"Deploys"** click karo
2. **"Trigger deploy"** dropdown → **"Deploy site"**
3. 1-2 minute wait karo
4. ✅ Done! AI Tutor kaam karega

---

## Kya Kya Kaam Karega

- ✅ 12 complete lessons with visual charts
- ✅ AI Tutor — Hinglish mein sawaal pucho
- ✅ Progress save hoga (localStorage)
- ✅ Live Demo Trading Simulator (EUR/USD)
- ✅ Paper trades ka P&L track hoga
- ✅ Trade history save hogi

---

## ⚠️ Common Mistakes

| Galti | Fix |
|-------|-----|
| Sirf index.html upload kiya | Poora folder content chahiye, `netlify/` bhi |
| Variable naam galat likha | Exactly `GROQ_API_KEY` — case sensitive |
| Redeploy nahi kiya | Environment variable ke baad redeploy zaroori |
| `netlify/functions/chat.js` nahi mila | Functions tab mein `chat` function nahi dikhega |

---

## Debug

Agar AI kaam na kare:
- Netlify → Functions tab → `chat` function dikhna chahiye
- `chat` click karo → "Logs" → Error dekho
- Most common error: `GROQ_API_KEY` sahi se set nahi hua
