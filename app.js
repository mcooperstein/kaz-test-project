function myFunction() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        $("#welcome").text(json[0].welcome);
        $("#products").text(json[0].products);
        $("#phones").text(json[0].phones);
        $("#computers").text(json[0].computers);
    }
}

function apiCall() {
    var language = $("select").val();
    var myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = myFunction;
    myRequest.open("GET", language + ".json");
    myRequest.send();
    console.log(myRequest);
}

$("button").click(function () {
    apiCall();
})
