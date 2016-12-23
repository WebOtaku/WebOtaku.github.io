$(function(){
$.jMaskGlobals = {translation: {
               'n': {pattern: /\d/},
           }
       };
       $('#input-4').mask('nn-nn nnnnnn');
       $('#input-6').mask('+7(nnn)nnn-nn-nn').val('+7');
       $('#input-8').mask('nnnnnn'); 
});