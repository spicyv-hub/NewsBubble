# 🫧 NewsBubble

**Visualize trending news topics as interactive bubbles that grow based on mention frequency**

![NewsBubble Demo](https://img.shields.io/badge/Status-Prototype-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **Interactive Bubble Visualization**: Topics displayed as bubbles sized by article count
- **Real-time News**: Fetches live headlines from NewsAPI.org
- **Dynamic Sizing**: Bubbles grow when topics are mentioned more frequently
- **Color-Coded Topics**: Each topic has a unique color for easy identification
- **Article Explorer**: Click any bubble to see related articles
- **Auto-Refresh**: Optional auto-refresh to watch topics evolve
- **Category & Country Filters**: Customize your news feed
- **API Usage Tracking**: Monitor your daily API call limit (100 free/day)

## 🚀 Quick Start

### Option 1: Open Directly in Browser

1. Navigate to the `src` folder
2. Open `index.html` in your web browser
3. Get a free API key from [NewsAPI.org](https://newsapi.org/register)
4. Enter your API key in the settings section
5. Start exploring!

### Option 2: Use a Local Server (Recommended)

```bash
# Using Python 3
cd src
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server src -p 8000

# Then open http://localhost:8000 in your browser
```

## 📖 How It Works

1. **Topic Extraction**: The app fetches news headlines and extracts keywords from article titles
2. **Frequency Counting**: Keywords that appear multiple times are grouped into topics
3. **Bubble Sizing**: Each topic's bubble size is proportional to its article count
4. **Visual Encoding**: 
   - **Size** = Number of articles mentioning that topic
   - **Color** = Unique identifier for each topic
   - **Brightness** = Visual distinction

## 🎮 Interactions

| Action | Result |
|--------|--------|
| **Hover** on bubble | See topic name and article count |
| **Click** on bubble | Open article panel with related news |
| **Change category** | Fetch news from different category |
| **Change country** | Get news from different region |
| **Auto-Refresh** | Watch topics grow/shrink over time |

## 🔑 API Key Setup

This app uses **NewsAPI.org** which offers:
- ✅ **2,000 free requests** for development (as of 2026)
- ✅ **No credit card required**
- ✅ **Instant activation**

### Get Your Free API Key:

1. Visit [https://newsapi.org/register](https://newsapi.org/register)
2. Sign up with your email
3. Copy your API key
4. Paste it in the NewsBubble settings

**Note**: Free tier is limited to development/personal use only.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Visualization**: [D3.js v7](https://d3js.org/)
- **News API**: [NewsAPI.org](https://newsapi.org/)
- **Storage**: LocalStorage (for API key persistence)

## 📁 Project Structure

```
Newsbubble/
├── src/
│   ├── index.html      # Main HTML file
│   ├── styles.css      # Custom styles
│   ├── app.js          # Application logic
│   └── README.md       # This file
└── README.md           # Project overview
```

## 🎨 Customization

### Change Topic Limits

Edit `CONFIG` in `app.js`:

```javascript
const CONFIG = {
    maxTopics: 30,              // Maximum bubbles to display
    minTopicFrequency: 2,       // Minimum mentions to show a topic
    bubblePadding: 5,           // Space between bubbles
    refreshInterval: 60000,     // Auto-refresh interval (ms)
    // ...
};
```

### Add More Categories

Edit the `<select id="category">` in `index.html`:

```html
<option value="technology">Technology</option>
<option value="your-category">Your Category</option>
```

## ⚠️ Limitations

- **API Rate Limit**: 100 requests per day on free tier
- **Development Use Only**: Free API key cannot be used for commercial projects
- **Keyword Extraction**: Simple word frequency (not AI-powered topic modeling)
- **English-Optimized**: Stop word filtering works best for English news

## 🚧 Future Enhancements

Potential improvements if you want to extend this:

- [ ] **Better NLP**: Use natural language processing for smarter topic extraction
- [ ] **Sentiment Analysis**: Color bubbles by positive/negative sentiment
- [ ] **Topic Clustering**: Group related topics together
- [ ] **Historical Data**: Show topic trends over time
- [ ] **Multiple Sources**: Aggregate from multiple news APIs
- [ ] **Export Options**: Save visualization as image/PDF
- [ ] **Mobile App**: Responsive design for phones/tablets
- [ ] **Social Sharing**: Share interesting topic bubbles

## 📊 Use Cases

- **Personal News Dashboard**: Stay informed on trending topics
- **Journalism Research**: Track story development over time
- **Market Research**: Monitor brand/product mentions
- **Education**: Teach data visualization concepts
- **Portfolio Project**: Demonstrate D3.js and API integration skills

## 🐛 Troubleshooting

**"API limit reached"**
- Wait until tomorrow for reset, or use a different API key
- Reduce auto-refresh frequency

**"No topics found"**
- Try a different category or country
- The news cycle might be slow - refresh later

**"Bubbles not showing"**
- Check browser console for errors
- Ensure you have a valid API key saved
- Try a different browser

## 📄 License

MIT License - Feel free to use, modify, and distribute!

## 🤝 Contributing

This is a prototype project. Feel free to fork and enhance it!

---

**Built with ❤️ using D3.js and NewsAPI.org**

*Last updated: March 2026*
