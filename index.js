function knightMoves(start, end) {
    // Define the 8 possible moves for a knight
    const moves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    // Queue for BFS: stores [current_position, path]
    const queue = [[start, [start]]];
    // Set to keep track of visited positions
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        const [current, path] = queue.shift();

        // Check if current position is the destination
        if (current[0] === end[0] && current[1] === end[1]) {
            return path;
        }

        // Generate all possible moves
        for (const [dx, dy] of moves) {
            const x = current[0] + dx;
            const y = current[1] + dy;

            // Check if the new position is valid and not visited
            if (x >= 0 && x < 8 && y >= 0 && y < 8) {
                const newPosition = [x, y];
                if (!visited.has(newPosition.toString())) {
                    visited.add(newPosition.toString());
                    queue.push([newPosition, [...path, newPosition]]);
                }
            }
        }
    }

    return null; // If no path is found (shouldn't happen on a chessboard)
}

// Example Usage
const start = [0, 0];
const end = [7, 7];
const path = knightMoves(start, end);

if (path) {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    for (const position of path) {
        console.log(position);
    }
} else {
    console.log("No path found.");
}
