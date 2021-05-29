function Tdata (){
    let Dates= new Date();
    let times = document.getElementsByClassName("maindiv")[0];
    times.getElementsByClassName("todaystime")[0].innerHTML = Dates;
}
Tdata();




function menus(){
     let subjects = ['What is Promise in JS?','What CallBack in JS?','What is hoisting in JS ?','What is closure in JS?']
    //  let subjects1 = [];
    //  let subjects2 =[ ];
    //  let subjects3 =[ ];

     onclick = document.getElementsByClassName("qst1")[0].innerHTML = subjects[0];
     document.getElementsByClassName("qst2")[0].innerHTML = subjects[1];
     document.getElementsByClassName("qst3")[0].innerHTML = subjects[2];
     document.getElementsByClassName("qst4")[0].innerHTML = subjects[3];
     
 }
//menus();

    function q1(){
        const answer = "A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). ... Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.";
        document.getElementById("contains").innerHTML = answer;
        
    };
    
    function q2(){
        const answer = "A callback is a function that is to be executed after another function has finished executing — hence the name 'call back'. More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions.";
        document.getElementById("contains").innerHTML= answer;
    };
 
    function q3(){
        const answer = "In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.";
        document.getElementById("contains").innerHTML= answer;
    };
 
    function q4(){
        const answer = "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). ... In JavaScript, closures are created every time a function is created, at function creation time.";
        document.getElementById("contains").innerHTML= answer;
    };
    


// EVENT LISTNER 
// document.getElementsById("mybtn").addEventListener("click",function(){});

