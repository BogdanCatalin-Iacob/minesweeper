# Minesweeper
## Description
Minesweeper puzzle game made of clickable cells, with hidden "mines/bombs".
The game objective is to clear the game board without detonating any mines/bombs.

## Gameplay
In Minesweeper, hidden mines are scattered throughout a board, which is divided into cells. Cells have multiple possible states:

-   Unopened cells (cover the board at the start of the game, can also be made by removing flags)
-   Numbered cells (can show 1-8)
-   Blank cells (no mines are on the diagonal/adjacent to the cell)
-   Flagged cells (appear after right-clicking an unopened cell)

An unopened cell is blank and clickable, while an opened cell is exposed. Flagged cells are unopened cells marked by the player to indicate a potential mine location.

A player selects a cell to open it. If a player opens a cell containing a mine, the game ends in a loss. Otherwise, the opened cell displays either a number, indicating the number of mines diagonally and/or adjacent to it, or a blank cell, and all adjacent cells will automatically be opened. This may cause a chain reaction; any blank cells opened by other blank cells open the surrounding cells too. Players can also flag a cell, visualised by a flag being put on the cell, to denote that they believe a mine to be in that place. Flagged cells are still considered unopened, and may be unflagged.

## Objective and strategy
A game of Minesweeper begins when the player first selects a cell on a board.
During the game, the player uses information given from the opened cells to deduce further cells that are safe to open, iteratively gaining more information to solve the board.
The player is also given the number mines on the board, known as the minecount, and the number of flags left after marking the cells.
At the begining the number of flags is equal to the number of mines.

To win a game of Minesweeper, all non-mine cells must be opened without opening a mine.
Difficulty can be increased by adding mines or starting with a larger grid.

## Images
Bomb image - bomb.png - taken from [PNGTree](https://pngtree.com/freepng/mine-bomb_5404055.html)
Flag image - flag.png - taken from [Vecteezy](https://www.vecteezy.com/png/10158189-flag-icon-sign-symbol-design)