document.querySelector(".story").innerHTML = 
"<br><p>Instruction: We want the story to end in a peaceful and a happy ending."

document.querySelector(".start-btn").addEventListener
("click", function() {

    // Play Music
    themeSound.play();
   
    //Write the intro to our story
    document.querySelector(".story").innerHTML = 
    "<p><br>There's a little girl who lives in a poor family, and her parents can't afford her food and a place to sleep, so she separates with her family and lives with a harsh life. A life that can only live in that moment, doesn't know what might happen tomorrow. One day when she is sitting beside the street begging for money, she sees a man accidentally drop his wallet and left. What should the girl do? ";
    //Fuctions are simply a list of commands to do
 
    document.querySelector(".start-btn").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".give-btn").classList.remove("invisible");
    document.querySelector(".take-btn").classList.remove("invisible");
} );

document.querySelector(".give-btn").addEventListener
("click", function() {
    
    //Write the intro to our story
    document.querySelector(".story").innerHTML = 
   
    "<br><p>The stranger appreciated what the girl has done, and by looking at her appearance of the cloth she wear, the shoes she wear, and the thing she uses, he decided and kindly give her two choice to pick.";

    //Fuctions are simply a list of commands to do
    document.querySelector(".give-btn").classList.add("invisible");
    document.querySelector(".take-btn").classList.add("invisible");
    document.querySelector(".leave-btn").classList.remove("invisible");
    document.querySelector(".learn-btn").classList.remove("invisible");

    
} );

document.querySelector(".take-btn").addEventListener
("click", function() {
    
    //Write the intro to our story
    document.querySelector(".story").innerHTML = 
    "<br><p>By the notification from someone beside to the police station, in a sudden police arrived. The girl was surrounded by the police and she's full of nervous and scariness which let her doesn't know what should her do next, so she decided to...... ";
    //Fuctions are simply a list of commands to do
    document.querySelector(".take-btn").classList.add("invisible");
    document.querySelector(".give-btn").classList.add("invisible");
    document.querySelector(".stay-btn").classList.remove("invisible");
    document.querySelector(".runaway-btn").classList.remove("invisible");    
} );

document.querySelector(".leave-btn").addEventListener
("click", function() {
    themeSound.pause();
    yaySound.play();
    //Write the intro to our story
    document.querySelector(".story").innerHTML = 
    "<p> Congratulations!!! You won and end the game!!<br><br><p>A few years later, the girl continued the man's position and becomes a head of the company, she's a successful person now. After that, she starts to search for her parents and two month later, she find them and give them a huge lovely huge and apologize to them that she left them alone and leave this family. Now on every year, she'll send the certain amount of money to them, for them to have a peaceful confortable life.";
    //Fuctions are simply a list of commands to do
    document.querySelector(".leave-btn").classList.add("invisible");
    document.querySelector(".learn-btn").classList.add("invisible");
    document.querySelector(".-btn").classList.remove("invisible");
    document.querySelector(".-btn").classList.remove("invisible");
} );

document.querySelector(".learn-btn").addEventListener
("click", function() {
   //Music pause
themeSound.pause();

diesSound.play();
    //Write the intro to our story
    document.querySelector(".story").innerHTML = 
    "<p> Game Over!!!! <br><br><p>After taking 500 dollar from the man, the girl goes back to her family. After few months, her family's condition has well improve, but becuase of the debt they owe that have been accumulation for a long time, at last the little girl was taken away by the debt-collection practice...... ";
    //Fuctions are simply a list of commands to do
    document.querySelector(".leave-btn").classList.add("invisible");
    document.querySelector(".learn-btn").classList.add("invisible");
} );

document.querySelector(".stay-btn").addEventListener
("click", function() {
    themeSound.pause();   
    diesSound.play();
    //Write the intro to our story
    document.querySelector(".story").innerHTML = 
    "<p>You lose!!! This is not the ending suppose to be!! <br><br><p>The girl was spent to jail and stay in there for three years. After she was released, she was bored at this kind of living style and this society, so she started to distrupt people, making mess in public places and walking on side of the laws.";
    //Fuctions are simply a list of commands to do
    document.querySelector(".runaway-btn").classList.add("invisible");
    document.querySelector(".stay-btn").classList.add("invisible");
    document.querySelector(".-btn").classList.remove("invisible");
    document.querySelector(".-btn").classList.remove("invisible");
} );

document.querySelector(".runaway-btn").addEventListener
("click", function() {
    themeSound.pause();   
    diesSound.play();
    //Write the intro to our story
    document.querySelector(".story").innerHTML = 
    "<p>You lose!!! The solution didn't conform the instruction <br><br><p> Because of attacking the police is a capital felony, so the girl was been judge rigorously by staying in jail for 6 years. Inside the jail, she often being bully by the other prisoners and untreated fairly in there. After she comes out, she get the mental illness and depression which affect her need to stay at home and get long-term rest.";
    //Fuctions are simply a list of commands to do
    document.querySelector(".runaway-btn").classList.add("invisible");
    document.querySelector(".stay-btn").classList.add("invisible");
    document.querySelector(".-btn").classList.remove("invisible");
    document.querySelector(".-btn").classList.remove("invisible");
} );
var themeSound = new Audio('sounds/Super Mario Bros. Soundtrack.mp3')
themeSound.play();

var diesSound = new Audio('sounds/smb_mariodie.wav')
diesSound.pause();

var yaySound = new Audio('sounds/smb_stage_clear.wav')
yaySound.play();

//Music pause
themeSound.pause();
diesSound.pause();