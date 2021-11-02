
//to detect local time
function time(){
  var time = new Date();
  time=time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
  document.getElementById("ctime").innerHTML =time ;
}
//to display time first time
time();

//to keep updating time
var timeupdate=setInterval(function(){
  time();
},59000);


//hiding activate button to first show typewriter effect and bot image animation
$(".activateButton").hide();
//hiding subtitle line 1 for first 2 second
$(".line1").hide();
//hiding arrow before
$(".arrow").hide();


//typewriter effect for subtitles line 1
//var line1="Hello Visitor";
//var line1_length=line1.length;
//var char_counter=0;
//var char="";
//setTimeout(function(){  //starting the typing effect after 2 second of loading
      //subTitle_line1_typewriter=setInterval(function(){ //setting fucntion call to keep repeating in regular interval of time
      //char=line1[char_counter];
      //$(".line1").text($(".line1").text()+char);
      //char_counter=char_counter+1;
    //},250);//time gap between typing of each character
//},2000)
//setTimeout(function(){
  //clearInterval(subTitle_line1_typewriter)
//},5350);//stopping repeating calling of above function after typing is completed  250*13 characters + 2 seconds of dealay in starting

//for subTitle 1 without typewriter effect but with animation
setTimeout(function(){
  $(".line1").show();
},2000);



//typewriter effect for subtitles line 2
var line2="Bored? Let's Chat!";
var line2_length=line2.length;
var char_counter2=0;
var char2="";
setTimeout(function(){
  subTitle_line2_typewriter=setInterval(function(){
    char2=line2[char_counter2];
    $(".line2").text($(".line2").text()+char2);
    char_counter2=char_counter2+1;
  },200);
},2550);
setTimeout(function(){
  clearInterval(subTitle_line2_typewriter)
},6200);

//to show the activate button after typewriter effect
setTimeout(function(){
  $(".activateButton").show();
},6600);
//to show arrow after activate button is shown and before arrow_animation
setTimeout(function(){
  $(".arrow").show();
},6800);

//agian hiding arrow after it's animation is complete
setTimeout(function(){
  $(".arrow").hide();
},9000);

//chatbot & deactivate button appear
$(".activateButton").click(function(){
  $(".secondSection").slideDown();
  $(".deactivateButton").fadeIn();
});

//chatbot & button disappear or after deactivating
$(".deactivateButton").click(function(){
  leave_chat();
  $(".secondSection").slideUp();
  $(".deactivateButton").fadeOut();
})


//Leave chat close chat bot
function leave_chat(){
  restart_Conversation();
  $(".secondSection").slideUp();
  $(".deactivateButton").fadeOut();
}
//function to restart conversation i.e. to delete everything from chat
function restart_Conversation(){
  i=1;
  for(i;i<=series+1;i++){
      $("."+"userResponse"+i).remove();
      $("."+"botResponse"+i).remove();
      $("br").remove();
    }
  //clearing all the values of variables like refreshing
  series=1;
  button_1_click_counter=0;
  button_2_click_counter=0;
  button_3_click_counter=0;
  buttonSeries=0;
  contentChangerCounter=0;
  user_r_int=1;
  bot_r_int=1;
  buttonSeries=0;
  //reseting user response buttons text as first use
  userResponseButtonContentChanger();
  //removing previous event handlers of buttons
  $(".b1").off('click');
  $(".b2").off('click');
  $(".b3").off('click');
  //setting event handler of user response button for first use
  start_of_chat();
}

//varibales to determine button code and their series in chat
var buttonNum="b";
var buttonSeries=0;
var buttonCode=buttonNum+buttonSeries;


//buttons clicked
function start_of_chat(){
  $(".b1").click("click",user_response_b1);
  $(".b2").click("click",user_response_b2);
  $(".b3").click("click",user_response_b3);
}
start_of_chat();

//user response collection for button 1
var userResponseCollection_b1={
  u1:"Hey!",
  u2:"Who're u?",
  u3:"What's this?",
  //2nd round
  u4:"Good",
  u5:"Bad",
  u6:"Stil Counting",
  //3rd round
  u7:"Gotta Go!",
  u8:"Tell me more!",
  U9:"Hmmm!",
  //4th round
  u10:"Life",
  u11:"Anything",
  u12:"Tech",
  //5th round
  u13:"Hmmm!",
  u14:"Ohh!",
  u15:"Great!"

};

