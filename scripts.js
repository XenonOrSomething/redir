const params = window.location.search;
console.log(params);
var methods = [
    "b64",
    "b64URL",
    "b64URLE"
]
var method = methods[1];
document.getElementById("options").style.display = "none";

var areSettings = false;

console.log(navigator.userAgent)
var isChrome = /Chrome/.test(navigator.userAgent);
if(isChrome){
    document.getElementById("FYouChrome").innerHTML = 'Hey! It seems like youre using Chrome! (or a chrome based browser), You should upgrade to a <a href="https://www.mozilla.org/en-GB/firefox/new/">better browser!</a>'
}
console.log(isChrome);
toggle(1);
if(params != null){
    var splitString = params.split('=');
    var urlEncoded = splitString[1];
    var output = urlEncoded.replace(/-/g, '+').replace(/_/g, '/');
    var urlFinal = atob(output)
    window.location.replace(urlFinal);

}

function create(){
    var status = document.getElementById("status");
    var urlBox = document.getElementById("url");
    var urlboxText = urlBox.value;
    console.log("Shortening " + urlboxText);
    var spinner = document.getElementById("spinner");
    spinner.style.display = "inline";
    status.innerHTML = "Shortening " + urlboxText + "...";
    console.log(method)
    if(method == methods[0]){
        var encoded = btoa(urlboxText)
        console.log(encoded)
        output = encoded;
    }else if(method == methods[1]){
        var encoded = btoa(urlboxText)
        var output = encoded.replace(/-/g, '+').replace(/_/g, '/').replace(/=+$/, '');
    }else if(method == method[2]){
        //TODO: finish this
        console.log("dont want to finish this rn, ill finish it later");
    }else{
        console.log("invalid encoding method, defaulting to b64URL");
        var encoded = btoa(urlboxText)
        var output = encoded.replace(/-/g, '+').replace(/_/g, '/').replace(/=+$/, '');
    }
    var url = output;
    
    console.log("output is " + output);
    console.log("url is " + url);
    var shortenedText = "https://xenonorsomething.github.io/redir?url=" + url;
    spinner.style.display = "none";
    status.innerHTML = "Link live at " + shortenedText
}

function toggle(val){
    var b64b = document.getElementById("base64");
    var b64URLb = document.getElementById("base64URL");
    method = methods[val];
    console.log(method);
    console.log(val);
    if(val == 0){
        b64b.style.borderBottomColor = "#00c8ff";
        b64URLb.style.borderBottomColor = "white";
    }else{
        b64b.style.borderBottomColor = "white";
        b64URLb.style.borderBottomColor = "#00c8ff";
    }
}

function toggleSettings(){
    areSettings = !areSettings;
    if(areSettings){
        document.getElementById("options").style.display = "block";
    }else{
        document.getElementById("options").style.display = "none";
    }
    
}