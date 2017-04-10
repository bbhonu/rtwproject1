// var baseUrl = "http://api.wordnik.com/v4/words.json/";
// var apiKey = "8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";

var nouns;

function drag(e) {
	e.dataTransfer.setData("Text", this.id);
}

//drop is the function that sends the word to the server
function drop(e) {
	var words; //'words' is the id of the current word, comes from the json file of words
	words=e.dataTransfer.getData("Text");
	
	this.appendChild(document.getElementById(words));
	e.preventDefault();
	// console.log('dropped word: ' + words);

	var theCurrentWord = document.getElementById(words).innerHTML;

	var theId = document.getElementById(words).parentNode.id;
	console.log("theId: " + theId);

	//console.log("dropped this word: " + theCurrentWord + ", theId: " + theId);

	//we want to send the word, and the position of that word
	var dataToSend = {
		'word': theCurrentWord,
		'id': theId
	}

	// console.log(dataToSend);

	//SEND THE WORD TO THE SERVER
	socket.emit('droppedWord', dataToSend);

	//on the server, listen for 'droppedWord'
	//
}


//another function to fill the word into the 




function cancelEvent(e){ 
	e.preventDefault();
}




function getNouns() {
	var url="http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=100000&maxCorpusCount=500000&minDictionaryCount=0&maxDictionaryCount=200&minLength=0&maxLength=8&sortBy=alpha&sortOrder=asc&limit=40&api_key=8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";
	var jxhr = $.ajax ({ 
					url: url,
					dataType: "text" , 
					timeout: 30000 
					}) 
				.success (function (data, status) { 
					nouns = JSON.parse (data);
					// console.log ("nouns:" + data);
					}) 
				.error (function (status) { 
					console.log ("getNouns: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
					});
}

function theNouns(){
	// console.log(nouns);
	for(i=0; i<nouns.length;i++){

		//each word goes in it's own span, gets unique id, class name of word.
		var newElement=document.createElement('span');
		newElement.id=nouns[i].id; newElement.className="word";
		newElement.innerHTML=nouns[i].word;
		document.getElementById('nouns').appendChild(newElement);
		document.getElementById('nouns').style.display="flex";
		document.getElementById('verbs').style.display="none";
		document.getElementById('adverbs').style.display="none";
		document.getElementById('adjectives').style.display="none";
		document.getElementById('pronouns').style.display="none";
		document.getElementById('prepositions').style.display="none";
		document.getElementById('conjunctions').style.display="none";







		//drag and drop for nouns
		newElement.setAttribute("draggable","true");
		newElement.addEventListener("dragstart", drag);

		console.log(nouns[i].word);
	}
}





function getVerbs() {
	var url = "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=verb&minCorpusCount=100000&maxCorpusCount=800000&minDictionaryCount=0&minLength=0&maxLength=8&limit=40&api_key=8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";
		var jxhr = $.ajax ({ 
					url: url,
					dataType: "text" , 
					timeout: 30000 
					}) 
				.success (function (data, status) { 
					verbs = JSON.parse (data);
					// console.log ("verbs:" + data);
					}) 
				.error (function (status) { 
					console.log ("getVerbs: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
					});


				}

function theVerbs(){
	// console.log(nouns);
	for(i=0; i<verbs.length;i++){

		//each word goes in it's own span, gets unique id, class name of word.
		var newElement=document.createElement('span');
		newElement.id=verbs[i].id; newElement.className="word";
		newElement.innerHTML=verbs[i].word;
		document.getElementById('verbs').appendChild(newElement);
		document.getElementById('nouns').style.display="none";
		document.getElementById('verbs').style.display="flex";
		document.getElementById('adverbs').style.display="none";
		document.getElementById('adjectives').style.display="none";
		document.getElementById('pronouns').style.display="none";
		document.getElementById('prepositions').style.display="none";
		document.getElementById('conjunctions').style.display="none";

		//drag and drop for nouns
		newElement.setAttribute("draggable","true");
		newElement.addEventListener("dragstart", drag);

		console.log(verbs[i].word);

	}
}

function getAdjectives() {
	var url = "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=adjective&minCorpusCount=100000&maxCorpusCount=800000&minDictionaryCount=0&minLength=0&maxLength=8&limit=40&api_key=8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";
		var jxhr = $.ajax ({ 
					url: url,
					dataType: "text" , 
					timeout: 30000 
					}) 
				.success (function (data, status) { 
					adjectives = JSON.parse (data);
					// console.log ("adjectives:" + data);
					}) 
				.error (function (status) { 
					console.log ("getAdjectives: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
					});


				}

function theAdjectives(){
	// console.log(nouns);
	for(i=0; i<adjectives.length;i++){

		//each word goes in it's own span, gets unique id, class name of word.
		var newElement=document.createElement('span');
		newElement.id=adjectives[i].id; newElement.className="word";
		newElement.innerHTML=adjectives[i].word;
		document.getElementById('adjectives').appendChild(newElement);
		document.getElementById('nouns').style.display="none";
		document.getElementById('verbs').style.display="none";
		document.getElementById('adverbs').style.display="none";
		document.getElementById('adjectives').style.display="flex";
		document.getElementById('pronouns').style.display="none";
		document.getElementById('prepositions').style.display="none";
		document.getElementById('conjunctions').style.display="none";

		//drag and drop for nouns
		newElement.setAttribute("draggable","true");
		newElement.addEventListener("dragstart", drag);

		console.log(adjectives[i].word);

	}
}

function getAdverbs() {
var url="http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=adverb&minCorpusCount=10000&maxCorpusCount=1000000&minLength=0&maxLength=8&sortBy=alpha&sortOrder=asc&limit=40&api_key=8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";
		var jxhr = $.ajax ({ 
					url: url,
					dataType: "text" , 
					timeout: 30000 
					}) 
				.success (function (data, status) { 
					adverbs=JSON.parse (data);
					// console.log ("adverbs:" + data);
					}) 
				.error (function (status) { 
					console.log ("getAdverbs: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
					});
				}

function theAdverbs(){
	// console.log(nouns);
	for(i=0; i<adverbs.length;i++){

		//each word goes in it's own span, gets unique id, class name of word.
		var newElement=document.createElement('span');
		newElement.id=adverbs[i].id; newElement.className="word";
		newElement.innerHTML=adverbs[i].word;
		document.getElementById('adverbs').appendChild(newElement);
		document.getElementById('nouns').style.display="none";
		document.getElementById('verbs').style.display="none";
		document.getElementById('adverbs').style.display="flex";
		document.getElementById('adjectives').style.display="none";
		document.getElementById('pronouns').style.display="none";
		document.getElementById('prepositions').style.display="none";
		document.getElementById('conjunctions').style.display="none";

		//drag and drop for nouns
		newElement.setAttribute("draggable","true");
		newElement.addEventListener("dragstart", drag);

		// console.log(adverbs[i].word);

	}
}



function getPronouns() {
	var url="http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=pronoun&minCorpusCount=50000&maxCorpusCount=800000&minDictionaryCount=1&minLength=0&maxLength=8&limit=40&api_key=8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";
			var jxhr = $.ajax ({ 
					url: url,
					dataType: "text" , 
					timeout: 30000 
					}) 
				.success (function (data, status) { 
					pronouns=JSON.parse (data);
					// console.log ("pronouns:" + data);
					}) 
				.error (function (status) { 
					console.log ("getPronouns: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
					});
				}

function thePronouns(){
	// console.log(nouns);
	for(i=0; i<pronouns.length;i++){

		//each word goes in it's own span, gets unique id, class name of word.
		var newElement=document.createElement('span');
		newElement.id=pronouns[i].id; newElement.className="word";
		newElement.innerHTML=pronouns[i].word;
		document.getElementById('pronouns').appendChild(newElement);
		document.getElementById('nouns').style.display="none";
		document.getElementById('verbs').style.display="none";
		document.getElementById('adverbs').style.display="none";
		document.getElementById('adjectives').style.display="none";
		document.getElementById('pronouns').style.display="flex";
		document.getElementById('prepositions').style.display="none";
		document.getElementById('conjunctions').style.display="none";

		//drag and drop for nouns
		newElement.setAttribute("draggable","true");
		newElement.addEventListener("dragstart", drag);

		console.log(pronouns[i].word);

	}
}

function getPrepositions() {
			var url="http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=preposition&minCorpusCount=200000&maxCorpusCount=1000000&minDictionaryCount=1&minLength=0&sortBy=alpha&sortOrder=asc&limit=30&api_key=8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";
				var jxhr = $.ajax ({ 
					url: url,
					dataType: "text" , 
					timeout: 30000 
					}) 
				.success (function (data, status) { 
					prepositions=JSON.parse (data);
					// console.log ("prepositions:" + data);
					}) 
				.error (function (status) { 
					console.log ("getPronouns: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
					});

}

function thePrepositions(){
	// console.log(nouns);
	for(i=0; i<prepositions.length;i++){

		//each word goes in it's own span, gets unique id, class name of word.
		var newElement=document.createElement('span');
		newElement.id=prepositions[i].id; newElement.className="word";
		newElement.innerHTML=prepositions[i].word;
		document.getElementById('prepositions').appendChild(newElement);
		document.getElementById('nouns').style.display="none";
		document.getElementById('verbs').style.display="none";
		document.getElementById('adverbs').style.display="none";
		document.getElementById('adjectives').style.display="none";
		document.getElementById('pronouns').style.display="none";
		document.getElementById('prepositions').style.display="flex";
		document.getElementById('conjunctions').style.display="none";

		//drag and drop for nouns
		newElement.setAttribute("draggable","true");
		newElement.addEventListener("dragstart", drag);

		console.log(prepositions[i].word);

	}
}



function getConjunctions() {
	var url="http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=conjunction&minCorpusCount=500000&minLength=0&sortBy=alpha&sortOrder=asc&limit=50&api_key=8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";
					var jxhr = $.ajax ({ 
					url: url,
					dataType: "text" , 
					timeout: 30000 
					}) 
				.success (function (data, status) { 
					conjunctions=JSON.parse (data);
					// console.log ("conjunctions:" + data);
					}) 
				.error (function (status) { 
					console.log ("getPronouns: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
					});
}

function theConjunctions(){
	// console.log(nouns);
	for(i=0; i<conjunctions.length;i++){

		//each word goes in it's own span, gets unique id, class name of word.
		var newElement=document.createElement('span');
		newElement.id=conjunctions[i].id; newElement.className="word";
		newElement.innerHTML=conjunctions[i].word;
		document.getElementById('conjunctions').appendChild(newElement);
		document.getElementById('nouns').style.display="none";
		document.getElementById('verbs').style.display="none";
		document.getElementById('adverbs').style.display="none";
		document.getElementById('adjectives').style.display="none";
		document.getElementById('pronouns').style.display="none";
		document.getElementById('prepositions').style.display="none";
		document.getElementById('conjunctions').style.display="flex";

		//drag and drop for nouns
		newElement.setAttribute("draggable","true");
		newElement.addEventListener("dragstart", drag);

		console.log(conjunctions[i].word);

	}
}

