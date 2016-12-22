$(function(){
$.jMaskGlobals = {translation: {
               'n': {pattern: /\d/},
           }
       };
       $('#input-6').mask('+7(nnn)nnn-nnnn').val('+7');
       $('#input-8').mask('nnnnnn');
});