var x = 5;
// let y = 6; 
// const z = 8;
// local scope. There are ... types of local scopes
// first type

// second type
function add() {
	let z = 10;
	console.log(x);
	{
		let y = 9;
		console.log(y);
	}
}
add();