$(document).ready(function() {
    var pageForm = $('.seo-form'),
        buttonAddUrl = $('.page-url-add');


    pageForm.on('submit', function() {
        var formData = new FormData(this);
        $.ajax({
            url: '/api/page?method=savePage',
            type: 'POST',
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function(data) {
                if (data.success && data.data.id !== undefined && data.data.id > 0) {
                    // Вывод сообщения
                    var saveSuccess = $('.save-page-success');
                    saveSuccess.fadeIn(300);
                    setTimeout(function () {
                        saveSuccess.fadeOut(300);
                    }, 5000);
                    // Обработка форм URL
                    $('.url__hidden-text').hide();
                    buttonAddUrl.show();
                } else if (data.error !== undefined && typeof(data.error) == 'object') {
                    for (var errorFieldName in data.error) {
                        var inputField = $('*[name=' + errorFieldName + ']').parent('.form-group');
                        if (inputField.length > 0) {
                            inputField.addClass('has-error');
                        }
                    }
                } else {
                    var saveError = $('.save-page-error');
                    saveError.fadeIn(300);
                    setTimeout(function() {
                        saveError.fadeOut(300);
                    }, 5000);
                }
            },
            error: function() {
                //    Вывод сообщения об ошибке
                var saveError = $('.save-page-error');
                saveError.fadeIn(300);
                setTimeout(function() {
                    saveError.fadeOut(300);
                }, 5000);
            }
        });
        return false;
    });

    //    Обработка кнопки 'Добавить URL'
    buttonAddUrl.on('click', function() {
        var urlForm = $('.urlPattern').clone();

    });
});