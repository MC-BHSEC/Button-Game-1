//Try to solve AT LEAST the first 5 Challenges.  All of the coding should be done in the JavaScript section only.

//Challenge 1: Fix the game so that the buttons reappear after pressing on the button again. (Helpful Hint:  This is a simple fix, where all you need is a different jQuery action that does this).
//Challenge 2: Make a new button that uses jQuery to add the following text to the screen: "The solution is 4,2,6,7,3,5,1."
//Challenge 3: Use jQuery to make the buttons bigger. 
//Challenge 4: Make all the buttons different colors using CSS.
//Challenge 5: Use jQuery to change the background color of the screen every time you click a new button. 
//Challenge 6: Center the instructions on the page. 
//Challenge 7: Make a new button that refreshes all the buttons.
//Challenge 8: Look at the HTML section of the code and find the secret hidden link. Use jQuery to make it visible, then follow the link to the secret challenge page!


        $("#one").click(function(){
            $("#five").hide();
        });
        $("#two").click(function(){
            $("#four").hide();
        });
        $("#three").click(function(){
            $("#seven").hide();
        });
        $("#four").click(function(){
            $("#eight").hide();
        });
        $("#five").click(function(){
            $("#three").hide();
        });
        $("#six").click(function(){
            $("#two").hide();
        });
        $("#seven").click(function(){
            $("#six").hide();
        });
        $("#eight").click(function(){
            $("#one").hide();
        });
        
