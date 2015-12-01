// evite d'ecrire document.getelementbyID
//return ce que renvoie l'objet html
// var maDiv= byId("photoBox");
// raccourci pour juste ecrire byId
function byId( elementId ){
//l'Id est toujours un string
if(typeof elementId != "string"){
  console.log;(Erreur : elementId doit être une chaine de caractère)
  return null;
}
  return document.getElementById( elementId );
}

///////////////////////////////////////////////////////////////////////////
// raccourci pour document.getElementsByClassName
//Le 2nd paramètre est falcutatif : si il est fourni on renvoie l'item à la position demandé
//Sinon on renvoie le tableau complet
function byClass(className, atIndex){
var elements = document.getElementsByClassName( className );
var tElements = Array.prototype.slice.call( elements );
// ? est un operateur ternaire qui signifie Sinon
return (at Index !== null) ? tElements[atIndex] : tElements;
}

//////////////////////////////////////////////////////////////////////////
function byTag(){
  return document.getElementsByTagName('tagName');
}


function addClass(){
return document.addClass;
}


function removeClass(){
return document.removeClass;

}
