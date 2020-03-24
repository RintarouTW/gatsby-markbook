# Personal Markdown Book

This is modified from gatsby-default-starter.
Support some features I required for lots of my markdown key note files.

  - LaTeX (with KaTeX & gatsby-remark-mathjax, no server rendering thougth)
  - Graphviz (gatsby-transformer-graphviz)
  - Using Typography.js Themes (https://kyleamathews.github.io/typography.js/)
  - Code Highlight (gatsby-remark-vscode)
  - A simple filter to find the markdown pages by keyword. It's important for ppl like me who got tons of markdown files as notes.

Demo Site : https://markbook.netlify.com

# Screen Shots

Code Highlight
![](https://i.imgur.com/BnI2xlh.png)

Graphviz
![](https://i.imgur.com/BCJj3pC.png)

LaTeX
![](https://i.imgur.com/wGKYKV4.png)

Main Page (My tons of markdown key note files...)
![](https://i.imgur.com/HiRMact.png)

# Netlify Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/74fac30d-002b-4ea4-b443-3e4b7875f44b/deploy-status)](https://app.netlify.com/sites/markbook/deploys)

1. Fork this repository to your own account.
2. Goto https://app.netlify.com/ and click on `New Site from Git` button.
3. Choose the forked respository and deploy it. (All default setting is good.)
4. Wait for 2min and 32 seconds, your site is alive just like my demo site above.

# Local Installation

You can see this as another gatsby starter project with the features listed above, so u don't need to start from scratch.

```
npm install -g gatsby-cli
gatsby new gatsby-markbook https://github.com/RintarouTW/gatsby-markbook.git
  (it's even better to use the forked repository on your account.)

cd gatsby-markbook

gatsby develop
     or
gatsby build
gatsby serve
```

# Test

1. Browse http://localhost:8000/
2. Click on test (which is `src/pages/test.md`)
3. Check `src/pages/test.md` for the usage example for LaTeX, Graphviz and code highlight.
4. Put your .md files to `src/pages/` and they would be presented right away.


# Commit and Auto Publish to Netlify

If you had your Netlify deployed on the forked repository, any time you add .md files, commit and push, Netlify will get notified and update automatically. So, push your commit means publish to Netlify automatically.
100% Focus on the content writing feels really good. Enjoy it.
