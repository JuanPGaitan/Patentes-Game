var puntaje = 0;
var value = 0;

$(".btn").click(function() {

  
  var userChosenButton = $(this).attr("id");
  
  console.log(userChosenButton);

  addValue(userChosenButton);

  puntaje = puntaje + value;

  $("h3").text(puntaje);


});

function addValue(key) {
  
  switch (key) {
    case "CapicNum":
      value = 1;  
      break;
    case "CapicLet":
      value = 3;  
      break;
    case "EscNum":
      value = 5;
      break;
    case "IgualNum":
      value = 8;
      break;
    case "CapicDob":
      value = 15;
      break;
    case "EscLet":
      value = 18;
      break;
    case "IgualLet":
      value = 25;
      break;
    case "EscDob":
      value = 35;
      break;
    case "IgualDob":
      value = 50;
      break;
    case "Borrar":
        value = 0;
        puntaje = 0;
        break;
    default:
      break;
    };
};