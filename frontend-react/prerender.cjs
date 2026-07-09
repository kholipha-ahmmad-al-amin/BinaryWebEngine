const fs = require('fs');
const path = require('path');

// Array of routes to statically pre-render for search engine crawlers (SEO)
const routes = ['/', '/about', '/faq', '/docs', '/contact'];

async function prerender() {
  const distPath = path.resolve(__dirname, 'dist');
  if (!fs.existsSync(distPath)) {
    console.error('Build directory not found. Please run: npm run build');
    return;
  }

  const template = fs.readFileSync(path.resolve(distPath, 'index.html'), 'utf8');

  for (const route of routes) {
    const filename = route === '/' ? 'index.html' : `${route.slice(1)}/index.html`;
    const filepath = path.join(distPath, filename);

    // Create subdirectories if they don't exist
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Customize Title and Meta descriptions dynamically per route during build
    let html = template;
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `BinaryWebEngine - ${route === '/' ? 'Home' : route.slice(1).toUpperCase()}`,
      "description": "All-in-one Linux security operations monitoring dashboard.",
      "url": `https://binarywebengine.web.app${route}`
    };

    const structuredDataScript = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
    html = html.replace('</head>', `${structuredDataScript}\n</head>`);

    fs.writeFileSync(filepath, html, 'utf8');
    console.log(`[SEO Prerender] Generated static build for route: ${route} -> ${filename}`);
  }
}

prerender().catch(console.error);
