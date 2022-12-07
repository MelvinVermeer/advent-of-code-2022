import { last, unique } from "./shared/array";
import { sum } from "./shared/math";
import { mapValues } from "./shared/object";

type ResultType = {
  currentPath: string[];
  folders: Record<string, any>;
};

const isFile = (s: string) => !s.startsWith("$") && !s.startsWith("dir");

const getFileList = (data: string[]) => {
  let currentPath: string[] = [];
  let fullPath = "";
  const files: string[] = [];

  for (const line of data) {
    if (isFile(line)) {
      const [size, file] = line.split(" ");
      files.push(`${fullPath}/${file} ${size}`);
    }

    if (line.startsWith("$ cd")) {
      const dir = line.split(" ")[2];

      if (dir === "/") {
        currentPath = [""];
      } else if (dir === "..") {
        currentPath.pop();
      } else {
        currentPath.push(dir);
      }
      fullPath = currentPath.join("/");
    }
  }

  return files;
};

export const part1 = (data: string[]): number => {
  const files = getFileList(data);
  //console.log(files);

  const result: Record<string, number> = {};

  // every file increments all of its parents folders size
  for (const file of files) {
    //[ '', 'a', 'e', 'i 584' ]
    const [root, ...segments] = file.split("/");
    const fileSize = Number(last(last(segments).split(" ")));

    const pathSegments = ["", ...segments];
    // console.log("-----------------------");
    for (let i = 0; i < pathSegments.length - 1; i++) {
      const path = pathSegments.slice(0, i + 1).join("/") || "/";
      result[path] = (result[path] ?? 0) + fileSize;
      // console.log({
      //   // segments: pathSegments,
      //   element: ,
      //   size: fileSize,
      // });
    }
  }

  // console.log(result);

  return Object.values(result)
    .filter((x) => x <= 100_000)
    .reduce(sum);
};

export const part2 = (data: any): any => {
  const totalSpace = 70_000_000;
  const neededSpace = 30_000_000;

  const files = getFileList(data);
  const result: Record<string, number> = {};

  for (const file of files) {
    const [root, ...segments] = file.split("/");
    const fileSize = Number(last(last(segments).split(" ")));

    const pathSegments = ["", ...segments];
    for (let i = 0; i < pathSegments.length - 1; i++) {
      const path = pathSegments.slice(0, i + 1).join("/") || "/";
      result[path] = (result[path] ?? 0) + fileSize;
    }
  }

  console.log(result);
  const availableSpace = totalSpace - result["/"];

  const minimunCleanUp = neededSpace - availableSpace;

  return Object.values(result)
    .filter((f) => f >= minimunCleanUp)
    .sort((a, b) => a - b)[0];
};
