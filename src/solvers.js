/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution;
  var newBoard = new Board({n: n});

  for (var i = 0; i < n; i++) {
    newBoard.togglePiece(i, i);//adding 1 to row and column
  }
  solution = newBoard.rows();
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var newBoard = new Board({n: n});
  var rooksPlaced = 0;
  // var currentRow = 0;
  var innerRecursion = function(board, currentRow = 0) {
    debugger
    if (rooksPlaced < n) {
      for (var c = 0; c < board.rows().length; c++) { //loops through board
        board.togglePiece(currentRow, c);//places rook
        if (!board.hasAnyRowConflicts() || !board.hasAnyColConflicts()) {//if no conflicts
          rooksPlaced++;//marks that a rook has been used
          currentRow++;//problem here?
          innerRecursion(board, currentRow);//pass in row as arg?
        }
        board.togglePiece(currentRow, c);//takes newly placed rook off
      }
      
      rooksPlaced--; 
      currentRow--;
      board.togglePiece(currentRow, c); // testing this ... 
      solutionCount++;
      //debugger;
      return board;//problem?
    }  
    
  };
  innerRecursion(newBoard);
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
