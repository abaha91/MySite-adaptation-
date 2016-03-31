document.getElementById('contact_me-form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "../contact_me.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("name=" + f.name.value + "&email=" + f.email.value + "&message=" + f.message.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      console.log('Спасибо за сообщение\nЯ постараюсь вам ответить в ближайшее время =)');  
      f.message.removeAttribute('value'); // очистить поле сообщения (две строки)
      f.message.value='';
    }else if(http.readyState != 4 && http.status != 200){
		console.log('данные не отправлены');
	}
		
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
	  
}, false);



$(document).ready(function(){
_myModules2();
});
//--------------------------------Modules
var _myModules2 = function(){
	$('.contact_form').on('submit', _tooltips);  //Tooltips
	$('.contact_form').on('submit', _validForm);
	$('.name').on('keydown', _tooltipsNameOff);  //Убираем тултипы name
	$('.email').on('keydown', _tooltipsEmailOff);  //Убираем тултипы email
	$('.message').on('keydown', _tooltipsMessageOff);  //Убираем тултипы message
	};
	
//------------------------------------Tooltips	
var _tooltips = function(){
	if($('.name').val() == ''){
		$('.tool_name').show();
		$('.name').css('border','2px solid #e0ad99');
		}
	if($('.email').val() == ''){
			$('.tool_email').show();
			$('.email').css('border','2px solid #e0ad99');
		}
	if($('.message').val() == ''){
		$('.tool_message').show();
		$('.message').css('border','2px solid #e0ad99');
	}				

						
};




var _validForm = function(){
    var nameInput = $('.name').val(),
        emailInput = $('.email').val(),
        messageInput = $('.message').val();
        
    if(nameInput == '' || emailInput == '' || messageInput == ''){
      $('.mail-error').fadeIn(3000);
      $('.mail-error').fadeOut(3000);
	  return false;
    }else {
      $('.mail-success').fadeIn(3000);
      $('.mail-success').fadeOut(3000);
    }
};

	
var _tooltipsNameOff = function(){   //Убираем тултипы name
		$(this).css('border','');
		$('.tool_name').hide();		
};
	
var _tooltipsEmailOff = function(){   //Убираем тултипы email
		$(this).css('border','');
		$('.tool_email').hide();		
};
	
var _tooltipsMessageOff = function(){  //Убираем тултипы message
		$(this).css('border','');
		$('.tool_message').hide();		
};
	
