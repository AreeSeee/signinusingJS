let database = [
	{
		username: "aresea",
		password: "supersecret"
	}
];
let newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

let userIn=prompt("enter the username");
let passIn=prompt("enter the password");
function signIn(user,pass){
    if(user===database[0].username&& pass===database[0].password){
        console.log(newsfeed);
    }else{
        alert("wrong username/password");
    }
};

signIn(userIn,passIn);