$(document).ready(function(){

	var hButton = $('button_').width();

	$('#pr1').width(hButton).css("backgroundColor","red");
	


// #id - выбирает единственный элемент с переданным идентификатором (id).
// .class - выбирает все элементы с переданным классом.
// elements - выбирает все элементы с выбранным именем.
// * - выбирает все элементы, включая head и body.
// selector1, ..., selectorN - выбирает все элементы, переданные в селекторах.

// parent childparent > child - выбирает все элементы, являющиеся потомками для определенного элемента предка.
//  - выбирает всех прямых наследников элемента-родителя.
// prev + next - выбирает все элементы, которые являются следующими (next) за элементом prev (предыдущий).

// :input - выбираются все элементы input.
// :text - выбираются все элементы input типа text.
// :password - выбираются все элементы input типа password.
// :radio - выбираются все элементы input типа radio.
// :checkbox - выбираются все элементы input типа checkbox.
// :submit - выбираются все элементы input типа submit.
// :reset - выбираются все элементы input типа reset.
// :button - выбираются все элементы input типа button.
// :image - выбираются все элементы input типа image.
// :file - выбираются все элементы input типа file.
// :hidden - выбираются все элементы input типа hidden или просто скрытые.

	function(event) {
		if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
			(event.keyCode == 65 && event.ctrlKey === true || event.keyCode == 110 || event.keyCode == 190 || event.keyCode == 191) ||
			(event.keyCode >= 35 && event.keyCode <= 39)) {
			return;
		} else {
			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
				event.preventDefault();
			}
		}
	}

	function() {
		var count, field1, field2, field3, field4, field5;

		if ($("#field1").val() == "") {
			field1 = 1;
		} else {
			field1 = parseInt($("#field1").val());
		}

		if ($("#field2").val() == "") {
			field2 = 1;
		} else {
			field2 = parseInt($("#field2").val());
		}

		if ($("#field3").val() == "") {
			field3 = 1;
		} else {
			field3 = parseInt($("#field3").val());
		}

		if ($("#field4").val() == "") {
			field4 = 1;
		} else {
			field4 = parseInt($("#field4").val());
		}

		if ($("#field5").val() == "") {
			field5 = 1;
		} else {
			field5 = parseInt($("#field5").val());
		}

		if (($("#field1").val() != "") && ($("#field2").val() != "") && ($("#field3").val() != "") && ($("#field4").val() != "") && ($("#field5").val() != "")) {
			count = field1 / (((field2 * field4) - ((field4 * 0.15 + field4) * field3)) * (field5 / 100));

			titles = ['месяц', 'месяца', 'месяцев'];
			number = Math.round(count);
			cases = [2, 0, 1, 1, 1, 2];
			month = titles[(number % 100 > 4 && number % 100 < 20) ? 2 :
				cases[(number % 10 < 5) ? number % 10 : 5]];
		} else {
			count = 1;
			month = 'месяц';
		}

		$(".gbo.h_1 span").html(Math.round(count));
		$(".gbo.h_1 month").html(month);
	}

});