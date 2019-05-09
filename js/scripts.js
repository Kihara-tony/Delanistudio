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
  })
});
var hover = document.getElementById("image");
hover.addEventListener("mouseover", func, false);
hover.addEventListener("mouseout", func1, false);

function func()
{
   document.getElementById("see").setAttribute("style", "display:block;")
}

function func1()
{
    document.getElementById("see").setAttribute("style", "display:none;")
}
