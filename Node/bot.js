//bot start
console.log('The bot is starting');

var Twit = require('twit');
var fs = require('fs');
var config = require('./config');
var LineByLineReader = require('line-by-line');

var T = new Twit(config);
var tweet = new String;
var newTweet = new String;

var username = new String;
var tweetID = 0;
var tweetText = new String;
var i = 0;

var oldUsername = new String;
var oldTweetID = 0;
var oldTweetText = new String;

//search parameters for tweet
var params = {
	q: '@EZLearn2018', count: 1
};

//setInterval(readTweets, 1000*10);
//readTweets();
//Search();
setInterval(Search, 30000);

//get tweet with matching parameters
function Search (){
	console.log("In search function");
	T.get('search/tweets', params, gotData);
}

//output data from search to console and to tweets.txt file
function gotData(err, data, response){
	console.log("In gotData function");
	console.log(data);
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++){
		console.log(tweets[i].user.screen_name + " " + tweets[i].id_str + " " + tweets[i].text);
		if (i >= 1){
			newTweet = tweets[i].id_str + " " + tweets[i].text;
			tweet = tweet + "\r\n" + newTweet;
		} else {
			tweet = tweets[i].user.screen_name + "\r\n" + tweets[i].id_str + "\r\n" + tweets[i].text;
		}
	}

	//log data to file
	console.log("Saving tweets to file");
	fs.writeFile("/node2/tweets.txt", tweet, function(err) {
    	if(err) {
        	return console.log(err);
    	} else {
    		console.log("Saved tweets to file");
    	}
	}); 
	setTimeout(readTweets, 10000);
}
	//compare the tweets to see if the found tweet is a new tweet and end the delay interval
function compareTweets (){
	console.log("In compareTweets function");
	// T.post('statuses/retweet/:id', { id: '1060594169922678784' }, function (err, data, response) {
 //  		//console.log(data)
 //  		console.log("Retweeted found tweet");
	// })
	if (username == oldUsername){
		console.log("usernames match! will not respond");
		console.log(" ")
	} else if (username == "@EZLearn2018"){
		console.log("This is our tweet");
		console.log(" ")
	} else {
		responseTweet();
	}
}


//respond to tweet if it was a new one and end the delay interval 
function responseTweet(){
	console.log("In responseTweet function");
	T.post('statuses/update', { status: '@' + username + " thanks for tweeting us! Go to https://t.co/RcAcQPafXz for help" }, function(err, data, response) {
  		//console.log(data)
  		console.log("Sent Tweet");
  		console.log(" ");
  		rewrite();
	})
}


function readTweets (){
	i = 0;
	console.log("Begin readTweets");
    lr = new LineByLineReader('tweets.txt');

	lr.on('error', function (err) {
    // 'err' contains error object
	});

	lr.on('line', function (line) {
    // pause emitting of lines...
    lr.pause();
    console.log(line);
//    console.log("after line");
    // ...do your asynchronous line processing..
    setTimeout(function () {
    	console.log("i is: " + i);
    	if (i == 0){
    		username = line;
    		console.log("Username: " + username);
    		i++;
    	} else if (i == 1){
    		tweetID = line;
    		console.log("id: " + tweetID);
    		i++;
    	} else {
    		tweetText = line;
    		console.log("text: " + tweetText);
    		i++;
    	}
    // ...and continue emitting lines.
    lr.resume();
    }, 1000);
	});

	lr.on('end', function () {
    // All lines are read, file is closed now.
    console.log("end readTweets");
    i = 0;
    readRespondedTweets();
	});
}

function readRespondedTweets (){
	console.log(" ");
	console.log(" ");
	console.log("begin readRespondedTweets");
    lr2 = new LineByLineReader('RespondedTweets.txt');

	lr2.on('error', function (err) {
    // 'err' contains error object
	});

	lr2.on('line', function (line) {
    // pause emitting of lines...
    lr2.pause();
    console.log(line);
//    console.log("after line");
    // ...do your asynchronous line processing..
    setTimeout(function () {
    	console.log("i is: " + i);
    	if (i == 0){
    		oldUsername = line;
    		console.log("last responded username: " + oldUsername);
    		i++;
    	} else if (i == 1){
    		oldTweetID = line;
    		console.log("last responded id: " + oldTweetID);
    		i++;
    	} else {
    		oldTweetText = line;
    		console.log("last responded text: " + oldTweetText);
    		i++;
    	}
    // ...and continue emitting lines.
    lr2.resume();
    }, 1000);
	});

	lr2.on('end', function () {
    // All lines are read, file is closed now.
    console.log("end readRespondedTweets");
    console.log(" ")
    compareTweets();
	});	
}

function rewrite(){
	console.log("rewriting tweets to file");
	fs.writeFile("/node2/RespondedTweets.txt", username + "\r\n" + tweetID + "\r\n" + tweetText, function(err) {
    	if(err) {
        	return console.log(err);
    	} else {
    		console.log("Rewrote tweets to file");
    	}
	}); 
}