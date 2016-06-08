var CodeGridMarkdown = require('codegrid-markdown');

var CGMDRenderer = new CodeGridMarkdown({
  // options for marked
});

var str = '[note]\n' +
  '# 注釈タイトル\n' +
  '\n' +
  '注釈本文\n'+
  '[/note]\n';
var htmlStr = CGMDRenderer.render(str);
console.log(htmlStr);
