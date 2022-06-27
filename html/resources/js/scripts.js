/* @license magnet:?xt=urn:btih:5ac446d35272cc2e4e85e4325b146d0b7ca8f50c&dn=unlicense.txt Unlicense */
(function($){$(document).ready(function(){var body=$('body');body.on('click','.spoilbtn',function(event){event.preventDefault();var trigger=$(this),spoiler=trigger.closest('div').next('.spoilcontent');spoiler.slideToggle('fast',function(){trigger.text(spoiler.is(':visible')?trigger.data('hide'):trigger.data('show'))})})})})(jQuery);$(document).scroll(function(){var y=$(this).scrollTop();var w=$(window).width();if(y>550&&w>=375){$('nav').fadeIn()}else{$('nav').fadeOut()}});
/* @license-end */
