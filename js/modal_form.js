$(document).ready(function(){

/*
 *  Обработка нажатия на кнопку "Заказать"
 *  вывод модального окна
 */
    $('.prosto_zakaz .btn').click(function(event){
        var modal_display = $('#modal_form_call').css('display');
        if (modal_display === 'none'){
            $('#overlay2').css({'display': 'block'});
            $('#modal_form_call').css({'display': 'block'});
            $('#modal_form_call').css({'opacity': '1'});
        }else{
            $('#overlay2').css({'display': 'none'});
            $('#modal_form_call').css({'display': 'none'});
            $('#modal_form_call').css({'opacity': '0'});
        }
    });

    $('#modal_close_call').click(function(event){
        var modal_display = $('#modal_form_call').css('display');
        if (modal_display === 'block'){
            $('#overlay2').css({'display': 'none'});
            $('#modal_form_call').css({'display': 'none'});
            $('#modal_form_call').css({'opacity': '0'});
        }
    });

});

