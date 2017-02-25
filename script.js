/**
 * LG Sample challenge
 */

var set_color = "c1";
var set_mode = "background";

setStatus();

var buttons = document.getElementsByClassName("col");
console.log(buttons);

document.getElementById("c1").addEventListener("click", function(e)
{
    set_color = "c1";
    setStatus();
});

document.getElementById("c2").addEventListener("click", function(e)
{
    set_color = "c2";
    setStatus();
});

document.getElementById("c3").addEventListener("click", function(e)
{
    set_color = "c3";
    setStatus();
});

document.getElementById("c4").addEventListener("click", function(e)
{
    set_color = "c4";
    setStatus();
});

document.getElementById("c5").addEventListener("click", function(e)
{
    set_color = "c5";
    setStatus();
});

document.getElementById("set_object_background").addEventListener("click", function()
{
    set_mode = "background";
    setStatus();
})

document.getElementById("set_object_text").addEventListener("click", function()
{
    set_mode = "text";
    setStatus();
})

/*
document.getElementById("manual").addEventListener("click", function()
{
    var c = document.getElementById("manual_color").value;
    if (c.length == 0)
    {
        return false;

    }
    if (set_mode == "text")
    {
        document.getElementById("body").style.color = c;
        document.getElementById("body").style.backgroundColor = 'white';
    }
    else
    {
        document.getElementById("body").style.color = 'black';
        document.getElementById("body").style.backgroundColor = c;
    }
    document.getElementById("color_status").innerHTML = 'Custom';
})
*/

function setStatus()
{
    document.getElementById("color_status").innerHTML = set_color;
    document.getElementById("mode_status").innerHTML = set_mode.substr(0,1).toUpperCase() +  set_mode.substr(1);
    document.getElementById("body").setAttribute("class", set_mode + "-" + set_color)
}