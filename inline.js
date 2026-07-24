const fs = require('fs');
const path = require('path');

const root = process.cwd();
const indexPath = path.join(root, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Load CSS files
const fontsCss = fs.readFileSync(path.join(root, 'css', 'fonts.css'), 'utf8');
const styleCss = fs.readFileSync(path.join(root, 'css', 'style.css'), 'utf8');
const componentsCss = fs.readFileSync(path.join(root, 'css', 'components.css'), 'utf8');

// Combine CSS
const combinedCss = [fontsCss, styleCss, componentsCss].join('\n\n');

// Load JS files
const jsFiles = [
    'process-env.js',
    'locale-polyfill.js',
    'spa-router.js',
    'twitter-fix.js',
    'badge-remover.js',
    'preserve-params.js',
    'nested-links.js',
    'appear-animations.js',
    'animator.js',
    'analytics-helper.js'
];

let combinedJs = '';
for (const file of jsFiles) {
    const filePath = path.join(root, 'js', file);
    if (fs.existsSync(filePath)) {
        combinedJs += '/* ' + file + ' */\n' + fs.readFileSync(filePath, 'utf8') + '\n\n';
    }
}

// Remove old stylesheet links and old script tags
html = html.replace(/<link rel="stylesheet" href="css\/fonts\.css">\s*/gi, '');
html = html.replace(/<link rel="stylesheet" href="css\/style\.css">\s*/gi, '');
html = html.replace(/<link rel="stylesheet" href="css\/components\.css">\s*/gi, '');
html = html.replace(/<script src="js\/[^"]+"><\/script>\s*/gi, '');

// Insert combined CSS & JS inside head before </head>
const headInject = '\n    <!-- Inlined CSS Styles (Fonts, Framer Styles, Components) -->\n    <style id="inlined-all-styles">\n' + combinedCss + '\n    </style>\n\n    <!-- Inlined Core Scripts -->\n    <script id="inlined-all-scripts">\n' + combinedJs + '\n    </script>\n';

if (html.includes('<!-- Stylesheets -->')) {
    html = html.replace('<!-- Stylesheets -->', headInject);
} else {
    html = html.replace('</head>', headInject + '\n</head>');
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully inlined all CSS and JS into index.html');
