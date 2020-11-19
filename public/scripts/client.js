/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(() => {

    // Test / driver code (temporary). Eventually will get this from the server.
    const tweetData = {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
          "handle": "@SirIsaac"
    },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    }
    //=> TURN INTO MARKUP???

  //Function Implementation:
  const createTweetElement = function(tweetData) {
    //return <article> element containing the enitre HTML structure of the tweet
    const $tweet = $(`<article class="tweet"></article>`); //=> creates hard coded tweets
    console.log(`${tweetData}`)
    return $tweet;
  };


  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements,

});