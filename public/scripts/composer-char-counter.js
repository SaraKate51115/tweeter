
$(document).ready(() => {
  // this callback runs once the document is "ready"
  console.log('ready');

  const $tweetText = $('#tweet-text');
  const maxLength = 140;

  $tweetText.keyup(function() {
    let length = $(this).val().length;
    length = maxLength - length;

    //change color?
    if($tweetText.val().length > maxLength) {
      $('output.counter').css('color', 'red');
    } else {
      $('output.counter').css('color', 'black');
    }

    //WHAT IS THE BETTER WAY TO DO THIS- USING 'THIS'
      //HOW DO I CHANGE THE COLOR TO RED WHEN MAX VALUE REACHED?
    $('.counter').text(length);
  })
 });


//  remove below- for reference only
//  $("#mytextarea").keyup(function(){

//   var maxlength = 15; // specify the maximum length  
   
//   if($("#mytextarea").val().length > maxlength){
//   $("#mytextarea").css('color','red');
//   } 
//   else{
//   $("#mytextarea").css('color','black');
//   }
//   });