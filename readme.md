# Advent of Code 2022

https://adventofcode.com/2022

## Run it your self

If you want to test the code, run the following commands

```
yarn install
yarn build
yarn test
```

## Debugging a single test

Enure only your test is run (by renaming `it` to `fit`), and then use `F5` (Run and Debug) in your editor. The `launch.json` is configured so that only the current open test is passed to Jest.

## Template

Creating a new src, test and data file for a day is automated. To create a new set run call `yarn new <challenge>`. Example:

```
yarn new "Sonar Sweep"
```

If you provide the AdventOfCode session cookie in a `.env` file your daily puzzle input will automatically be populated.

Example:

```
session=53616c7...
```
