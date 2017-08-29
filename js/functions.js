var pagecounter = 1;
var result = document.getElementById("result");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET' , 'https://learnwebcode.github.io/json-example/animals-'+pagecounter+'.json'); //POST to Send Data OR GET to get Data
    ourRequest.onload = function(){
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        }else{
            alert('lol!!!! not working');
        } 
    };

    ourRequest.onerror = function(){
        alert('Connection Error');
    };

    ourRequest.send();
    pagecounter ++;
    if (pagecounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data){
    var htmlstring = "";

    for (var i = 0; i < data.length; i++) {
        htmlstring += "<p>" + data[i].name + "is a " + data[i].species;
        for (var x = 0; x < data[i].foods.likes.length; x++) {
            if ( x == 0) {
                htmlstring += data[i].foods.likes[x];
            }else {
                htmlstring += " and " + data[i].foods.likes[x];
            }
        }

        htmlstring += ' and dislikes ';

        for (var x = 0; x < data[i].foods.dislikes.length; x++) {
            if ( x == 0) {
                htmlstring += data[i].foods.dislikes[x];
            }else {
                htmlstring += " and " + data[i].foods.dislikes[x];
            }
        }

        htmlstring += ".</p>"
    }

    result.insertAdjacentHTML('beforeend', htmlstring);
}