import { sum } from "./shared/math";
import { mapValues } from "./shared/object";

type ResultType = {
  currentPath: string[];
  folders: Record<string, any>;
};

const isFile = (s: string) => !s.startsWith("$") && !s.startsWith("dir");

const parseDirs = (data: string[]) => {
  const directories = data.reduce(
    (result, line) => {
      if (line.startsWith("$")) {
        const [dollar, command, path] = line.split(" ");
        if (command === "cd") {
          if (path === "/") {
            result.currentPath = [];
          } else if (path === "..") {
            result.currentPath.pop();
          } else {
            result.currentPath.push(path);
          }
          // console.log("/" + result.currentPath.join("/"));
        }
      }

      if (isFile(line)) {
        if (
          !Array.isArray(result.folders["/" + result.currentPath.join("/")])
        ) {
          result.folders["/" + result.currentPath.join("/")] = [];
        }

        result.folders["/" + result.currentPath.join("/")].push(line);
      }

      return result;
    },
    { currentPath: [], folders: {} } as ResultType
  );

  return directories.folders;
};

// const parseFile;

export const part1 = (data: string[]): number => {
  const f = parseDirs(data);
  // console.log(f);
  const x = mapValues(f, (a) =>
    a
      .map((file: any) => file.split(" ")[0])
      .map(Number)
      .reduce(sum)
  );
  // console.log(x);

  // add sizes from subfolders
  const entries = Object.entries(x);
  const y = mapValues(
    x,
    (size: number, path: string) =>
      size +
      entries
        .filter(([k, v]) => k.startsWith(path) && k.length > path.length)
        .map(([k, v]) => v)
        .reduce(sum, 0)
  );
  // console.log(y);

  return Object.values(y)
    .filter((x) => x <= 100000)
    .reduce(sum);
};

export const part2 = (data: any): any => {
  return data;
};
