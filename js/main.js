var myModule = (function() {
	
	var init = function() {
		_setUpListners();
	};
	
	var _setUpListners = function() {
		$("#new-project-add").on("click", _showModal);//подключение модального окна
		$(".project_but").on("click", _submitBut);//кнопка отправить
		
	};

	var _showModal = function(ev) {
		console.log('вызов модального окна');
		ev.preventDefault();
		$('#new_project_popup').bPopup();
	};

	var _submitBut = function(ev){
		console.log('Кнопка отправить сработала');
		ev.preventDefault();


       //Объявляем переменные
		var form = $(this),
		    url = "add_project.php",
		    data = form.serialize();
            

		    console.log(data);


			$.ajax({
				url: 'url',
				type: 'POST',
				dataType: 'json',
				data: data,
			})
			.done(function(ans) {
				console.log("success");
				console.log(ans);
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
			


	};
	
	return {
		init: init
	};
})();

myModule.init();