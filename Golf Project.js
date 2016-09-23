var numplayers = 1; 
var numholes = 18;
var teetime = 45;
var seconds = 59;

function addPlayer() {
    numplayers += 1;
    buildcard()
}
function removePlayer() {
    numplayers -= 1;
    buildcard()
}


    beginTimer();
function buildcard(){
    var holecollection = "";
    var playercollection = "";
    var formcollection = "";
    var scoreinfo = "";
    // create column of player labels
    for(var pl = 1; pl <= numplayers; pl++ ){
        playercollection += "<input id='player" + pl +"' class='playerbox' placeholder='Player " + pl +"'>";
    }

    // create golf hole columns before you add holes to them.
    for(var c = numholes; c >= 1; c-- ){
        holecollection += "<div id='column" + c +"' class='holecol'><div class='holenumbertitle'>" + c + "</div></div>";
    }
    scoreinfo += "<input value='0' id='P"+ pl + "Results1' name='P1Results1' type='text' disabled='disabled'>";
    $("#leftcard").html(playercollection);
    $("#rightcard").html('<div class="holecol">All</div><div class="holecol">Out</div><div class="holecol">In</div>' + holecollection);

    // call the function that builds the holes into the columns
    formcollection += buildholes() + " + " + buildholes2() +"<div class='holecol'></div>";
    $("#column").html(formcollection);
    $("#scores").html(scoreinfo);
}

function buildholes() {
    // add 18 holes to the columns
    for(var p = 1; p <= numplayers; p++ ){
        for(var h = 1; h <= 9; h++){
            $("#column" + h).append("<div id='p"+ p +"h"+ h +"' class='holebox'><input class='scores' value='0' min='-5' max='10' type='number' name='hole"+ h +"' oninput='score(this.form)'></div>");
        }
    }
}
function buildholes2() {
    // add 18 holes to the columns
    for(var p = 1; p <= numplayers; p++ ){
        for(var h = 10; h <= 18; h++){
            $("#column" + h).append("<div id='p"+ p +"h"+ h +"' class='holebox'><input class='scores' value='0' min='-5' max='10' type='number' name='hole"+ h +"' oninput='score(this.form)'></div>");
        }
    }
}
function buildscore() {

}


function beginTimer(){
    var thetimer = setInterval(function(){clocktick()}, 1000);
}

function clocktick(){
    if(seconds > 0){
        seconds --;
        if(seconds < 10){
            seconds = "0" + seconds;
        }
    }
    else{
        teetime --;
        seconds = 59;
    }
    document.getElementById("countdown").innerHTML = teetime + ":" + seconds;
}
function int_zero(x)
{
    if ( x < 1 )
        return 0 ;
    else
        return parseInt( x ,10 );
}
setcourse.info();
function setcourseinfo() {
    buildcard(teeboxid)
}