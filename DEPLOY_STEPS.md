# 🚀 Deploy to GitHub Pages - Step by Step

## ✅ Local Setup Complete!

Your git repository is initialized and your code is committed.

---

## 📋 Next Steps (5 minutes)

### Step 1: Create GitHub Repository

1. **Go to:** https://github.com/new
2. **Repository name:** `newsbubble` (or your choice)
3. **Visibility:** Public (required for free GitHub Pages)
4. **DO NOT** initialize with README (we already have one)
5. **Click:** "Create repository"

### Step 2: Copy the Commands from GitHub

After creating the repo, GitHub will show you commands like:

```bash
git remote add origin https://github.com/YOUR_USERNAME/newsbubble.git
git branch -M main
git push -u origin main
```

### Step 3: Push Your Code

Replace `YOUR_USERNAME` with your GitHub username, then run:

```bash
cd C:\Users\andyv\_AIprojects\Newsbubble
git remote add origin https://github.com/YOUR_USERNAME/newsbubble.git
git push -u origin main
```

**Note:** You'll be asked to login to GitHub in your browser.

---

## 🌐 Enable GitHub Pages

### Step 4: Configure Pages

1. **Go to your repo** on GitHub
2. **Click:** Settings (top menu)
3. **Click:** Pages (left sidebar)
4. **Under "Source":**
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. **Click:** Save

### Step 5: Wait for Deployment

GitHub will deploy your site in 1-2 minutes. You'll see:

> "Your site is live at `https://YOUR_USERNAME.github.io/newsbubble/`"

---

## 🎉 Your App is Live!

### Access Your App

Your NewsBubble app will be available at:
```
https://YOUR_USERNAME.github.io/newsbubble/
```

### Share It!

- ✅ Send link to friends for testing
- ✅ Post on social media
- ✅ Share in relevant communities

---

## 🔧 Troubleshooting

### Page shows 404 error
- Wait 2-3 minutes for deployment
- Check Settings → Pages is configured correctly
- Verify files are in the root of the repo (not in a subfolder)

### Push fails with authentication error
- Make sure you're logged into GitHub
- Use a Personal Access Token if 2FA is enabled:
  - Generate token at: https://github.com/settings/tokens
  - Use token instead of password when pushing

### Changes not showing after update
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Wait 1-2 minutes for GitHub to redeploy

---

## 📊 Update Your App Later

After making changes:

```bash
cd C:\Users\andyv\_AIprojects\Newsbubble
git add .
git commit -m "Describe your changes"
git push
```

GitHub Pages will automatically redeploy in 1-2 minutes!

---

## 🎯 Alternative: Deploy to Netlify (Easier)

If GitHub Pages is confusing, try Netlify:

1. **Go to:** https://app.netlify.com/drop
2. **Drag folder:** Drop the `src` folder onto the page
3. **Done!** Get instant live URL

Netlify is simpler but GitHub Pages is better for version control.

---

**Need help?** Reply with any errors you encounter!
