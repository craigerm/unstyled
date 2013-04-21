// Thanks to Vimium for this approach! (https://github.com/philc/vimium)
var shouldRemoveStyles = function(tab) {

  var urls = Settings.getUrls().split('\n');
  var isEnabled = false;

  for(var i=0; i < urls.length; i++) {
    var url = urls[i];
    regexp = new RegExp('^' + url.replace(/\*/g, '.*') + '$');
    if(tab.url.match(regexp)) {
      isEnabled = true;
    }
  }
  return isEnabled;
};

var getCSS = function() {
  var visitedColor = '#330066';
  var css = 'a:visited { color: $VISITED !important;}';
  css = css.replace(/\$VISITED/, visitedColor);
  return css;
};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(shouldRemoveStyles(tab)) {
    var css = getCSS();
    chrome.tabs.insertCSS(tabId, { code: css });
  }
});
