// The time of day is: "${time}".
// You are having: "${foodName}".
// When you're done: "${activity}".

//generate random number function
const randNumber = (num) => {
	return Math.floor(Math.random() * num);
};
//object definition

const toDoList = {
	time: ["8 AM", "12 AM", "4 AM", "6 AM", "10 AM"],
	foodName: [
		"Tea with Bread",
		"Banku with Tilapia",
		"Rice and Chicken Stew",
		"french Toast",
		"Fruits",
		"Snacks",
	],
	activity: [
		"exercise",
		"go to the gym",
		"get some rest",
		"do some studying",
		"netflix and chill",
	],
};

//declare empty array to push the to do actions for the day to;
let personalItenary = [];

//iterate over the toDoList object
for (let list in toDoList) {
	const listIndex = randNumber(toDoList[list].length);

	switch (list) {
		case "time":
			personalItenary.push(
				`The time of day is: ${toDoList[list][listIndex]}`
			);
			break;
		case "foodName":
			personalItenary.push(
				`You are having: ${toDoList[list][listIndex]}`
			);
			break;
		case "activity":
			personalItenary.push(
				`When you're done: ${toDoList[list][listIndex]}`
			);
			break;
		default:
			personalItenary.push("You have nothing to do today");
	}
}

function finalMessage(done) {
	const final = personalItenary.join("\n");
	console.log(final);
}

finalMessage(personalItenary);
