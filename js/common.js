$(function(){
  $.mask.definitions['a']='[А-Яа-я]';
  /* Фамилия */
  $("#input-1").mask("aaa?aaaaaaaaaaaaa", {placeholder:" "});
  /* Имя */
  $("#input-2").mask("aaa?aaaaaaaaaaaaa", {placeholder:" "});
  /* Отчество */
  $("#input-3").mask("aaa?aaaaaaaaaaaaa", {placeholder:" "}); 
  /* Серия и номер паспорта */
  $("#input-4").mask("99-99 999999", {placeholder:" "});
  /* Телефон */
  $("#input-6").mask("+7(999)999-9999", {placeholder:" "});    
  /* Индекс */
  $("#input-8").mask("999999", {placeholder:" "});
  /* Населённый пункт */
  $("#input-9").mask("aaaaa?aaaaaaaaaaaaa", {placeholder:" "});
}); 