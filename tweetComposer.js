var tweet = prompt("Enter your Tweet:");
var tweetunder280 = tweet.slice(0,280);
var tweetCount = tweet.length;
var remCount = 280 - tweetCount;
alert("You have written, "+ tweetCount +" Charectors and have left, "+ remCount +" Charectors.");
alert(tweetunder280);