# 🫧 NewsBubble - Quick Test Guide

## 🎯 Goal
Test the NewsBubble visualization app to see if bubble-based news topics are intuitive and useful.

---

## ✅ Testing Steps

### Step 1: Open the App
**URL:** http://localhost:8000

You should see:
- Large "NewsBubble" title
- Two big buttons: "Try Demo" and "Load Live News"
- Welcome message

### Step 2: Try Demo Mode (No Setup Required)
1. Click **"🎯 Try Demo (No Setup)"** button
2. Wait 1 second for loading
3. You should see **colored bubbles** of different sizes
4. Each bubble = a news topic
5. Bigger bubble = more articles

**Expected bubbles:** AI Technology, Climate Change, Stock Market, Elections, etc.

### Step 3: Interact with Bubbles
1. **Hover** over any bubble → Tooltip shows topic name + article count
2. **Click** a bubble → Article panel slides in from right
3. **Click** an article → Opens in new tab (demo links are #)
4. **Click X** or press Escape → Close panel

### Step 4: Try Live News (Optional - Needs API Key)
1. Click **"📡 Load Live News"** button
2. Settings panel appears
3. Get free API key at: https://newsapi.org/register
4. Enter your API key
5. Select category and country
6. Click **"🚀 Load Live News"**
7. Watch real news topics appear as bubbles!

---

## 🧪 Test Checklist

### Visual Design
- [ ] Page loads without errors
- [ ] Bubbles are different sizes (based on article count)
- [ ] Bubbles have different colors
- [ ] Text on bubbles is readable
- [ ] Layout looks good on your screen size

### Interactions
- [ ] Hover shows tooltip with topic info
- [ ] Click opens article panel
- [ ] Articles are listed in the panel
- [ ] Panel can be closed (X button or Escape key)
- [ ] Refresh button works

### User Experience
- [ ] Clear what to do next (demo vs live news)
- [ ] Loading states are visible
- [ ] Error messages are helpful
- [ ] "How It Works" section is clear

---

## 🐛 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| **Page is blank** | Check browser console (F12) for errors |
| **Bubbles not showing** | Try refreshing the page |
| **Demo button doesn't work** | Check if JavaScript is enabled |
| **Live news fails** | Verify API key is correct, check API quota |
| **Bubbles too small/large** | Resize browser window |
| **Text overlapping** | Try a different browser (Chrome recommended) |

---

## 📊 Feedback Questions

After testing, ask yourself:

1. **First Impression**: Did you immediately understand what the bubbles represent?
2. **Clarity**: Is it obvious that bigger = more mentions?
3. **Usefulness**: Would you use this to quickly scan news trends?
4. **Interaction**: Was clicking bubbles to read articles intuitive?
5. **Demo vs Live**: Did the demo help you understand the app?
6. **Missing Features**: What would make this more useful for you?

---

## 🚀 Next Steps After Testing

If the test is successful:

1. **Deploy to GitHub Pages** (free hosting)
2. **Share with 5-10 users** for feedback
3. **Collect feedback** on clarity and usefulness
4. **Decide on enhancements** (sentiment, better topics, etc.)

---

## 📝 Quick Feedback Template

```
✅ What I liked:
- 

❌ What was confusing:
- 

💡 Suggestions:
- 

⭐ Overall rating (1-5):
```

---

**Server running at:** http://localhost:8000

**Need help?** Check browser console (F12) for error messages.
