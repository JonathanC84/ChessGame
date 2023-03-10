window.onload;

const chessBoard = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    [1, 2, 3, 4, 5, 6, 7, 8]
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

// fonctions et boucles qui "placent" les pièces blanches et noires sur le plateau (classes css 'white' et 'black')
// ainsi que les cases vides (classe 'empty')

function disposeWhitePiece(row, col, piece) {
    const square = `${chessBoard[0][row]}${chessBoard[1][col]}`;
    const squareClass = document.querySelector(`td.${square}`);
    const squareButton = document.createElement('button');
    squareButton.innerHTML = whitePieces[piece];
    squareButton.classList.add('white');
    squareButton.classList.add(piece);
    squareClass.appendChild(squareButton);
}

function disposeBlackPiece(row, col, piece) {
    const square = `${chessBoard[0][row]}${chessBoard[1][col]}`;
    const squareClass = document.querySelector(`td.${square}`);
    const squareButton = document.createElement('button');
    squareButton.innerHTML = blackPieces[piece];
    squareButton.classList.add('black');
    squareButton.classList.add(piece);
    squareClass.appendChild(squareButton);
}

function makeEmpty(row, col) {
    const square = `${chessBoard[0][row]}${chessBoard[1][col]}`;
    const squareClass = document.querySelector(`td.${square}`);
    squareClass.classList.add('empty');
}

for (let row = 0; row <= 1; row++) {
    for (let col = 0; col < 8; col++) {
        if (row === 0) {
            if (col === 0 || col === 7)
                disposeWhitePiece(row, col, 'rook');
            else if (col === 1 || col === 6)
                disposeWhitePiece(row, col, 'knight');
            else if (col === 2 || col === 5)
                disposeWhitePiece(row, col, 'bishop');
            else if (col === 3)
                disposeWhitePiece(row, col, 'king');
            else
                disposeWhitePiece(row, col, 'queen');
        } else {
            disposeWhitePiece(row, col, 'pawn');
        }
    }
}

for (let row = 2; row <= 5; row++) {
    for (let col = 0; col < 8; col++) {
        makeEmpty(row, col);
    }
}

for (let row = 7; row >= 6; row--) {
    for (let col = 0; col < 8; col++) {
        if (row === 7) {
            if (col === 0 || col === 7)
                disposeBlackPiece(row, col, 'rook');
            else if (col === 1 || col === 6)
                disposeBlackPiece(row, col, 'knight');
            else if (col === 2 || col === 5)
                disposeBlackPiece(row, col, 'bishop');
            else if (col === 3)
                disposeBlackPiece(row, col, 'king');
            else
                disposeBlackPiece(row, col, 'queen');
        } else {
            disposeBlackPiece(row, col, 'pawn');
        }
    }
}

let turn = 0;

const whiteButton = document.querySelectorAll('.white');
const blackButton = document.querySelectorAll('.black');


function selectPiece (buttonObject) {
    buttonObject.forEach(element => {
        element.addEventListener('click', () => {
            buttonObject.forEach(element => {
                element.classList.remove('selected');
            })
            element.classList.add('selected');
            movePiece(element);
        });
    });
}

function movePiece (piece) {
    let type = piece.classList;
    if (type.contains('pawn')) {
        movePawn(piece);
    }
}

function movePawn (pawn) {
    let location = [pawn.parentElement.classList[0][0], pawn.parentElement.classList[0][1]];
    console.log(location);
}


while (turn != -1) {
    if (turn % 2 == 0) {
        selectPiece(whiteButton);
        break;
    } else {
        selectPiece(blackButton);
        break;
    }
}