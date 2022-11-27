console.log("Prueba Logica");
console.log(' Marco Antonio Marroquin Alvarez ');
var mapa = { "a":5, "b":10, "c":15, "d":20, "e":25, "f":30, "g":35, "h":40, "i":45, "j":50, "k":55 , "l":60 , "m":65, "n":70, "o":75 , "p":80, "q":85, "r":90, "s":95, "t":100, "u":105, "v":110, "w":115, "x":120, "y":125 , "z":130 , " ":1 , ",":3 }; //agregar las necesarias
var palabra=prompt("Marco ingresa la palabra a descifrar ");
var result =  palabra.toLowerCase() 
    .split('')
    .map(x => mapa[x] || 0 )
    .reduce( (x, y) => x + y);
alert(result);
// este programa ejecuta las letras en cantidades de la letra a hasta la letra z
// los espacios en blanco los cuenta como 1
// las comas como 3
// Utilize mapas para el mapeo del abecedario asi como asignarles valores a las letras