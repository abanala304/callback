let add = function(a,b){
    return a+b;
};
let multiply = function(a,b){
    return a*b;
};

let calc = function(num1, num2, callback){  ///here callback is add so it is calling add function
    return callback(num1, num2);
};
console.log(calc(2,3, add));        //// o/p will be 5
console.log(calc(2,3, multiply));   ////o/p will be 6




////////
function value(){
    console.log("value");
}
function myvalue(num, callback){   
    for(var i =0; i<=num; i++){
        console.log(i);
    }
    return callback();
}
myvalue(10, done);     //// o/p will be 1 to 10


///////

var details = {
    age: 25,
    fullName: "my name",
setName: function (firstName, lastName)  {
        this.fullName = firstName + " " + lastName;
    }
}

function getUserInput(firstName, lastName, callback)  {
    callback (firstName, lastName);
}
getUserInput ("Anil", "Banla", details.setName);

console.log (details.fullName)     ////o/p will be my name 

console.log (window.fullName);    //// o/p will be Anil Banala



///////////


var data = [];
function myDetails (data) {
    if ( typeof data === "string")
    {
        console.log(data);
    }
    else if ( typeof data === "object")                
    {
        for (var num in data) {
            console.log(num + ": " + data[num]); 
        }

    }
}

function getInput (fullname, callback) {    //fullnaem here is firstname and lastname
    allUserData.push (fullname);        //pushing fullname and lastname into the array
    callback (fullname);

}

getInput ({firstname:"Anil", lastname:"Banala"}, myDetails);     //// it will be print first name and last name as Anil Banala




////// 
var users = ["Anil", "Ajay", "Ashish"];
function adduser(username, callback) {
    setTimeout(function() {
        users.push(username);
        callback();
    },2000);
}
function getusers() {
    setTimeout(function() {
    console.log(users);
    },100);
}
adduser("Arun", getusers);   ///// O/p will be print ofter 2000 micro seconds