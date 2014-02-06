function Person(){
	this.name = "name";
	this.age = 0;
	this.gender = "gender";
	this.growOld = function(){
		age++;
	};
}

function Girl(){};
Girl.prototype = new Person();
Girl.prototype.gender = "female";
Girl.prototype.talk = function(target){
	return this.name+" is talking to "+target;
};

function Boy(){};
Boy.prototype = new Person();
Boy.prototype.gender = "male";
Boy.prototype.walk = function(target){
	return this.name+" is walking to "+target;
};

var boy1 = new Boy();
boy1.name = "Jeus";
boy1.age = 26;

var girl1 = new Girl();
girl1.name = "Jeusy";
girl1.age = 27;

var boy2 = new Boy();
boy2.name = "Jeusier";
boy2.age = 25;


$(document).ready(function(){
   $("#result").html(boy1.name + " is a " + boy1.age + " year old " + boy1.gender + "<br .>" +
   girl1.name + " is a " + girl1.age + " year old " + girl1.gender + "<br .>" +
   girl1.name + " is a " + girl1.age + " year old " + girl1.gender + "<br .>" +
   boy2.name + " is a " + boy2.age + " year old " + boy2.gender + "<br .>" +
   boy1.walk(girl1.name) + "<br .>" +
   girl1.talk(boy1.name) + "<br .>" +
   boy2.walk(girl1.name) + "<br .>" +
   girl1.talk(boy2.name) + "<br .>" +
   boy1.walk("the arcade") + "<br .>" +
   boy2.walk(boy1.name) + "<br .>" +
   girl1.talk("herself") + "<br .>");
});