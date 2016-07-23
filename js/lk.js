$(document).ready(function(){

	var prevDefault = function(e){
		$('vhod_form').on('submit', function(){
			e.prevDefault();
		});
	};

	var emailErr = function(){
			$('.vhod_form').on('submit', function(){
			if(('.vhod-m').val().length == 0){
				$(this).css('border','1px solid red');
				$(this).val('Введите пожалуйста email');
			};
		});
	};


	emailErr();

});