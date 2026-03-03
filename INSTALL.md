# 🚀 NewsBubble - Installation & Running Guide

> **See what's trending in the news — at a glance**

Get NewsBubble running in **under 2 minutes**! No complex setup required.

---

## 🎯 Quick Start (Choose One Option)

### Option 1: Use the Live Site (Easiest) ⭐ Recommended

**No installation needed!**

1. **Visit:** https://spicyv-hub.github.io/NewsBubble/
2. **Click:** "🎯 Try Demo" (works immediately)
3. **Or:** "📡 Load Live News" (needs free API key)

✅ **Best for:** Most users who just want to try it out

---

### Option 2: Run Locally (For Testing/Development)

#### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- **Optional:** Python 3.x (for local server)

#### Step 1: Download the Code

**Method A: Download ZIP**
1. Go to: https://github.com/spicyv-hub/NewsBubble
2. Click **"Code"** button (green)
3. Click **"Download ZIP"**
4. Extract the ZIP file

**Method B: Git Clone**
```bash
git clone https://github.com/spicyv-hub/NewsBubble.git
cd Newsbubble
```

#### Step 2: Run the App

**Method A: Open Directly (Simplest)**
1. Open `index.html` in your web browser
2. App opens in your browser!

**Method B: Use Local Server (Recommended)**

If you have **Python** installed:
```bash
python -m http.server 8000
```

If you have **Node.js** installed:
```bash
npx http-server . -p 8000
```

Then open: **http://localhost:8000**

---

## 📱 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 80+ | ✅ Fully Supported |
| Firefox | 75+ | ✅ Fully Supported |
| Edge | 80+ | ✅ Fully Supported |
| Safari | 13+ | ✅ Fully Supported |
| Opera | 70+ | ✅ Fully Supported |

---

## 🎮 Using NewsBubble

### Demo Mode (No Setup)
1. Open the app
2. Click **"🎯 Try Demo"**
3. Explore sample topics instantly!

### Live News Mode (Real Headlines)
1. Click **"📡 Load Live News"**
2. Get free API key at: https://newsapi.org/register
3. Enter your API key
4. Select category & country
5. Click **"🚀 Load Live News"**

### Interactions
| Action | Result |
|--------|--------|
| **Hover** on bubble | See topic name + article count |
| **Click** on bubble | View related articles in side panel |
| **Click** article | Open full article in new tab |
| **Click** X or press Escape | Close article panel |
| **Click** 🔄 | Refresh news/topics |

---

## ⚙️ Configuration (Optional)

### Change News Category
In the settings panel, choose from:
- 📰 General News
- 💼 Business
- 💻 Technology
- 🎬 Entertainment
- ⚽ Sports
- 🔬 Science
- 🏥 Health

### Change Region
Select from:
- 🇺🇸 United States
- 🇬🇧 United Kingdom
- 🇨🇦 Canada
- 🇦🇺 Australia
- 🇮🇳 India
- 🇩🇪 Germany
- 🇫🇷 France
- 🇯🇵 Japan

---

## 🔧 Troubleshooting

### App won't load
**Solution:** Try a different browser or clear cache (Ctrl+Shift+R)

### Demo mode shows blank screen
**Solution:** Check browser console (F12) for errors. Make sure JavaScript is enabled.

### Live news fails to load
**Solutions:**
1. Verify API key is correct
2. Check if you've exceeded 100 API calls/day limit
3. Try a different category or country
4. Wait for API reset (midnight UTC)

### Bubbles not showing
**Solutions:**
1. Refresh the page
2. Try a different category
3. Check if articles are loading (check status bar)

### Articles panel is empty
**Solution:** Some topics may not have full articles in demo mode. Try live news mode.

### App looks broken on mobile
**Solution:** Ensure you're using a modern mobile browser. Rotate to landscape for better view.

---

## 📊 API Usage Notes

### NewsAPI.org Free Tier
- **Limit:** 100 requests per day
- **Reset:** Midnight UTC
- **Commercial use:** Not allowed on free tier
- **Rate limit:** 100 calls/day per API key

### Tips to Reduce API Calls
1. Use **Demo mode** for testing
2. Enable **auto-refresh sparingly** (uses 1 call per refresh)
3. **Cache results** by keeping the tab open
4. Share **one API key** among team members

---

## 💾 Data Storage

The app stores locally:
- ✅ API key (saved in browser localStorage)
- ✅ Last used settings (category, country)

**No data is sent to external servers** except API calls to NewsAPI.org.

---

## 🔒 Privacy & Security

- **No tracking** or analytics by default
- **No cookies** (except localStorage for settings)
- **API key** stored locally in your browser only
- **Open source** - inspect all code on GitHub

---

## 🛠️ For Developers

### Tech Stack
- **Frontend:** Vanilla JavaScript (ES6+)
- **Visualization:** D3.js v7 (loaded from CDN)
- **Styling:** Custom CSS (no framework)
- **API:** NewsAPI.org REST API

### File Structure
```
Newsbubble/
├── index.html      # Main HTML file
├── styles.css      # All styles
├── app.js          # App logic + D3 code
├── README.md       # Project overview
├── INSTALL.md      # This file
└── TEST_GUIDE.md   # Testing instructions
```

### Modify the Code
1. Edit files in the root folder
2. Refresh browser to see changes
3. No build step required!

### Add Custom Features
```javascript
// Example: Add a new topic color
// Edit app.js, find CONFIG.colors
const CONFIG = {
    colors: [
        '#6366f1', // Add your color here
        '#your-color-here'
    ]
};
```

---

## 📦 Deployment Options

### Deploy Your Own Copy

**GitHub Pages (Free):**
```bash
git clone https://github.com/spicyv-hub/NewsBubble.git
cd Newsbubble
# Make your changes
git add .
git commit -m "My customization"
git push
# Enable GitHub Pages in Settings
```

**Netlify (Free):**
1. Go to: https://app.netlify.com/drop
2. Drag the `src` folder
3. Get instant live URL!

**Vercel (Free):**
```bash
npm install -g vercel
cd src
vercel --prod
```

---

## 🤝 Contributing

Want to improve NewsBubble?

1. **Fork** the repo
2. **Make changes**
3. **Test locally**
4. **Submit a pull request**

See [README.md](README.md) for contribution guidelines.

---

## 📬 Support

**Issues?** 
- Check [TEST_GUIDE.md](TEST_GUIDE.md) for testing tips
- Check [DEPLOY.md](DEPLOY.md) for deployment help
- Open an issue on GitHub: https://github.com/spicyv-hub/NewsBubble/issues

**Questions?**
- Email: andyvoonhk@gmail.com
- GitHub Discussions: https://github.com/spicyv-hub/NewsBubble/discussions

---

## 📄 License

MIT License - Free to use, modify, and distribute.

---

<p align="center">
  <strong>🫧 Happy exploring!</strong><br>
  <a href="https://spicyv-hub.github.io/NewsBubble/">Try it live →</a>
</p>
