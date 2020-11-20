/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(() => {
  const $form = $('#new-tweet-form');
  const $error = $('#error');

  const validateForm = function() {
    const value = $form.find("textArea").val();
    const value2 = $form.find("output").val();

      // $('#tweet-text').keyup(function() {
        if (value.length === 0) {
          alert("too short")
          return false;
        } 
        if (value.length > 140) {
          alert("too long")
          return false;
        }
         // value2.css('color', 'black')
          return true;
        }
      // }
     
    
  

    const value2 = $form.find("output").val()
    console.log(value2)

    // $("#mytextarea").keyup(function(){

    //   var maxlength = 15; // specify the maximum length  
       
    //   if($("#mytextarea").val().length > maxlength){
    //   $("#mytextarea").css('color','red');
    //   } 
    //   else{
    //   $("#mytextarea").css('color','black');
    //   }
    //   });
  
  
  $form.on('submit', (e) => {
    e.preventDefault();

     if (validateForm() === true) {
      $.post("/tweets", $form.serialize())
        .then(() => {
          console.log("posted")

        $form.find("textArea").val("");
        $form.find("output").val("140");

        //clear tweets
        $('#tweets-container').empty();
        loadTweeets();
        })

     }
  })

  const loadTweeets = function() {
    $.get("/tweets").then(function(data) {
      renderTweet(data);
    })
    // $("new-tweet-form").load("/tweets", renderTweet(data))
}
      

  

    // Test / driver code (temporary). Eventually will get this from the server.
    const data = [
      // {
      //   "user": {
      //     "name": "Newton",
      //     "avatars": "https://i.imgur.com/73hZDYK.png"
      //     ,
      //     "handle": "@SirIsaac"
      //   },
      //   "content": {
      //     "text": "If I have seen further it is by standing on the shoulders of giants"
      //   },
      //   "created_at": 1461116232227
      // },
      // {
      //   "user": {
      //     "name": "Descartes",
      //     "avatars": "https://i.imgur.com/nlhLi3I.png",
      //     "handle": "@rd" },
      //   "content": {
      //     "text": "Je pense , donc je suis"
      //   },
      //   "created_at": 1461113959088
      // }
    ]
   

  //Function Implementation:
  const createTweetElement = function(tweetData) {
    //return <article> element containing the enitre HTML structure of the tweet
   // const $tweet = $(`<article class="tweet">Hello</article>`); //=> creates hard coded tweets

    const markup = `
    <article class="tweet">
    <div class="header">
      <div>
        <img src="${tweetData.user.avatars}">
        <h2>${tweetData.user.name}</h2>
      </div>
      <h3>${tweetData.user.handle}</h3>
    </div>
    <div class="content">
      <p>${tweetData.content.text}</p>
    </div>
    <hr>
    <footer>
      <p>${moment(tweetData.created_at).fromNow()}</p>
      <div class="icons">&#9873 &#10226 &#9829</div>
    </footer> 
</article>  
      `;

      //document.createElement?

    //console.log(`${tweetData}`)
    // return $tweet;
    return markup;
  };

  const renderTweet = function(tweets) {
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet); //append
    }
  }
  // renderTweet(data);
  loadTweeets();
});

