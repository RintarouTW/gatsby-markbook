# Personal Markdown Book <img class="icon" width="32" height="32" src="https://i.imgur.com/KHOWAta.png"/>

This is modified from `gatsby-default-starter`.
Support some features I required for lots of my markdown key note files.

  - $\LaTeX$ (with $\KaTeX$ and `gatsby-remark-mathjax`, no server rendering thougth)
  - Graphviz (via `gatsby-transformer-graphviz`)
  - Using `Typography.js` Themes (https://kyleamathews.github.io/typography.js/)
  - Code Highlight (`.md` via `gatsby-remark-vscode`,  `.mdx` via `primjs`)
  - GeoGeBra Component to load and show GeoGeBra graphic much faster than iframe.
  - A simple filter to find the markdown pages by keyword. It's important for ppl like me who got tons of markdown files as notes.

Demo Site : *https://markbook.netlify.com*

# GitHub

<img class="icon" height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"></img> *https://github.com/RintarouTW/gatsby-markbook*

# Screen Shots

Code Highlight
![](https://i.imgur.com/BnI2xlh.png)

Graphviz
![](https://i.imgur.com/BCJj3pC.png)

LaTeX
![](https://i.imgur.com/wGKYKV4.png)

# Netlify Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/74fac30d-002b-4ea4-b443-3e4b7875f44b/deploy-status)](https://app.netlify.com/sites/markbook/deploys)

1. Fork this <a href="https://github.com/RintarouTW/gatsby-markbook.git">repository (*https://github.com/RintarouTW/gatsby-markbook.git*)</a> to your own account.
2. Goto *https://app.netlify.com/* and click on `New Site from Git` button.
3. Choose your forked respository and deploy it. (All default setting is good. nothing to change.)
4. Wait for 2min and 32 seconds, your site would be alive just like my demo site.

# Local Installation

You can see this as another gatsby starter project with the features listed above, so u don't need to start from scratch.

```bash
npm install -g gatsby-cli

gatsby new gatsby-markbook https://github.com/RintarouTW/gatsby-markbook.git
  
# It is even better to use the forked repository on your account.

cd gatsby-markbook

gatsby develop

# or production build

gatsby build
gatsby serve
```

# Test

1. Browse *http://localhost:8000/*
2. Click on Test page (which is `src/pages/Test.md`)
3. Check `src/pages/Test.md` for the usage example for $\LaTeX$, Graphviz, code highlight and more.
4. Put your `.md` files to `src/pages/` and they would be presented right away.


# Commit and Auto Publish to *Netlify*

If you had your *Netlify* deployed on the forked repository, any time you add/modify `.md` files to `src/pages/`, commit and push, *Netlify* will get notified, update and publish automatically. So, push your commit means publish to *Netlify* automatically. 100% Focus on the content writing feels really good. 

Enjoy it.
