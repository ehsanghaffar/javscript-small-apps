function bfs(start) {

    const visited = new Set();

    const queue = [start];


    while (queue.length > 0) {

        const airport = queue.shift(); // mutates the queue

        const destinations = adjacencyList.get(airport);


        for (const destination of destinations) {

            if (destination === 'BKK') {
                console.log(`BFS found Bangkok!`)
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
            }

        }

    }

}

bfs('PHX')
