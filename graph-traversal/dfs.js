function dfs(start, visited = new Set()) {

  console.log(start)
  
  visited.add(start);

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {

      if (destination === 'BKK') { 
          console.log(`DFS found Bangkok`)
          return;
      }
      
      if (!visited.has(destination)) {
          dfs(destination, visited);
      }

  }

}

dfs('PHX')