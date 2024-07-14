$(document).ready(function(){
  $("li ,#close").hover(function(){
    $(this).css("color", "red");
    }, function(){
    $(this).css("color", "white");
  });
});

$(document).ready(function(){
  $(".fa-brands").hover(function(){
    $(this).css("background-color", "red");
    }, function(){
    $(this).css("background-color", "white");
  });
});



$(document).ready(function(){
  $("#close").click(function(){
    $("#navbarToggleExternalContent").hide();
  });
});

$(document).ready(function(){
  $(".navbar-toggler-icon").click(function(){
    $("#navbarToggleExternalContent").show();
  });
});


$(document).ready(function(){
  // $("#singer1info").hide();
    $("#singer2info").hide();
    $("#singer3info").hide();
    $("#singer4info").hide();


});

$(document).ready(function(){
  $("#singer1").click(function(){
    $("#singer1info").toggle();
    $("#singer2info").hide();
    $("#singer3info").hide();
    $("#singer4info").hide();
  });
});






$(document).ready(function(){
  $("#singer2").click(function(){
    $("#singer2info").toggle();
    $("#singer1info").hide();
    $("#singer3info").hide();
    $("#singer4info").hide();
  });
});

$(document).ready(function(){
  $("#singer3").click(function(){
    $("#singer3info").toggle();
    $("#singer2info").hide();
    $("#singer1info").hide();
    $("#singer4info").hide();
  });
});

$(document).ready(function(){
  $("#singer4").click(function(){
    $("#singer4info").toggle();
    $("#singer2info").hide();
    $("#singer3info").hide();
    $("#singer1info").hide();
  });
});

var end = new Date('11/30/2024 10:10 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
    
         document.getElementById('countdays').innerHTML = days + ' days ';
        document.getElementById('counthours').innerHTML = hours + ' hrs ';
        document.getElementById('countmins').innerHTML = minutes + ' mins ';
        document.getElementById('countsecs').innerHTML = seconds + ' secs';
    }

     timer = setInterval(showRemaining, 1000);


    $(document).ready(function () {
      
      var $txtArea = $("textarea");
      var $chars = $("#chars");
      var textMax = $txtArea.attr("maxlength");
      console.log(textMax)
    
      $chars.html(textMax + " characters remaining");
    
      $txtArea.on("keyup", countChar);
    
      function countChar() {
        var textLength = $txtArea.val().length;
        var textRemaining = textMax - textLength;
        $chars.html(textRemaining + " characters remaining");
      }
    });
    
  