var $=MyAnimation= (function () {

    var defaultDelayValue = 1;
    var defaultCharacterValue = "*";
    var defaultAnimation="triangle";

// private : Get Value
    function GetValue (value,def) {
         if (typeof value === 'undefined') {
             return def;
                }
             else {
             return value;
              }
            }

//private : Draw Triangle
    function DrawTriangle(character,delay){
         var single=character;
         for (i = 0; i < 10; i++) { 
                console.log(character);
                character += single + "";
            }
        }

//private : Draw Square
    function DrawSquare(character,delay){
         var single=character+character+character+character+character+character+character+character+character+character;
         for (i = 0; i < 5; i++) { 
                console.log(single);
                character += single + "";
            }
        }

//private : Draw
    function Draw(option,character,delay) {
         character = GetValue(character,defaultCharacterValue);
         delay = GetValue(delay,defaultDelayValue);
         option = GetValue(option,defaultAnimation);
           
      if (option == "triangle") {
           return DrawTriangle(character,delay);
          }

      if (option == "square") {
           return DrawSquare(character,delay);
          }
    }


//public : 
return{
        Draw: function(option,character,delay){
        return Draw(option, character, delay);
        } 
  }
  
})();


$.Draw("square","*")




