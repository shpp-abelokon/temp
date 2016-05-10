//$(document).ready(function(){
//    $('input[name=attributes]').change(function(){
//        $('.form-radio').attr({
//            src: '../img/color/'+$('input[name=color]:checked').attr('data-color')+'.png',
//            alt: $('input[name=color]:checked').attr('value')
//        });
//    });
//});

$(document).ready(function () {

    /*
     *  Добавляет класс checked к блоку js-radio  и добавляет атрибут к input checked="checked"
     *  Форма выбора стоимости ГБО
     */

    $('.js-radio').click(function () {
        $(this).parent().siblings('div').find('.js-radio').removeClass('checked');
        $(this).addClass('checked');
        $(this).parent().siblings('div').find('.form-radio').removeAttr('checked');
        $(this).children('input').attr('checked', 'checked');

    });

    /*
     *   Добавление подменю под ценами
     *   При Нажатии на класс '.more' ищет класс родитель .tab-price и отнего ищет класс '.tab-price-info.'
     *   Если текущий div имеет класс '.open' убирает класс с эфектом слайдера иначе добавляет класс.
     */
    $('.more').click(function () {
        var $more = $(this);
        var $views_row = $more.closest('.tab-price');
        var $bottom_row = $views_row.find('.tab-price-info');

        if ($views_row.hasClass('open')) {
            $bottom_row.slideUp();
            $views_row.removeClass('open');
        } else {
            $bottom_row.slideDown();
            $views_row.addClass('open');
        }
    });

    /*
     *  Замена картинки при переходе на якорь между экранами
     */
    $('.arrow img').mouseover(function () {
        $(this).attr({'src': 'img/arrowHover.jpg'})
    });

    $('.arrow img').mouseout(function () {
        $(this).attr({'src': 'img/arrow.jpg'})
    });


    /*
     *  Плавная прокрутка по якоря
     */
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });


    /*
     *  Калькулятор расчета Установка ГБО окупаемость
     */

    $('.raschet-form input').keyup(function () {
        this.value = this.value.replace(/[^0-9|\.]/, '');
        var price_gbo, price_Gasoline, price_GAS, count_litr, count_km, costOfGasolineForMonth, costOfGASForMonth, dif, result_Raschet;
        price_gbo = $('input[name=price_gbo]').val();
        price_Gasoline = $('input[name=price_Gasoline]').val();
        price_GAS = $('input[name=price_GAS]').val();
        count_litr = $('input[name=count_litr]').val();
        count_km = $('input[name=count_km]').val();

        //if (price_gbo != '' & price_Gasoline != '' & price_GAS != '' & count_litr != '' & count_km != '') {
        if (price_gbo != ('' || 0) & price_Gasoline != ('' || 0) & price_GAS != ('' || 0) & count_litr != ('' || 0) & count_km != ('' || 0)) {
            price_gbo = parseFloat(price_gbo);
            price_Gasoline = parseFloat(price_Gasoline);
            price_GAS = parseFloat(price_GAS);
            count_litr = parseFloat(count_litr);
            count_km = parseFloat(count_km);
            costOfGasolineForMonth = (count_km / 100) * (count_litr * price_Gasoline);
            costOfGASForMonth = (count_km / 100) * ((((count_litr / 100) * 20) + count_litr) * price_GAS);
            dif = costOfGasolineForMonth - costOfGASForMonth;
            result_Raschet = Math.round(price_gbo / dif);

            var result_rMod = Math.abs(result_Raschet);
            var titles = ['месяц', 'месяца', 'месяцев'];
            var cases = [2, 0, 1, 1, 1, 2];
            var month = titles[(result_rMod % 100 > 4 && result_rMod % 100 < 20) ? 2 :
                cases[(result_rMod % 10 < 5) ? result_rMod % 10 : 5]];

            $('.raschet-result').text(result_Raschet + ' ' + month);
        } else {
            $('.raschet-result').text('1' + ' месяц');
        }

    });


});