//bot response collection for button 1
var botResponse_b1={
  b1:["Hey!, How was your day?","Yo!, How was your day?","Hello, How was your day?","Hi, How was your day?","Hi, there!, How was your day?"],
  b2:["I'm Kaifo, a 'Chat Bot', with version 1.0 developed by Kaifur Rahman.","My name is Kaifo and my version is 1.0 , I have been developed as a 'Chat Bot' by Kaifur Rahman.",
      "Hey, I'm a chat bot but my developer named me Kaifo and my version is 1.0.","I'm a 'Chat Bot' with version 1.0, developed by Kaifur Rahman, you can call me Kaifo.",
      "You can call me Kaifo, I have been developed as a 'Chat Bot' by Kaifur Rahman and my version is 1.0"],
  b3:["This is a chat bot","A useful chat bot","You can use this to chat","A bot which can chat with you","This is a ....."],
  //2nd round
  b4:["That's great to know","I wish your everyday goes like this","Great to know!","I'm happy to know that","May god bless your each day like this"],
  b5:["aah No worry ","don't lose hope dear","God is with us","I pray from now it will be best","Bad day should be a motivation for next day"],
  b6:["I wish it will be best","May result comes to good","Ohh! confused","Let it be haha","You are so caculative"],
  //3rd round
  b7:["Okay! see you soon","Bye bye","Will meet again soon","Okay bye dear","Take care"],
  b8:["Mmmm! please choose one among the suggestions,I will try to fetch something about it...?"],
  b9:["Am I boring?","Did I bored you?","Are you bored?","Why so boring?","Feeling bored?"],
  //4th round
  b10:["If everyone is happy with you, then surely you have made many compromises in your life",
      "If you are happy with everyone, then surely you have ignored many faults of others.",
      "Not having friends has the same health risk as smoking a pack of cigarettes a day, So let's be friend haha",
      "There are so many beautiful reasons to be happy, right for me is we are chatting haha",
      "Time is free but it's priceless,you can't own it but you can use it isn't it thought provoking?"],
  b11:["Let it be I didn't found anything hahah","Oops! found nothing sorry",
      "It's better if we skip this hahah","Common let's skip this you too seems least interested haha","Sorry nothing found for anything haha"],
  b12:["Did you know, right now over 8.7 billion machines are connected to the internet and one among them is chatting with me",
        "Technology will not replace great teachers but technology in the hands of great teachers can be transformational.",
        "This industry does not respect tradition, it only respect innovation",
        "Did you know most people in the world owns a mobile phone than a toothbrush",
        "28% of IT professionals hide their career from friends and family to get out of giving free tech support"],
  //end response
  b13:["Oops! I need an urgent update","Omg! there is some error..","Sorry! I gotta go for an update","Ewh! there is some glitch..","I need maintainence,Oops!"],
  b14:["Catch you later","Have a good day","Please check back later","See you soon","Bye for now"]
};


//random number generator for bot replies (5)
function randomResponseGenerator(){
  var botResponseRandomNumber=Math.random();
  botResponseRandomNumber=botResponseRandomNumber*5;
  botResponseRandomNumber=Math.floor(botResponseRandomNumber);
  return botResponseRandomNumber;
}

