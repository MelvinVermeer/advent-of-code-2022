import fs from "fs";
import { execSync } from "child_process";

const currentDayNumbers = fs
  .readdirSync("src/")
  .filter((file) => fs.lstatSync("src/" + file).isFile())
  .map((filename) => filename.split("-")[0])
  .map((x) => Number(x));

const nextDay = Math.max(...currentDayNumbers) + 1;
const title = process.argv[process.argv.length - 1];
const kebabTitle = title.replace(/ /g, "-").toLowerCase();
const newNumber = nextDay.toString().padStart(2, "0");

fs.copyFileSync("test/data/00", `test/data/${newNumber}`);
fs.copyFileSync("test/00.test.ts", `test/${newNumber}-${kebabTitle}.test.ts`);
fs.copyFileSync("src/00-template.ts", `src/${newNumber}-${kebabTitle}.ts`);

execSync(
  `sed -i "" "s!00 - Template!${newNumber} - ${title}!g" ./test/${newNumber}-${kebabTitle}.test.ts`
);

execSync(
  `sed -i "" "s!00-template!${newNumber}-${kebabTitle}!g" ./test/${newNumber}-${kebabTitle}.test.ts`
);

execSync(
  `sed -i "" "s!data/00!data/${newNumber}!g" ./test/${newNumber}-${kebabTitle}.test.ts`
);
