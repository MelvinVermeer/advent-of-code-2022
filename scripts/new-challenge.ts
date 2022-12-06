import fs from "fs";
import { execSync } from "child_process";
import * as dotenv from "dotenv";
dotenv.config();

const currentDayNumbers = fs
  .readdirSync("src/")
  .filter((file) => fs.lstatSync("src/" + file).isFile())
  .map((filename) => filename.split("-")[0])
  .map((x) => Number(x));

const nextDay = Math.max(...currentDayNumbers) + 1;
const title = process.argv[process.argv.length - 1];
const kebabTitle = title.replace(/ /g, "-").toLowerCase();
const newNumber = nextDay.toString().padStart(2, "0");

fs.copyFileSync("src/data/00", `src/data/${newNumber}`);
fs.copyFileSync(
  "src/00-template.test.ts",
  `src/${newNumber}-${kebabTitle}.test.ts`
);
fs.copyFileSync("src/00-template.ts", `src/${newNumber}-${kebabTitle}.ts`);

execSync(
  `sed -i "" "s!00 - Template!${newNumber} - ${title}!g" ./src/${newNumber}-${kebabTitle}.test.ts`
);

execSync(
  `sed -i "" "s!00-template!${newNumber}-${kebabTitle}!g" ./src/${newNumber}-${kebabTitle}.test.ts`
);

execSync(
  `sed -i "" "s!data/00!data/${newNumber}!g" ./src/${newNumber}-${kebabTitle}.test.ts`
);

async function loadPuzzleData() {
  if (!process.env.session) {
    console.log(
      "Add your AdventOfCode session cookie in the .env file to automatically populate your daily puzzle input"
    );
    console.log("Example: session=53616c74....");
    return;
  }

  try {
    const response = await fetch(
      `https://adventofcode.com/2022/day/${nextDay}/input`,
      {
        headers: { cookie: `session=${process.env.session}` },
      }
    );

    if (response.ok) {
      fs.writeFileSync(`src/data/${newNumber}`, await response.text());
    } else {
      console.log(response.status, response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

loadPuzzleData();
