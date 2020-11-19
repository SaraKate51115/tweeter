
$(document).ready(() => {
  // this callback runs once the document is "ready"
  console.log('ready');

  const $tweetText = $('#tweet-text');
  const maxLength = 140;

  $tweetText.keyup(function() {
    let length = $(this).val().length;
    length = maxLength - length;

    //WHAT IS THE BETTER WAY TO DO THIS- USING 'THIS'
      //HOW DO I CHANGE THE COLOR TO RED WHEN MAX VALUE REACHED?
    $('.counter').text(length);
  })
 });
