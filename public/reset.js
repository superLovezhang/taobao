let styleNode = document.createElement('style');
let w = window.innerWidth;
styleNode.innerHTML = 'html {font-size: '+w/16+'px}';
document.getElementsByTagName('head')[0].append(styleNode);