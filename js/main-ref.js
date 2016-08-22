$(document).ready(function(){


	$('#contact_me-form').on('submit', function(evt){
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

		};
		http.onerror = function() {
			alert('Извините, данные не были переданы');
		}

	}, false);

	var allInputs = $('#name-input, #email-input, #message-input');

// Создание функция всплывающих окон
		function mailSuccess() {
			$('.mail-success').fadeIn(400);
			setTimeout(function(){
				$('.mail-success').fadeOut(300);
			}, 2000);
		}


		function mailError() {
			$('.mail-error').fadeIn(400);
			setTimeout(function() {
				$('.mail-error').fadeOut(300)
			}, 2000)
		}

		function errorTab() {
			$('.error-tab').fadeIn(400);
			setTimeout(function() {
				$('.error-tab').fadeOut(300)
			}, 2000)
		}

// Валидация формы обратной связи с php

		$('.contact_form').on('submit', function(event) {
			event.preventDefault();
			
			var form = $(this),
				data = form.serialize();

			$.ajax({
				url: 'contact_form.php',
				type: 'POST',
				dataType: 'json',
				data: data,
				success: function(ans) {
					if (ans.email_status == 'success' && ans.name_status == 'success' && ans.message_status == 'success') {
						mailSuccess();
						allInputs.val('');
						allInputs.css('border','1px solid #d6d5d3')				
					} 

					if (ans.name_status == 'error') {
							$('#name-input').css('border', '2px solid #e0ad99');
							$('.tool_name').css('display', 'block');
							mailError();
						}
					if (ans.email_status == 'error') {
							$('#email-input').css('border', '2px solid #e0ad99');
							$('.tool_email').css('display', 'block');
							mailError();
						}
					if (ans.message_status == 'error') {
							$('#message-input').css('border', '2px solid #e0ad99');
							$('.tool_message').css('display', 'block');
							mailError();
						}
				},
				error: function(ans) {
					errorTab();
				}
			});

		});

		// Убираем бордер и тултипы при вводе букв в инпуты

			$('.inp').each(function(){
				$(this).on('keydown', function() {
					if($(this).val() !== 0) {
						$(this).css('border', '2px solid #76e0c2');
						$(this).parent().children('.tooltip, .tooltip-back').each(function() {
							$(this).css('display', 'none');	
						});
					}
				});
			});
});