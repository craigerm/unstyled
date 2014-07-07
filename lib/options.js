window.addEventListener('DOMContentLoaded', function() {

  var save = $('#save');
  var urls = $('#urls');

  urls.val(Settings.getUrls());

  urls.keyup(function() {
    save.removeAttr('disabled');
  });

  save.click(function() {
    Settings.setUrls(urls.val());
    var color = '#' + $('#color').spectrum('get').toHex();
    save.attr('disabled', 'disabled');
    Settings.setColor(color);
  });

  $('#color').spectrum({
    change: function() {
      save.removeAttr('disabled');
    },
    color: Settings.getColor(),
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    palette: [
      ['#00F'],
      ['#9400D3'],
      ['#4B0082'],
      ['#306'],
      ['#333'],
      ['black']
    ]
  });
});
