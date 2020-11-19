$(document).ready(() => {
  // this callback runs once the document is "ready"
  console.log('ready');
  // const $tweet = $('article.tweet');

  // $tweet.hover( handlerIn, handlerOut )

  $('article.tweet').hover(function() {
    $(this).css( "box-shadow", "20px 30px 30px 1em", "#F4AAB9"); 
  }, function(){
    $(this).css("box-shadow", "none");

 });
});
