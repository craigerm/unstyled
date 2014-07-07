var Settings = {

  defaultColor: '#330066',

  setUrls: function(urls) {
    localStorage.setItem('urls', JSON.stringify(urls));
  },

  setColor: function(color) {
    localStorage.setItem('color', color);
  },

  getColor: function() {
    var color = localStorage.getItem('color') || Settings.defaultColor;
    return color;
  },

  getUrls: function() {
    var urls = localStorage.getItem('urls');
    return urls ? JSON.parse(urls) : '';
  }
};
