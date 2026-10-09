let obj={
    name: "rahul",
    age: 20,
    fun:function(){//anonymous function
        console.log(this.age);
    }
}

obj.fun();

//arrow function syntax example
let arrFun=() => {
    let a=10;
    console.log("This is arrow function");
    console.log(a);
}
arrFun();

//arrow function with parameters
const loginDetails=(username , password)=>{
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
    return "Login successful";
}

let res=loginDetails("admin@123", "admin1234222");
console.log(res);
console.log(loginDetails("user1","user1234@"));

//Nested function

function outerFun(){
    console.log("Outer function is executing....");
    let a=10;
    function innerFun(){
        console.log("Inner function is executing....");
        return a;
    }
    return innerFun();
}

let result=outerFun();
console.log(result);

function HomePage(){
    console.log("Home page");
}
function LoginPage(){
    console.log("User login successfully");
}
function RegisterPage(){
    console.log("User registered successfully");
}

HomePage(RegisterPage(), LoginPage());


/*function Display(setValues(),getValues()){
    setValues();
    getValues();
}

Display(()=>{

});*/

//genrator function - used when we dont kno how many times the function should be called
function* genFun(){
    yield a=10;
    yield b=20;
    console.log("generator function");
}

let results=genFun();
console.log(results.next().value);
console.log(results.next());
console.log(results.next());

//JSON javascript object notation

let jsondata={
    "name":"vivek",
    "age":25
}
