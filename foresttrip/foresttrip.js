$(function(){
  
  question1();
  
});

var question1 = function(){
    
    $("div.narrative, span.q1").html("Would you like to explore through the forest?");
    $(".q1").show();
    $(".buttons").html("<button class='btn btn-primary q1-yes'> YES </button>");
    $(".buttons").append("<button class='btn btn-primary q1-no'>NO</button>");
    
    //MAKE IT WORK
    $(".q1-yes").click(function(){
      
      //Update Sidebar
      $(".q1-choice").html("YES").show();
      //Run Question 2
      question2();
    });
    $(".q1-no").click(function(){
       
       //UPDATE SIDEBAR
       $(".q1-choice").html("NO").show();
       //RUN QUESTION 2
       $(".narrative").html("This game is not meant for you then. Carry on.");
    });
};

var question2 = function(){
    
    //UPDATE THE GRAPHICS
    $("div.narrative, span.q2").html("While you are walking through the forest you come across a stack of money and a mystery you can only choose one. Do you choose the mystery box, the stack of money, or neither and just keep treading through the forest?");
    $(".q2").show();
    $(".buttons").html("<button class='btn btn-primary q2-BOX'>Box</button>");
    $(".buttons").append("<button class='btn btn-primary q2-MONEY'>Money</button>");
    $(".buttons").append("<button class='btn btn-primary q2-NEITHER'>Neither</button>");
    
    //MAKE IT WORK
    $(".q2-BOX").click(function(){
        $(".q2-choice").html("BOX").show();
        question3("BOX");
    });
    
    $(".q2-MONEY").click(function(){
        $(".q2-choice").html("MONEY").show();
        question4("MONEY");
    });
    
    $(".q2-NEITHER").click(function(){
        $(".q2-choice").html("NEITHER").show();
        question5("NEITHER");
    });
    
};


var question3 = function(q2_choice){
    
    $("div.narrative, span.q3").html("You open the box and there is a tinted bottle inside of the box. You can you can drink the bottle and quinch your thirst, or it will either be a deadly poison and kill you. Which do you choose?");
    $(".q3").show();
    $(".buttons").html("<button class='btn btn-danger q3-drink'>DRINK</button>");
    $(".buttons").append("<button class='btn btn-warning q3-nodrink'>NOT DRINK</button>");
    
    $(".q3-drink").click(function(){
      $(".q3-choice").html("DRINK").show();
      //Run Question 6
      question6();
    });
    $(".q3-nodrink").click(function(){
       
       $(".q3-choice").html("NOT DRINK").show();
       //RUN QUESTION 7
        question7();
    });
};

var question4 = function(){
    $("div.narrartive, span.q4").html("You choose the money. Lucky for you for there was 10,000 dollars all together. The catch is if the money is to found on you your life is at risk. Do you leave the forest, or decide to continue going?");
    $(".q4").show();
    $(".buttons").html("<button class='btn btn-success q4-leave'>LEAVE</button>");
    $(".buttons").append("<button class='btn btn-warning q4-continue>CONTINUE</button>");
    $(".q4-leave").click(function(){
       $(".q4-choice").html("LEAVE").show();
       //RUN QUESTION 8
       question8();
    });
       $(".q4-continue").click(function(){
           $(".q4-choice").html("CONTINUE").show();
           //RUN QUESTION 9
           question9();
    });
};

var question5 = function(){
    $("div.narrartive, span.q5").html("You decide to choose neither. Smart for you you were able to come across that is worth millions of dollars, and you now charishing this moment, and leave the forest with your earning.");
    $(".q5").show();
    $(".buttons").html("<button class='btn btn-warning q5-celebrate'>CELEBRATE</button>");
    $(".buttons").append("<button class='btn btn-primary q5-restart>RESTART</button>");
    $(".q5-celebrate").click(function(){
       $(".q5-choice").html("CELEBRATE").show();
       //RUN QUESTION 10
       question10();
    });
       $(".q5-restart").click(function(){
           $(".q5-choice").html("Restart").show();
           //RUN QUESTION 1
           question1();
    });
};

var question6 = function(){
   $("div.narrative, span.q6").html("You drink the substance that inside of the bottle. Unfortunately for you it was poisonous substance, and you are now dead."); 
   $(".q6").show();
   $(".buttons").html("<button class='btn btn-primary q6-restart>RESTART</button>");
   $(".q6-restart").click(function(){
           $(".q6-choice").html("Restart").show();
           //RUN QUESTION 1
           question1();
    });
};

var question7 = function(){
  $("div.narrative, span.q7").html("Good decision by you because you avoided the poisonous substance inside of the bottle, and was able to quinch your thirst at a water fountain outside of the forest.")  ;
   $(".q7").show();
   $(".buttons").html("<button class='btn btn-primary q7-restart>RESTART</button>");
   $(".q7-restart").click(function(){
           $(".q7-choice").html("Restart").show();
           //RUN QUESTION 1
           question1();
    });
};

var question8 = function(){
  $("div.narrative, span.q8").html("You have now left the forest successfully with your earning of 10,000 dollars. "); 
   $(".q8").show();
   $(".buttons").html("<button class='btn btn-primary q8-restart>RESTART</button>");
   $(".q8-restart").click(function(){
           $(".q8-choice").html("Restart").show();
           //RUN QUESTION 1
           question1();
    });
};

var question9 = function(){
    $("div.narrative, span.q9").html("You decide to continue through the forest, but you come across a group of people that are also wondering around the forest. They notice the money you have and say that if you don't give it up they will beat you up. Do you choose to give up your money, or to make a run for it?");
    $(".q9").show();
    $(".buttons").html("<button class='btn btn-info q9-give'>GIVE IT UP</button>");
    $(".buttons").append("<button class='btn btn-danger q9-run'>RUN</button>");
    $("q9-give").click(function(){
        $("q9-choice").html("Give").show();
        //RUN QUESTION 11
        question11();
    });
    $(".q9-run").click(function(){
           $(".q9-choice").html("Run").show();
           //RUN QUESTION 12
           question12();
    });
};