var checker="";//to check to value of gotta go! button to end chat
//function to change chat suggestion button contnets
var contentChangerCounter=0;
function userResponseButtonContentChanger(){
  switch(contentChangerCounter){ //determining what to display in suggestion button as per the plot of 5 cases
    case 0:
      $(".userResponseButton1").text(userResponseCollection_b1.u1);
      $(".userResponseButton2").text(userResponseCollection_b1.u2);
      $(".userResponseButton3").text(userResponseCollection_b1.u3);
      contentChangerCounter++;
      break;
    case 1:
      if (button_2_click_counter==1){
       second_topic();
      }
      else if(button_3_click_counter==1){
        second_topic();
      }
      else{
        $(".userResponseButton1").text(userResponseCollection_b1.u4);
        $(".userResponseButton2").text(userResponseCollection_b1.u5);
        $(".userResponseButton3").text(userResponseCollection_b1.u6);
        contentChangerCounter++;
      }
      break;
    case 2:
      $(".userResponseButton1").text(userResponseCollection_b1.u7);
      $(".userResponseButton2").text(userResponseCollection_b1.u8);
      $(".userResponseButton3").text(userResponseCollection_b1.u9);
      contentChangerCounter++;
      document.querySelector(".b1").addEventListener("click",function(){
        checker=this.innerHTML;;
      });
      break;
    case 3:
    if (button_1_click_counter==3){
      second_topic();
    }
    else if (checker==="Gotta Go!"){
      second_topic();
    }
    else{
      $(".userResponseButton1").text(userResponseCollection_b1.u10);
      $(".userResponseButton2").text(userResponseCollection_b1.u11);
      $(".userResponseButton3").text(userResponseCollection_b1.u12);
        contentChangerCounter++;
    }
      break;
    case 4:
    $(".userResponseButton1").text(userResponseCollection_b1.u13);
    $(".userResponseButton2").text(userResponseCollection_b1.u14);
    $(".userResponseButton3").text(userResponseCollection_b1.u15);
      contentChangerCounter++;
      break;
    case 5:
      second_topic();
      contentChangerCounter++;
      break;
}
//switch ends here
}
//function ends here
userResponseButtonContentChanger();//calling to change content for first time



//function to change the bot response content as per series
var series=1;
function chatSeriesCounter(){
  series=series+1;
  return series;
}

//user response button code defining resource a==user
var user_r_str="userResponse";  //new element created class name first letter const
var user_r_int=1;  //new element created class name varying integer

//bot response button code defining resource b==bot
var bot_r_str="botResponse";
var bot_r_int=1;


//always scroll down chat records
function scrolldown(){
  var messageBody = document.querySelector('.chatrecord');
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;

}



//latest time store
function latestTime(){
  var responseTime = new Date();
  responseTime=responseTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
  responseTime=String(responseTime);
  return responseTime;
}

//button click counters
var button_1_click_counter=0;
var button_2_click_counter=0;
var button_3_click_counter=0;

function user_response_b1(){
  button_1_click_counter+=1; //counting in which series button 1 is clicked
  user_r_cls_name=user_r_str+user_r_int; //adding letter const and varying int to make final class code
  user_message1=$(".b1").text();  //storing button's text value
  $(".userResponse").before("<h4 class=userR> </h4><br>"); //creating new element before original html one
  $(".userR").attr("class",user_r_cls_name); // changing newly created html element's class to final class code
  $("."+user_r_cls_name).addClass("userResponseStyle"); //adding 2nd class name for style
  $("."+user_r_cls_name).text(user_message1);//updating value of button to element's text
  //user response ends here

  //adding user response time
  $("."+user_r_cls_name).append("<h6 class='userResponseTimeStyle'>time</h6>");
  var responseTime = new Date(); //collecting loca date
  responseTime=responseTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}); //getting time in local string
  timeClass="userResponseTimeStyle"+user_r_int; //defining class code for response time
  $(".userResponseTimeStyle").attr("class",timeClass);//changing class name to final code
  $("."+timeClass).addClass("userResponseTimeStyleCSS");//adding 2nd class name for styling
  $("."+timeClass).text(responseTime); //udating time in element
  setTimeout(bot_response_b1,2200); //calling bot response
  scrolldown();
  user_r_int=user_r_int+1;//incrementing varying integer for class code
  //user response ends
}

