export const dijkstra = (graph: any, source: string, end: string) => {
  const distances: any = Object.keys(graph).reduce(
    (a, c) => ({ ...a, [c]: Infinity }),
    {}
  );
  distances[source] = 0;

  let parents: any = Object.keys(graph).reduce(
    (a, c) => ({ ...a, [c]: null }),
    {}
  );
  let visited = new Set();

  let currVertex = vertexWithMinDistance(distances, visited);

  while (currVertex !== null) {
    let distance = distances[currVertex];
    let neighbors = graph[currVertex];

    for (let neighbor in neighbors) {
      let newDistance = distance + neighbors[neighbor];

      if (distances[neighbor] > newDistance) {
        distances[neighbor] = newDistance;
        parents[neighbor] = currVertex;
      }
    }

    visited.add(currVertex);
    currVertex = vertexWithMinDistance(distances, visited);
  }

  return distances[end];
};

const vertexWithMinDistance = (
  distances: { [x: string]: any },
  visited: Set<unknown>
) => {
  let minDistance = Infinity;
  let minVertex: string | null = null;

  for (let vertex in distances) {
    let distance = distances[vertex];

    if (distance < minDistance && !visited.has(vertex)) {
      minDistance = distance;
      minVertex = vertex;
    }
  }

  return minVertex;
};
