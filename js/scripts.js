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
var item = document.getElementById("image");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func()
{
   document.getElementById("text").setAttribute("style", "display:block;")
}

function func1()
{
    document.getElementById("text").setAttribute("style", "display:none;")
}
