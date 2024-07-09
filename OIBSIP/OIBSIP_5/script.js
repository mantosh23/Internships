document.getElementById('more-info').addEventListener('click', function() {
  document.getElementById('info-modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('info-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('info-modal')) {
      document.getElementById('info-modal').style.display = 'none';
  }
});
