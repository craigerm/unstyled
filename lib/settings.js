var Settings = {
  setUrls: function(urls) {
    localStorage.setItem('urls', JSON.stringify(urls));
  },
  getUrls: function() {
    var urls = localStorage.getItem('urls') || '';
    return JSON.parse(urls);
  }
};
