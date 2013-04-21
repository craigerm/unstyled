window.addEventListener('DOMContentLoaded', function() {

  var save = document.getElementById('save');
  var urls = document.getElementById('urls');

  urls.value = Settings.getUrls();

  urls.addEventListener('keyup', function() {
    save.removeAttribute('disabled');
  });

  save.addEventListener('click', function() {
    save.setAttribute('disabled');
    Settings.setUrls(urls.value);
  });
});
