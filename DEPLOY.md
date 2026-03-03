# 🚀 Deploy NewsBubble to GitHub Pages

## Option 1: Deploy via GitHub (Recommended - Free)

### Step 1: Create a GitHub Repository
1. Go to https://github.com/new
2. Repository name: `newsbubble` (or your choice)
3. Make it **Public**
4. Click **Create repository**

### Step 2: Upload Files
```bash
# Navigate to your project
cd C:\Users\andyv\_AIprojects\Newsbubble

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: NewsBubble app"

# Add your GitHub repo as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/newsbubble.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo **Settings** → **Pages**
2. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
3. Click **Save**
4. Wait 1-2 minutes for deployment

### Step 4: Access Your Live App
Your app will be live at:
```
https://YOUR_USERNAME.github.io/newsbubble/
```

---

## Option 2: Deploy via Netlify (Free, Drag & Drop)

### Step 1: Prepare Files
1. Create a folder with just the `src` contents:
   - `index.html`
   - `styles.css`
   - `app.js`

### Step 2: Deploy to Netlify
1. Go to https://app.netlify.com/drop
2. Drag and drop the `src` folder
3. Wait for deployment (30 seconds)
4. Your app is live!

### Step 3: Customize Domain (Optional)
- Netlify gives you: `random-name.netlify.app`
- You can customize in Settings → Domain management

---

## Option 3: Deploy via Vercel (Free)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
cd C:\Users\andyv\_AIprojects\Newsbubble\src
vercel --prod
```

### Step 3: Follow Prompts
- Login/signup
- Confirm settings
- Get your live URL

---

## 📋 Pre-Deployment Checklist

Before deploying, verify:

- [ ] App works locally at http://localhost:8000
- [ ] Demo mode loads without errors
- [ ] Bubbles render correctly
- [ ] Clicking bubbles opens article panel
- [ ] Mobile responsive (resize browser to test)
- [ ] No console errors (F12 → Console)

---

## 🔗 Share Your App

After deployment, share with testers:

1. **Post on social media** (Twitter, LinkedIn)
2. **Share in relevant communities**:
   - r/sideproject
   - r/webdev
   - Hacker News "Show HN"
   - Product Hunt
3. **Send to 5-10 friends** for feedback
4. **Collect feedback** via Google Form or Typeform

---

## 📊 Track Usage

Add simple analytics (optional):

### Google Analytics
Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Or use Plausible (Privacy-friendly)
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🎉 You're Live!

Once deployed, your NewsBubble app is accessible worldwide. Share it, gather feedback, and iterate!

**Next steps after launch:**
1. Collect user feedback for 1 week
2. Identify most requested features
3. Plan v2 improvements
4. Consider adding BERTopic, sentiment analysis, etc.
