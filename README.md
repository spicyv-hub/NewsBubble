# 🫧 NewsBubble

> **See what's trending in the news — at a glance**

[![Status](https://img.shields.io/badge/status-ready-green)](.)
[![License](https://img.shields.io/badge/license-MIT-blue)](.)

**NewsBubble** visualizes news topics as interactive bubbles. Bigger bubbles = more articles mentioning that topic. Click any bubble to read related articles.

---

## 🎯 Quick Start

### Try Demo (30 seconds - No Setup)
1. Open [`src/index.html`](src/index.html) in your browser
2. Click **"🎯 Try Demo"**
3. Explore the bubbles!

### Or Run Locally
```bash
cd src
python -m http.server 8000
# Open http://localhost:8000
```

### Load Live News (Optional)
1. Get free API key at [newsapi.org/register](https://newsapi.org/register)
2. Click "Load Live News" in the app
3. Enter your API key
4. See real headlines as bubbles!

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎯 **Demo Mode** | Try without any setup - uses sample data |
| 📡 **Live News** | Connect to NewsAPI.org for real headlines |
| 🫧 **Bubble Visualization** | Size = mention frequency, Color = unique topic |
| 📰 **Article Explorer** | Click bubbles to read related articles |
| 🌍 **Multi-Region** | Support for 8+ countries, 7 categories |
| 📱 **Responsive** | Works on desktop, tablet, and mobile |
| 💾 **Auto-Save** | API key saved locally for convenience |

---

## 🎮 How to Use

1. **Choose Mode**: Demo (sample data) or Live (real news)
2. **Watch Bubbles**: Each bubble is a topic, size shows importance
3. **Click to Explore**: Tap any bubble to see articles
4. **Refresh**: Get new topics anytime

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Visualization**: [D3.js v7](https://d3js.org/)
- **News API**: [NewsAPI.org](https://newsapi.org/) (free tier)
- **Hosting**: GitHub Pages / Netlify / Vercel (all free)

---

## 📁 Project Structure

```
Newsbubble/
├── src/
│   ├── index.html      # Main app UI
│   ├── styles.css      # Dark theme styles
│   ├── app.js          # App logic + D3 visualization
│   └── README.md       # User documentation
├── TEST_GUIDE.md       # Testing instructions
├── DEPLOY.md           # Deployment guide
├── PROJECT_OVERVIEW.md # Research & feasibility analysis
└── README.md           # This file
```

---

## 🧪 Testing

See [TEST_GUIDE.md](TEST_GUIDE.md) for detailed testing instructions.

**Quick test:**
1. Open `src/index.html` in browser
2. Click "Try Demo"
3. Hover and click bubbles
4. Verify article panel works

---

## 🚀 Deployment

See [DEPLOY.md](DEPLOY.md) for deployment options:

- **GitHub Pages** (recommended) - Free, easy
- **Netlify** - Drag & drop deployment
- **Vercel** - Fast, automatic deployments

**Deploy in 2 minutes:**
```bash
git init
git add .
git commit -m "NewsBubble"
git remote add origin https://github.com/yourusername/newsbubble.git
git push -u origin main
# Then enable GitHub Pages in Settings
```

---

## 📊 Research Findings

Based on MCP research:

### ✅ Feasibility: CONFIRMED
- All technologies are free and mature
- No backend required (client-side only)
- Free news APIs available (100-200 requests/day)

### ✅ Usefulness: VALIDATED
- **Ground News** (competitor) has 10,000+ reviews, paid subscriptions
- Visual news consumption is proven market
- Unique angle: bubble visualization for quick trend awareness

### 📈 Market Opportunity
| Competitor | Approach | Price | Gap |
|------------|----------|-------|-----|
| Google News | Text lists | Free | No visual overview |
| Ground News | Bias bars | $0.83-$8/mo | No bubbles |
| **NewsBubble** | **Bubbles** | **Free** | **Unique visual approach** |

See [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) for full analysis.

---

## 🔮 Future Enhancements

Potential upgrades if you want to extend:

### Easy (1-2 hours)
- [ ] Add topic velocity indicators (↑ growing, ↓ shrinking)
- [ ] Export visualization as PNG
- [ ] Add search to filter bubbles
- [ ] More color themes

### Medium (1-2 days)
- [ ] **BERTopic integration** (better topic clustering)
- [ ] Sentiment analysis (color by positive/negative)
- [ ] Historical comparison ("2x bigger than yesterday")
- [ ] Source diversity indicator

### Advanced (1-2 weeks)
- [ ] Media bias detection (like Ground News)
- [ ] Filter bubble alerts
- [ ] Real-time WebSocket streaming
- [ ] Mobile app (React Native)

---

## 📝 License

MIT License - Free to use, modify, and distribute.

---

## 🤝 Contributing

This is a prototype. Feel free to fork and enhance!

**Ways to contribute:**
- Report bugs
- Suggest features
- Improve topic extraction
- Add new visualizations
- Translate to other languages

---

## 📬 Contact

Built with ❤️ using D3.js and NewsAPI.org

**Questions or feedback?** Open an issue or reach out!

---

<p align="center">
  <strong>🫧 See what's trending — at a glance</strong>
</p>
