$(function(){
  
  question1();
  
});

var question1 = function(){
    
    $("div.narrative, span.q1").html("Do you like any teachers in WCHS?");
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
       $(".narrative").html("Well it looks like you don't go to Warren Central.");
    });
};

var question2 = function(){
    
    //UPDATE THE GRAPHICS
    $("div.narrative, span.q2").html("What your favorite subject?");
    $(".q2").show();
    $(".buttons").html("<button class='btn btn-primary q2-computers'>COMPUTERS</button>");
    $(".buttons").append("<button class='btn btn-primary q2-math'>MATH</button>");
    $(".buttons").append("<button class='btn btn-primary q2-english'>ENGLISH</button>");
    $(".buttons").append("<button class='btn btn-primary q2-science'>SCIENCE</button>");
    $(".buttons").append("<button class='btn btn-primary q2-business'>BUSINESS</button>");
    
    //MAKE IT WORK
    $(".q2-computers").click(function(){
        $(".q2-choice").html("COMPUTER").show();
        question3("COMPUTER");
    });
    
    $(".q2-math").click(function(){
        $(".q2-choice").html("MATH").show();
        question3("MATH");
    });
    
    $(".q2-english").click(function(){
        $(".q2-choice").html("ENGLISH").show();
            question3("ENGLISH");
    });
    
    $(".q2-science").click(function(){
        $(".q2-choice").html("SCIENCE").show();
        question3("SCIENCE");
    });
    
    $(".q2-business").click(function(){
        $(".q2-choice").html("BUSINESS").show();
        question3("BUSINESS");
    });
    
};

var question3 = function(q2_choice){
    
    $("div.narrative, span.q3").html("What type of " + q2_choice + " class do you like?");
    $(".q3").show();
    if(q2_choice === "COMPUTERS"){
        q3_buttons("Computer Graphics", "Computer Science", "Computer Science 2", "AP Computer Science");
    }
    else if(q2_choice === "MATH"){
        q3_buttons("Precal", "Algebra", "Math 10", "Calculus");
    }
    else if (q2_choice === "ENGLISH"){
        q3_buttons("English 10", "Composition", "AP English", "College Course Engish");
    }
    else if (q2_choice === "SCIENCE"){
        q3_buttons("Biology", "Zoology", "Chemistry", "Marine Biology");
    }
    else
        q3_buttons("Accountng", "Sports Marketing", "Financial Academy");
};

var q3_buttons = function(b1Text, b2Text){
    
    $(".buttons").html("<button class='btn btn-primary q3-button1'>" + b1Text + "</button>");
    $(".buttons").append("<button class='btn btn-primary q3-button2'>" + b2Text + "</button>");
    $(".buttons").append("<button class='btn btn-primary q3-button3'>" + b3Text + "</button>");
    $(".buttons").append("<button class='btn btn-primary q3-button4'>" + b4Text + "</button>");
    
    $(".q3-button1").click(function(){
    if(b1Text === "Science Fantasy"){
        displayChoice(b1Text, "Final Fantasy");
    }
    else if(b1Text === "Realistic"){
        displayChoice(b1Text,"Metal of Honor");
    }
    else if(b1Text === "Basketball"){
        displayChoice(b1Text,"2k18");
    }
    else if(b1Text === "Simulation"){
        displayChoice(b1Text, "Sims 4");
    }
    else
        displayChoice("Arena", "League of Legends");
    });
    
    $(".q3-button2").click(function(){     
    if(b2Text === "Science Fiction"){
        display(b2Text ,"Star Wars");
    }
    else if(b2Text === "Futuristic"){
        displayChoice(b2Text, "Destiny");
    }
    else if(b2Text === "Football"){
        displayChoice(b2Text, "Madden 18");
    }
    else if(b2Text === "Hack N Slash"){
        displayChoice(b2Text , "Dynasty Warriors");
    }
    else 
        displayChoice("RPG", "Wizard 101");
    });
};

var displayChoice  = function(finalAnswer, gameOption){
    $(".q3-choice").html(finalAnswer).show();
    $(".narrative").html(gameOption);
    $("buttons").hide();
};
