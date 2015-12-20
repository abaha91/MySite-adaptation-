var myModule = (function() {
	
	var init = function() {
		_setUpListners();
	};
	
	var _setUpListners = function() {
		$("#new-project-add").on("click", _showModal);//подключение модального окна
		$(".bpopup_form").on('submit', _submitBut);//кнопка отправить
		
	};

	var _showModal = function(ev) {
		console.log('вызов модального окна');
		ev.preventDefault();

		var divPopup = $('.add_project'),
		    form = divPopup.find('.bpopup_form');
		$('#new_project_popup').bPopup({
		onClose: function() {
			form.find('.tooltip').hide();
		}
		});


	};

	var _submitBut = function(ev){
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
				if (ans.status === 'success'){
					console.log(ans.text);
				}else{
					console.log(ans.text);
					form.find('.tooltip').show();
				}
			})
			.fail(function() {
				console.log("error");
			})

			


	};
	
	return {
		init: init
	};
})();

myModule.init();