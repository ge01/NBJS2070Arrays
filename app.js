/****************************************************
*                      Arrays                       *
****************************************************/
var people = new Array("Bucky", "Tommy", "Sarah", "Hanah", "Mikety");

document.write(people[0]);
document.write("<br>");

/****************************************************
*            Other Ways to Create Arrays            *
****************************************************/
var things = new Array(3);

things[0] = "jersey shore";
things[1] = "brian regan";
things[2] = "thenewboston";

document.write(things[1]);
document.write("<br>");

var stuff = new Array();

stuff[0] = "toolbox";
stuff[1] = 123;

document.write(stuff[1]);
document.write("<br>");

/****************************************************
*           Array Properties and Methods            *
****************************************************/
var dudes = new Array("Bucky", "Dan", "Randy");
var gals = new Array("Lisa", "Erin", "Hannah");

var people = dudes.concat(gals);

document.write(people[5]);
document.write("<br>");
document.write(people.length);
