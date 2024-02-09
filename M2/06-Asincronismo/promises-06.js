const fs = require('fs');

fs.readFile("./data.txt", "utf-8", function (error, data) {
	if (error) console.log(error);
	else console.log(data);
});