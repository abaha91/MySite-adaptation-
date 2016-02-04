var myModule = (function() {


	
	var init = function() {
		_setUpListners();
	};


	
	var _setUpListners = function() {
		$("#new-project-add").on("click", _showModal);//подключение модального окна
		$(".bpopup_form").on('submit', _submitBut);//кнопка отправить
		$('input[type="file"]').on('change', _inputImg); //Обработчик инпута с изображением
		$('input.project_name').on('keydown', _removeTooltipName);
		$('input.project_img').on('keydown', _removeTooltipImg);
		$('input.project_url').on('keydown', _removeTooltipUrl);
		$('.textarea_add_project').on('keydown', _removeTooltipMessage);
		$('.menu-link').on('click', _showHideNav);




	};



		var _removeTooltipName = function(){
			$('.tool_name').hide();
			$('.project_name').css('border','');
		};
		var _removeTooltipImg = function(){
			$('.tool_img').hide();
			$('.fake-img-input').css('border','');
		};
		var _removeTooltipUrl = function(){
			$('.tool_url').hide();
			$('.project_url').css('border','');
		};
		var _removeTooltipMessage = function(){
			$('.tool_message').hide();
			$('.textarea_add_project').css('border','');
		};


	var _showModal = function(ev) {
		console.log('вызов модального окна');
		ev.preventDefault();


		var divPopup = $('.add_project'),
		    form = divPopup.find('.bpopup_form'),
		    clear = '';
		$('#new_project_popup').bPopup({
		onClose: function() {
			form.find('.tooltip').hide();
			$('input[type="text"], textarea').val('');
			$('input[type="text", textarea, .fake-img-input').css('border','');
		}
		});


	};

	var _submitBut = function(ev){
		$('.tooltip').hide();
		console.log('Кнопка отправить сработала');
		ev.preventDefault();



       //Объявляем переменные
		var form = $(this),
		    url = "add_project.php",
		    data = form.serialize();
            console.log(data);
            
            

        //Запрос на сервер

			$.ajax({
				url: url,
				type: 'POST',
				dataType: 'json',
				data: data,
			})
			.done(function(ans) {
				console.log(ans);
				if (ans.name_status === 'success'){
					console.log(ans.text);
				}else{
					console.log(ans.text);
					form.find('.tool_name').show();
					$('.project_name').css('border','2px solid #e0ad99');
		
				};
				if (ans.img_status === 'success'){
					console.log(ans.text);
				}else{
					console.log(ans.text);
					form.find('.tool_img').show();
					$('.fake-img-input').css('border','2px solid #e0ad99');
					
				}
				if (ans.url_status === 'success'){
					console.log(ans.text);
				}else{
					console.log(ans.text);
					form.find('.tool_url').show();
					$('.project_url').css('border','2px solid #e0ad99');

				}
				if (ans.message_status === 'success'){
					console.log(ans.text);
				}else{
					console.log(ans.text);
					form.find('.tool_message').show();
					$('.textarea_add_project').css('border','2px solid #e0ad99');

				}

			})
			.fail(function() {
				console.log("error");
			})

			


	};

	var _inputImg = function(){   //Обработчик инпута с изображением

        
        var fullName, fileName;
        fullName = $(this).val().split('\\');
        fileName = fullName[fullName.length - 1];
        $('.fake-img-input span').text(fileName)
        console.log($('.fake-img-input span').text());

	};

	// Открыть, скрыть навигацию

	var _showHideNav = function(e){
		e.preventDefault();
		$('.main-menu').slideToggle();
	};




	
	
	return {
		init: init
	};
})();

myModule.init();