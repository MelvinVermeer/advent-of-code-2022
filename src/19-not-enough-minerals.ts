type Blueprint = {
  id: number;
  recepies: {
    name: string;
    ingredients: any;
  }[];
};

const parseBlueprint = (data: string): Blueprint => {
  const [id, recepies] = data.split(": ");
  const recep = recepies.split(". ").map((x) => ({
    name: x.split(" costs ")[0].replace("Each ", ""),
    ingredients: x
      .split(" costs ")[1]
      .split(" and ")
      .map((x) =>
        Object.fromEntries([[x.split(" ")[1], Number(x.split(" ")[0])]])
      ),
  }));
  const blueprint: Blueprint = {
    id: parseInt(id.replace("Blueprint ", "")),
    recepies: recep,
  };

  return blueprint;
};
type Resource = "ore" | "clay" | "obsidian" | "geodes";

const findBestRobot = (
  blueprint: Blueprint,
  inventory: Record<Resource, number>,
  robots: Record<Resource, number>
): Resource | null => {
  // TODO: Implement function body
  // naive , build first possible robot with given resources
  // optimal , optimize robot ratio
  if (
    inventory.ore >=
    blueprint.recepies.find((x) => x.name === "clay robot")?.ingredients[0].ore
  ) {
    return "ore";
  }
  return null;
};

export const part1 = (data: string[]): number => {
  const blueprints = data.map(parseBlueprint);

  const blueprint = blueprints[0];

  console.log(JSON.stringify(blueprint, null, 2));

  const inventory: Record<Resource, number> = {
    ore: 0,
    clay: 0,
    obsidian: 0,
    geodes: 0,
  };

  const robots: Record<Resource, number> = {
    ore: 1,
    clay: 0,
    obsidian: 0,
    geodes: 0,
  };

  const buildQueue = [];

  for (let minute = 1; minute <= 24; minute++) {
    // find the best robot to build
    const bestRobot = findBestRobot(blueprint, inventory, robots);
    if (bestRobot) {
      // add robot to build queue
      buildQueue.push(bestRobot);

      // subtract resources
      blueprint.recepies
        .find((x) => x.name.startsWith(bestRobot))
        ?.ingredients.forEach((ingredient: any) => {
          const [resource, amount] = Object.entries(ingredient)[0];
          inventory[resource as Resource] -= Number(amount);
        });
    }

    // collect minerals
    for (const [robot, value] of Object.entries(robots)) {
      inventory[robot as Resource] += value;
    }

    // add robots to inventory
  }
  console.log(
    `Minute ${24}: ${JSON.stringify({ inventory, robots }, null, 2)}`
  );

  return 0;
};

export const part2 = (data: string[]): number => {
  return 0;
};
