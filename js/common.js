$(function(){
  /* Серия и номер паспорта */
  $("#input-4").mask("99-99 999999", {placeholder:" "});

  /* Телефон */
  $("#input-6").mask("+7(999) 999-9999");

  /* Индекс */
  $("#input-9").mask("999999", {placeholder:" "});

  /*$("#callback").submit(function() {
		$.ajax({
			type:"GET",
			url:"mail.php",
			data:$("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});*/
});

