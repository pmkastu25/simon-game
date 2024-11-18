
var buttoncolors = ["red", "blue", "green", "yellow"];
var gamepattern = [];
var level = 0;
started = false;

$(document).keydown(function ()
    {
        if(!started)
            {
                $("#level-title").html("Level "+level);
                setTimeout(function (){nextSequence();}, 500);
                started = true;
            }
    })

    $(".btn").click(function ()
    {
        var userChosencolour = this.id;
                    
        playsound(userChosencolour);
        userClickedPattern.push(userChosencolour);
                     

        checkAnswer(userClickedPattern.length-1);

    })
            
            
    



function checkAnswer(currentLevel)
{
   
    if(userClickedPattern[currentLevel] === gamepattern[currentLevel])
        {
            if(userClickedPattern.length === gamepattern.length)
            {
                setTimeout(function (){nextSequence();}, 500);
            }
        }

        else{
            $("#level-title").html("Wrong");
            $("body").addClass("game-over");
        
            setTimeout(function (){$("body").removeClass("game-over")}, 200);
            var audio1 = new Audio("./sounds/wrong.mp3");
            audio1.play();

            $("#level-title").html("Game Over, press Any Key to Restart");

            startOver();

        }
}

function playsound(name)
{
    $("#"+name).addClass("pressed");
    var audio1 = new Audio("./sounds/"+ name +".mp3");
    audio1.play();
    setTimeout(function (){$("#"+ name).removeClass("pressed")}, 100)
}

function nextSequence(){

    userClickedPattern = [];

    level++;

    $("h1").html("Level "+level);

    var randomnumber = Math.floor(Math.random() * 4);
    var randomchosencolor = buttoncolors[randomnumber];
    gamepattern.push(randomchosencolor);
    playsound(randomchosencolor);

    
}

function startOver()
{
    level = 0;
    gamepattern = [];
    started = false;
}



