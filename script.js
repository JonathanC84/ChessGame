window.onload;

const chessBoard = [
    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ],
    [ 1, 2, 3, 4, 5, 6, 7, 8 ]
];

const whitePieces = {
    pawn: '&#x2659;',
    knight: '&#x2658;',
    bishop: '&#x2657;',
    rook: '&#x2656;',
    queen: '&#x2655;',
    king: '&#x2654;'
};

const blackPieces = {
    pawn: '&#x265F;',
    knight: '&#x265E;',
    bishop: '&#x265D;',
    rook: '&#x265C;',
    queen: '&#x265B;',
    king: '&#x265A;'
};

function disposePiece (row, col, piece) {
    const square = `${chessBoard[0][row]}${chessBoard[1][col]}`;
    console.log(square);
    const squareClass = document.querySelector(`td.${square}`);
    const squareButton = document.createElement('button');
    squareButton.innerHTML = piece;
    squareClass.appendChild(squareButton);
}

for (let row = 0; row <= 1; row++) {
    for (let col = 0; col < 8; col++) {
        if (row === 0) {
            if (col === 0 || col === 7)
                disposePiece (row, col, whitePieces.rook);
            else if (col === 1 || col === 6)
                disposePiece (row, col, whitePieces.knight);
            else if (col === 2 || col === 5)
                disposePiece (row, col, whitePieces.bishop);
            else if (col === 3)
                disposePiece (row, col, whitePieces.king);
            else
                disposePiece (row, col, whitePieces.queen);
        } else {
            disposePiece (row, col, whitePieces.pawn);
        }
    }
}

for (let row = 7; row >= 6; row--) {
    for (let col = 0; col < 8; col++) {
        if (row === 7) {
            if (col === 0 || col === 7)
                disposePiece (row, col, blackPieces.rook);
            else if (col === 1 || col === 6)
                disposePiece (row, col, blackPieces.knight);
            else if (col === 2 || col === 5)
                disposePiece (row, col, blackPieces.bishop);
            else if (col === 3)
                disposePiece (row, col, blackPieces.king);
            else
                disposePiece (row, col, blackPieces.queen);
        } else {
            disposePiece (row, col, blackPieces.pawn);
        }
    }
}

const button = document.querySelectorAll('button');

console.log(button);

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function highlight() {
        for (let j = 0; j < button.length; j++) {
            button[j].classList.remove('red');
        }
    button[i].classList.add('red');
    });
}