var myModule = (function() {


	
	var init = function() {
		_setUpListners();
	};


	
	var _setUpListners = function() {
		$('.contact_form').on('submit', _submitContacts); //Обработчик сабмита формы обратной связи
		$('.clear').on("click", _resetFunction);
		$('input.name').on('keydown', _removeTooltipName);
		$('input.email').on('keydown', _removeTooltipEmail);
		$('textarea.textarea').on('keydown', _removeTooltipMessage);
		$('input.capcha-input').on('keydown', _removeTooltipCapcha);

	};

	var _removeTooltipName = function(){
		$(this).css('border','');
		$('.tool_name').hide();
	};

	var _removeTooltipEmail = function(){
		$(this).css('border','');
		$('.tool_email').hide();
	};

	var _removeTooltipMessage = function(){
		$(this).css('border','');
		$('.tool_message').hide();
	};

	var _removeTooltipCapcha = function(){
		$(this).css('border','');
		$('.tool_capcha').hide();
	};

	var _submitContacts = function(ev){
		$('textarea, input[type="text"]').css('border', '');
		$('.tooltip, .tooltip-back').hide();
		ev.preventDefault();
		var contactForm = $(this);
		var url = 'contact_form.php';
		var data = contactForm.serialize();
		console.log(data);


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
					contactForm.find('.tool_name').show();
					contactForm.find('.name').css('border' , '2px solid #e0ad99');

				};
				if (ans.email_status === 'success'){
					console.log(ans.text);
				}else{
					console.log(ans.text);
					contactForm.find('.tool_email').show();
					contactForm.find('.email').css('border' , '2px solid #e0ad99');
				}
				
				if (ans.message_status === 'success'){
					console.log(ans.text);
				}else{
					console.log(ans.text);
					contactForm.find('.tool_message').show();
					contactForm.find('textarea').css('border' , '2px solid #e0ad99');
				}
				if (ans.capcha_status === 'success'){
					console.log(ans.text);
				}else{
					console.log(ans.text);
					contactForm.find('.tool_capcha').show();
					contactForm.find('.capcha-input').css('border' , '2px solid #e0ad99');
				}
		})
		.fail(function() {
			console.log("error");
		})
		
	};

	

var _resetFunction = function(){
	$('input[type="text"], textarea').val('');
	$('input[type="text"], textarea').css('border', '');
	$('.tooltip, .tooltip-back').hide();
};





	
	
	return {
		init: init
	};
})();

myModule.init();

	