//bot replies
function bot_response_b1(){
  //creating element for bot response just after user response ends
    bot_r_cls_name=bot_r_str+bot_r_int;
    $("."+user_r_cls_name).after("<h4 class=botR>bot response</h4>");
    $(".botR").attr("class",bot_r_cls_name );
    $("."+bot_r_cls_name).addClass("botResponseStyle");

    //fetching chat series number and displaying response according to that
    var series=chatSeriesCounter();
    switch (series){
      case 2:
      $("."+bot_r_cls_name).text(botResponse_b1.b1[randomResponseGenerator()]);
      break;
      case 3:
      $("."+bot_r_cls_name).text(botResponse_b1.b4[randomResponseGenerator()]);
      break
      case 4:
      $("."+bot_r_cls_name).text(botResponse_b1.b7[randomResponseGenerator()]);
      second_topic();
      break;
      case 5:
      $("."+bot_r_cls_name).text(botResponse_b1.b10[randomResponseGenerator()]);
      break;
      case 6:
      $("."+bot_r_cls_name).text(botResponse_b1.b13[randomResponseGenerator()]);
      function end_response_delay(){
        $("."+bot_r_cls_name).text(botResponse_b1.b14[randomResponseGenerator()]);
      }
      setTimeout(end_response_delay,1700);
      break;
    }

    //bot respons ends here

    //adding bot response time
    $("."+bot_r_cls_name).append("<h6 class='botResponseTimeStyle'>time</h6>");
    var responseTime = new Date();
    timeClassBot="botResponseTimeStyle"+bot_r_int;
    $(".botResponseTimeStyle").attr("class",timeClassBot);//changing class name to final code
    $("."+timeClassBot).addClass("botResponseTimeStyleCSS");//adding 2nd class name for styling
    responseTime=responseTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
    $("."+timeClassBot).text(responseTime);

    bot_r_int=bot_r_int+1;
    scrolldown();//scroll down to bottom

    //changing contents of suggestion buttons
    userResponseButtonContentChanger()
}


