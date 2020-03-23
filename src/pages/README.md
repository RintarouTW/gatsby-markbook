# Personal Markdown Book

This is modified from gatsby-default-starter.
Support some features I required for lots of my markdown files.

  - LaTeX (with KaTeX & gatsby-remark-mathjax, no server rendering thougth)
  - Graphviz (gatsby-transformer-graphviz)
  - Using Typography.js Themes (https://kyleamathews.github.io/typography.js/)
  - Code Highlight (gatsby-remark-vscode)
  - A simple filter to find the markdown pages by keyword. It's important for ppl like me who got tons of markdown files as notes.

# No deployment yet, only local so far.

So far, I used it as an important knowledge notebook. But the system is built on gatsby, it would be very easy to be deployed to what you want. I may create a branch for the demo deployment later.

# Install

```
npm install
npm install -g gatsby-cli

gatsby develop
     or
gatsby build
gatsby serve
```

# Test

1. Browse http://localhost:8000/
2. Click on test (which is **src/pages/test.md**)
3. Check **src/pages/test.md** for the usage example for LaTeX, Graphviz and code highlight.
4. Put your .md files to **src/pages/** and they would be presented right away.