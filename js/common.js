$(function(){
  /* Серия и номер паспорта */
  $("#input-4").mask("99-99 999999", {placeholder:" "});

  /* Телефон */
  $("#input-6").mask("(999) 999-9999", {placeholder:" "});
    
  /* Индекс */
  $("#input-9").mask("999999", {placeholder:" "});
});