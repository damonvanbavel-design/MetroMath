// Haalt de rekenkern uit index.html zodat we de vraaggeneratoren in Node kunnen testen.
const fs = require('fs'), path = require('path'), vm = require('vm');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const code = html.match(/<script id="core">([\s\S]*?)<\/script>/)[1];
const ctx = {}; vm.createContext(ctx);
vm.runInContext(code + '\n;this.out={STATIONS,F,parseAns,rawIsSimplest};', ctx);
module.exports = ctx.out;
