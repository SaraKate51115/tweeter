$(() => {

});


$(document).ready(() => {
  // this callback runs once the document is "ready"
  console.log('ready');

   const $tweetText = $('#tweet-text');

  //  $tweetText.keydown(() => {
  //   console.log('keydown');
  // });

  
  // $tweetText.blur(() => {
  //   console.log('blur');
  // });

  // $tweetText.keyup(() => {
  //   console.log('keyup');
  // });

  $tweetText.keypress(() => {
    console.log('keypress');
  });

  // $tweetText.change(() => {
  //   console.log('change');
  // });



  

});