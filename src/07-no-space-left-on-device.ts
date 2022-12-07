import { last } from "./shared/array";
import { sum } from "./shared/math";
import { descending } from "./shared/sorting";

const isFile = (s: string) => !s.startsWith("$") && !s.startsWith("dir");

const getFileList = (data: string[]): string[] => {
  let segments: string[] = [];
  const files: string[] = [];

  for (const line of data) {
    if (isFile(line)) {
      const [size, file] = line.split(" ");
      files.push(`${segments.join("/")}/${file} ${size}`);
    }

    if (line.startsWith("$ cd")) {
      const dir = line.split(" ")[2];
      if (dir === "/") {
        segments = [""];
      } else if (dir === "..") {
        segments.pop();
      } else {
        segments.push(dir);
      }
    }
  }

  return files;
};

const getFolderSizes = (fileList: string[]) => {
  const result: Record<string, number> = {};

  for (const file of fileList) {
    const segments = file.split("/");
    const fileSize = Number(last(last(segments).split(" ")));

    for (let i = 0; i < segments.length - 1; i++) {
      const path = segments.slice(0, i + 1).join("/");
      result[path] = (result[path] ?? 0) + fileSize;
    }
  }

  return result;
};

export const part1 = (data: string[]): number => {
  const files = getFileList(data);
  const result = getFolderSizes(files);

  return Object.values(result)
    .filter((folderSize) => folderSize <= 100_000)
    .reduce(sum);
};

export const part2 = (data: any): any => {
  const files = getFileList(data);
  const result = getFolderSizes(files);

  const availableSpace = 70_000_000 - result[""]; // "" Refers to the root dir
  const minimumCleanUp = 30_000_000 - availableSpace;

  return last(
    Object.values(result)
      .filter((folderSize) => folderSize >= minimumCleanUp)
      .sort(descending)
  );
};
