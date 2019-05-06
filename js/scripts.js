$(document).ready(function(){
  $("#one").click(function(){
    $(".design").toggle();
    $(".Design").toggle();
  });

  $("#three").click(function(){
    $(".management").toggle();
    $(".manage").toggle();
  });

  $("#two").click(function(){
    $(".development").toggle();
    $(".develop").toggle();
  });

  $("#submit").click(function(){
    var name =(document.getElementById("name").value);
    alert( name +" thank you for contacting us.we received your message. :-).");
  });
});
