$(function(){
  $.mask.definitions['а']='[А-Яа-я]';
  /* Фамилия */
  $("#input-1").mask("ааа?ааааааааааааа", {placeholder:" "});
  /* Имя */
  $("#input-2").mask("ааа?ааааааааааааа", {placeholder:" "});
  /* Отчество */
  $("#input-3").mask("ааа?ааааааааааааа", {placeholder:" "}); 
  /* Серия и номер паспорта */
  $("#input-4").mask("99-99 999999", {placeholder:" "});
  /* Телефон */
  $("#input-6").mask("+7(999)999-9999", {placeholder:" "});    
  /* Индекс */
  $("#input-8").mask("999999", {placeholder:" "});
  /* Населённый пункт */
  $("#input-9").mask("ааа?ааааааааааааааа", {placeholder:" "});
}); 