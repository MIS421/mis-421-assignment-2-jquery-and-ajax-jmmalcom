var len;
var results = '';

function apiSearch() {
    var information = document.getElementById("query").value;
    console.log(information);
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
    };

  $.ajax({
      url: "https://api.bing.microsoft.com/" + "/v7.0/search?" + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "a2740529f79a4d89954d6d70f72d7b42");
      },
      type: "GET",
    })
    .done(function (data) {
        len = data.webPages.value.length;
        results = '';
        for (i = 0; i < len; i++) {
            
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }
      $("#searchResults").css("visibility", "visible");
      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
        alert("error");
      
    });
}

const search = () => {
    apiSearch();
    document.getElementById("query").value = '';
}
let styles = false;

const changeStyle = () => {
    var bool = '';
   

    if (!styles) {
        bool = False();
    }
    if (styles == true) {
        bool = True();
    }
    console.log(styles);
    
    styles = bool;
  
    console.log(styles);

}
function False(){
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1621508654686-809f23efdabc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3J5c3RhbCUyMGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60')"
    return true;
}

function True() {
    bool = document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
    return false;
}


const Dates = () => {
    var today = new Date();
    var hours = today.getHours();

    var m = today.getMinutes();
    m = m < 10 ? '0' + m : m;

    var timeOfDay = "AM"
    if (hours > 12) { hours -= 12; timeOfDay = 'PM' } else if (hours === 0) { hours = 12; timeOfDay = 'PM' } 
    var time = hours + ":" + m + timeOfDay;
    $("#time").css("visibility", "visible");
    $('#time').html(time);
    $('#time').dialog();
    console.log(time);
}

function imFeelingLucky() {
    var information = document.getElementById("query").value;
    console.log(information);
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: "https://api.bing.microsoft.com/" + "/v7.0/search?" + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "a2740529f79a4d89954d6d70f72d7b42");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            results = '';
            for (i = 0; i < 1; i++) {

                window.location.href = data.webPages.value[i].url 
            }
        })
        .fail(function () {
            alert("error");

        });

}
