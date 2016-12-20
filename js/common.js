$(function(){
  $.mask.definitions['b']='[А-Яа-я]';
  /* Фамилия */
  $("#input-1").mask("bbb?bbbbbbbbbbbbb", {placeholder:" "});
  /* Имя */
  $("#input-2").mask("bbb?bbbbbbbbbbbbb", {placeholder:" "});
  /* Отчество */
  $("#input-3").mask("bbb?bbbbbbbbbbbbb", {placeholder:" "}); 
  /* Серия и номер паспорта */
  $("#input-4").mask("99-99 999999", {placeholder:" "});
  /* Телефон */
  $("#input-6").mask("+7(999)999-9999", {placeholder:" "});    
  /* Индекс */
  $("#input-8").mask("999999", {placeholder:" "});
  /* Населённый пункт */
  $("#input-9").mask("bbb?bbbbbbbbbbbbbbb", {placeholder:" "});
}); 