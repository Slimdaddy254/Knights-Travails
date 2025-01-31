# Knights-Travails
A project to find the shortest path for a knight's movement on a chessboard, using the Breadth-First Search (BFS) algorithm
# BFS Implementation

- Use a queue to keep track of the current position and the path taken to reach that position.

- Use a visited set to avoid revisiting the same position.

- For each position, generate all valid moves and add them to the queue if they haven’t been visited.

- Stop when the destination is reached.

# Edge Cases

- Ensure the knight doesn’t move off the board.

- Handle the case where the start and end positions are the same.
