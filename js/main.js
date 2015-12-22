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
		$('.popup_exit').on('click' , _popExit)


	};


	var _popExit = function(ev){
        ev.preventDefault
		$("#new_project_popup").closePopup();
		
        


		
	};

		var _removeTooltipName = function(){
			$('.tool_name').hide();
		};
		var _removeTooltipImg = function(){
			$('.tool_img').hide();
		};
		var _removeTooltipUrl = function(){
			$('.tool_url').hide();
		};
		var _removeTooltipMessage = function(){
			$('.tool_message').hide();
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
		}
		});


	};

	var _submitBut = function(ev){
		$('.tooltip').hide();
		console.log('Кнопка отправить сработала');
		ev.preventDefault();



       //Объявляем переменные
		var form = $(this),
		    url = "/project1/add_project.php",
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
		
				};
				if (ans.img_status === 'success'){
					console.log(ans.text);
				}else{
					console.log(ans.text);
					form.find('.tool_img').show();
					
				}
				if (ans.url_status === 'success'){
					console.log(ans.text);
				}else{
					console.log(ans.text);
					form.find('.tool_url').show();

				}
				if (ans.message_status === 'success'){
					console.log(ans.text);
				}else{
					console.log(ans.text);
					form.find('.tool_message').show();

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


	
	
	return {
		init: init
	};
})();

myModule.init();