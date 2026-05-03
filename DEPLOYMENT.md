# GitHub Pages Deployment Guide

## Quick Start

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **+** icon and select **New repository**
3. Name it (e.g., `secret-code-generator`)
4. Add a description (optional)
5. Choose **Public** (required for free GitHub Pages)
6. Click **Create repository**

### Step 2: Clone and Upload Files

#### Option A: Using Command Line (Git)

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/secret-code-generator.git
cd secret-code-generator

# Copy the project files (index.html, style.css, script.js, README.md)
# into this directory

# Add, commit, and push
git add .
git commit -m "Add Secret Code Generator"
git push origin main
```

#### Option B: Using GitHub Web Interface

1. Go to your repository page
2. Click **Upload files**
3. Drag and drop:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
4. Click **Commit changes**

### Step 3: Enable GitHub Pages

1. Go to your repository **Settings**
2. Scroll down to **Pages** section
3. Under "Source", select:
   - Branch: **main** (or **master** if you only have that)
   - Folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes for deployment

### Step 4: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/secret-code-generator
```

## Troubleshooting

### Site Not Loading?

1. **Clear browser cache** - Ctrl+Shift+Delete
2. **Wait a few minutes** - Deployment takes 1-2 minutes
3. **Check repository is public** - Settings → Visibility → Public
4. **Verify files are in root** - index.html should be at the root

### Custom Domain

If you want to use a custom domain, see [GitHub Pages Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Future Updates

To update your site after deployment:

1. Make changes locally to your files
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: Description of changes"
   git push origin main
   ```
3. Changes automatically deploy within 1-2 minutes

## More Info

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Publishing Source](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites)
