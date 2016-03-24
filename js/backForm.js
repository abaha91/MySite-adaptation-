document.getElementById('contact_me-form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "../contact_me.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("name=" + f.name.value + "&email=" + f.email.value + "&message=" + f.message.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert('Спасибо за сообщение\nЯ постараюсь вам ответить в ближайшее время =)');    
      f.message.removeAttribute('value'); // очистить поле сообщения (две строки)
      f.message.value='';
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
}, false);