const params = window.location.search;
console.log(params);




var btoaURL = function(input) {
    
}
if(params != null){
    var splitString = params.split('=');
    var urlEncoded = splitString[1];
    var output = urlEncoded.replace(/-/g, '+').replace(/_/g, '/');
    var urlFinal = atob(output)
    window.location.replace(urlFinal);

}
var isChrome = /Chrome/.test(navigator.userAgent);
if(isChrome){
    document.getElementById("FYouChrome").innerHTML = 'Hey! It seems like youre using Chrome! (or a chrome based browser), You should upgrade to a <a href="https://www.mozilla.org/en-GB/firefox/new/">better browser!</a>'
}

function create(){
    var status = document.getElementById("status");
    var urlBox = document.getElementById("url");
    var urlboxText = urlBox.value;
    console.log("Shortening " + urlboxText);
    var spinner = document.getElementById("spinner");
    spinner.style.display = "inline";
    status.innerHTML = "Shortening " + urlboxText + "...";
    var encoded = btoa(urlboxText)
    var output = encoded.replace(/-/g, '+').replace(/_/g, '/');
    
    var url = output;
    var shortenedText = "https://xenonorsomething.github.io/redir?url=" + url;
    spinner.style.display = "none";
    status.innerHTML = "Link live at " + shortenedText
}