function user_response_b2(){
  button_2_click_counter+=1;
  user_r_cls_name=user_r_str+user_r_int;
  user_message2=$(".b2").text();
  $(".userResponse").before("<h4 class=userR> </h4><br>");
  $(".userR").attr("class",user_r_cls_name);
  $("."+user_r_cls_name).addClass("userResponseStyle");
  $("."+user_r_cls_name).text(user_message2);

  //adding user response time
  $("."+user_r_cls_name).append("<h6 class='userResponseTimeStyle'>time</h6>");
  var responseTime = new Date();
  responseTime=responseTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}); //getting time in local string
  timeClass="userResponseTimeStyle"+user_r_int; //defining class code for response time
  $(".userResponseTimeStyle").attr("class",timeClass);//changing class name to final code
  $("."+timeClass).addClass("userResponseTimeStyleCSS");//adding 2nd class name for styling
  $("."+timeClass).text(responseTime); //udating time in element
  setTimeout(bot_response_b2,2200);
  scrolldown();
  user_r_int=user_r_int+1;
  //user response ends


}
function bot_response_b2(){
  //creating element for bot response just after user response ends
    bot_r_cls_name=bot_r_str+bot_r_int;
    $("."+user_r_cls_name).after("<h4 class=botR>bot response</h4>");
    $(".botR").attr("class",bot_r_cls_name );
    $("."+bot_r_cls_name).addClass("botResponseStyle");
    //fetching chat series number and displaying response according to that
    var series=chatSeriesCounter();
    switch (series){
      case 2:
      $("."+bot_r_cls_name).text(botResponse_b1.b2[randomResponseGenerator()]);
      break;
      case 3:
      $("."+bot_r_cls_name).text(botResponse_b1.b5[randomResponseGenerator()]);
      break
      case 4:
      $("."+bot_r_cls_name).text(botResponse_b1.b8[0]);
      break;
      case 5:
      $("."+bot_r_cls_name).text(botResponse_b1.b11[randomResponseGenerator()]);
      break;
      case 6:
      $("."+bot_r_cls_name).text(botResponse_b1.b13[randomResponseGenerator()]);
      function end_response_delay(){
        $("."+bot_r_cls_name).text(botResponse_b1.b14[randomResponseGenerator()]);
      }
      setTimeout(end_response_delay,1700);
      break;
    
    }

    //adding bot response time

    $("."+bot_r_cls_name).append("<h6 class='botResponseTimeStyle'>time</h6>");
    var responseTime = new Date();
    responseTime=responseTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
    timeClassBot="botResponseTimeStyle"+bot_r_int;
    $(".botResponseTimeStyle").attr("class",timeClassBot);//changing class name to final code
    $("."+timeClassBot).addClass("botResponseTimeStyleCSS");//adding 2nd class name for styling
    $("."+timeClassBot).text(responseTime);

    bot_r_int=bot_r_int+1;
    //bot response ends here
    scrolldown();//scroll down to bottom

    //changing contents of suggestion buttons
    userResponseButtonContentChanger()
}
function user_response_b3(){
  button_3_click_counter+=1;
  user_r_cls_name=user_r_str+user_r_int;
  user_message3=$(".b3").text();
  $(".userResponse").before("<h4 class=userR> </h4><br>");
  $(".userR").attr("class",user_r_cls_name);
  $("."+user_r_cls_name).addClass("userResponseStyle");
  $("."+user_r_cls_name).text(user_message3);
  user_r_int=user_r_int+1;
  //user response ends
  //adding user response time
  $("."+user_r_cls_name).append("<h6 class='userResponseTimeStyle'>time</h6>");
  var responseTime = new Date();
  responseTime=responseTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}); //getting time in local string
  timeClass="userResponseTimeStyle"+user_r_int; //defining class code for response time
  $(".userResponseTimeStyle").attr("class",timeClass);//changing class name to final code
  $("."+timeClass).addClass("userResponseTimeStyleCSS");//adding 2nd class name for styling
  $("."+timeClass).text(responseTime); //udating time in element
  setTimeout(bot_response_b3,2200);
  scrolldown();
  user_r_int=user_r_int+1;
  //user response ends


}
function bot_response_b3(){
  //creating element for bot response just after user response ends
    bot_r_cls_name=bot_r_str+bot_r_int;
    $("."+user_r_cls_name).after("<h4 class=botR>bot response</h4>");
    $(".botR").attr("class",bot_r_cls_name );
    $("."+bot_r_cls_name).addClass("botResponseStyle");
    //fetching chat series number and displaying response according to that
    var series=chatSeriesCounter();
    switch (series){
      case 2:
      $("."+bot_r_cls_name).text(botResponse_b1.b3[randomResponseGenerator()]);
      break;
      case 3:
      $("."+bot_r_cls_name).text(botResponse_b1.b6[randomResponseGenerator()]);
      break;
      case 4:
      $("."+bot_r_cls_name).text(botResponse_b1.b9[randomResponseGenerator()]);
      break;
      case 5:
      $("."+bot_r_cls_name).text(botResponse_b1.b12[randomResponseGenerator()]);
      break;
      case 6:
      $("."+bot_r_cls_name).text(botResponse_b1.b13[randomResponseGenerator()]);//ending here
      function end_response_delay(){
        $("."+bot_r_cls_name).text(botResponse_b1.b14[randomResponseGenerator()]);//ending
      }
      setTimeout(end_response_delay,1700);
      break;
    }
    bot_r_int=bot_r_int+1;
    //bot response ends here

    //adding bot response time

    $("."+bot_r_cls_name).append("<h6 class='botResponseTimeStyle'>time</h6>");
    var responseTime = new Date();
    responseTime=responseTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
    timeClassBot="botResponseTimeStyle"+bot_r_int;
    $(".botResponseTimeStyle").attr("class",timeClassBot);//changing class name to final code
    $("."+timeClassBot).addClass("botResponseTimeStyleCSS");//adding 2nd class name for styling
    $("."+timeClassBot).text(responseTime);

    bot_r_int=bot_r_int+1;
    //bot response ends here
    scrolldown();//scroll down to bottom

    //changing contents of suggestion buttons
    userResponseButtonContentChanger();
}

function second_topic(){
  //to change the user chat suggestions buttons
  $(".userResponseButton1").text("Restart Converstation");
  $(".userResponseButton2").text("Leave Chat");
  $(".userResponseButton3").text();

  //deleting old event listeners of buttons
  $(".b1").off('click');
  $(".b2").off('click');
  $(".b3").off('click');
  $(".b3").text();

  //adding new event listener to user suggestion buttonSeries
  $(".b1").click('click',restart_Conversation); //called function to clear screen
  $(".b2").click('click',leave_chat);
}

//under development feature
var messageBox=document.querySelector(".screenfooter");
messageBox.addEventListener("click",function(){
  alert("This feature is under development stage please use suggestion box to chat");
})
