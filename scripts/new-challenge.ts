import fs from "fs";
import { execSync } from "child_process";
const chrome = require("chrome-cookies-secure");

async function newChallenge() {
  const currentDayNumbers = fs
    .readdirSync("src/")
    .filter((file) => fs.lstatSync("src/" + file).isFile())
    .map((filename) => filename.split("-")[0])
    .map((x) => Number(x));

  const nextDay = Math.max(...currentDayNumbers) + 1;
  const title = process.argv[process.argv.length - 1];
  const kebabTitle = title.replace(/ /g, "-").toLowerCase();
  const newNumber = nextDay.toString().padStart(2, "0");

  const { session } = await chrome.getCookiesPromised(
    "https://www.adventofcode.com"
  );

  const response = await fetch(
    `https://adventofcode.com/2022/day/${newNumber}/input`,
    {
      headers: { cookie: `session=${session}` },
    }
  );

  fs.writeFileSync(`test/data/${newNumber}`, await response.text());
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
}

newChallenge();
