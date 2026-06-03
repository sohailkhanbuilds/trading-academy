# 🚀 Trading Academy — Netlify Setup Guide

## Folder Structure
```
trading-academy/
├── index.html                   ← Main app
├── netlify.toml                 ← Netlify config
├── netlify/
│   └── functions/
│       └── chat.js              ← API proxy (API key yahan safe rahti hai)
└── README.md
```

---

## Step 1 — Anthropic API Key Lo
1. https://console.anthropic.com pe jaao
2. Login karo → API Keys → "Create Key"
3. Key copy karke safe jagah rakh lo

---

## Step 2 — Netlify pe Deploy Karo

### Option A — Drag & Drop (Sabse Aasaan)
1. https://netlify.com pe login karo
2. Sites → "Add new site" → "Deploy manually"
3. **Poora `trading-academy` folder drag karо** (sirf index.html nahi, poora folder)
4. Deploy ho jaayega

### Option B — GitHub se (Recommended)
1. GitHub pe naya repo banao: `trading-academy`
2. Ye sari files upload karo
3. Netlify → "Import from Git" → GitHub select karo → Repo select karo
4. Build settings: Publish directory = `.` (dot)
5. Deploy karo

---

## Step 3 — API Key Environment Variable Set Karo (ZAROORI)
1. Netlify Dashboard → Apni site kholo
2. **Site configuration** → **Environment variables**
3. **"Add a variable"** click karo
4. Key: `ANTHROPIC_API_KEY`
5. Value: `sk-ant-...` (teri actual API key)
6. Save karo

---

## Step 4 — Redeploy Karo
Environment variable set karne ke baad:
- Netlify → Deploys → "Trigger deploy" → "Deploy site"
- 1-2 minute wait karo
- Ab AI Tutor kaam karega ✅

---

## ⚠️ Common Mistakes
- Sirf `index.html` upload kiya, `netlify/functions/` folder nahi → Function work nahi karega
- API key set nahi ki → 401 error aayega
- Poora folder drag karna hai, andar ki files ek ek nahi

---

## Testing
Deploy ke baad:
1. Site kholo
2. Kisi bhi lesson mein jaao
3. AI Tutor mein kuch pucho
4. Response aana chahiye ✅

Agar error aaye → Netlify Dashboard → Functions → `chat` → Logs dekho
