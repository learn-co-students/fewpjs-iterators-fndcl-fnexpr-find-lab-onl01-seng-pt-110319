const testVar = {};

function testFunc() {
	return "hi";
}
function superbowlWin(games) {
	let result = games.find((game) => game.result === "W");
	return result ? result.year : undefined;
}
