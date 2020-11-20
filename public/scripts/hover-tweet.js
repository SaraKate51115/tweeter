$(document).ready(() => {
  
  console.log('ready');

  $('article.tweet').hover(function() {
    $(this).css( "box-shadow", "20px 30px 30px 1em", "#F4AAB9"); 
  }, function(){
    $(this).css("box-shadow", "none");

 });
});
