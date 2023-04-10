var fs = require("fs");

function ReadFile(fileName) {
  try {
    // const data = fs.readFileSync(`../data/${fileName}.json`, "utf8");
    const data = fs.readFileSync(`../data/${fileName}.json`, "utf8");
    const jsonList = JSON.parse(data);
    return jsonList;
  } catch (err) {
    console.error(err);
  }
}

function SaveFile(file, fileName) {
  var jsonContent = JSON.stringify(file);

  fs.writeFile(`../data/${fileName}.json`, jsonContent, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log(`${fileName}.json file has been saved.`);
  });
}

module.exports = { ReadFile, SaveFile };
