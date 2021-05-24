const fs = require("fs");

const data = fs.readFileSync(__dirname + "/../source/worker.js", "utf-8");

const field = /e\[e.([A-Za-z0-9_]+) = (\d+)]/gi;

let state = 0;
let isModeling = true;
const modelList = [];
let modelIndex = 0;

for (let item of data.matchAll(field)) {
    if (item[2] === "0") {
        // First list are primitives
        state++;
    }

    if (state < 2) {
        continue;
    }

    if (item[2] === "0" && !isModeling) {
        modelIndex++;

        if (modelIndex >= modelList.length) {
            break;
        }
    }


    if (item[2] === "0" && modelList.length > 0) {
        isModeling = false;
    }

    if (isModeling) {
        modelList.push({
            type: parseInt(item[2]),
            name: item[1],
            fields: []
        });
        continue;
    }

    modelList[modelIndex].fields.push({
        index: parseInt(item[2]),
        name: item[1]
    });
}

let rust = "";

for (let model of modelList) {
    rust += `#[derive(Model)]
#[uncage(type = ${model.type})]
struct ${model.name} {\n`;

    for (let field of model.fields) {
        let name = field.name.replace(/[A-Z0-9]/g, (x) => `_${x.toLowerCase()}`).replace(/^_/, '');
        if (name === "type") {
            name = "r#type"
        }

        rust += `    #[uncage(index = ${field.index})]\n    ${name}: (),\n`
    }

    rust += "}\n\n";
}

console.log(rust);