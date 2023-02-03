window.onload;

const length = 64;

const chessBoard = Array(length).fill(0);

for (let i = 0; i < length; i++) {
    chessBoard[i] = i+1;
}

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

function arrangeBoard(squareIdArray, color, piece) {
    for (let i = 0; i < squareIdArray.length; i++) {
        const square = document.getElementById(squareIdArray[i]);
        const squareButton = document.createElement('button');
        squareButton.innerHTML = color[piece];
        if (color == whitePieces) {
            squareButton.classList.add('white');
        } else {
            squareButton.classList.add('black');
        }
        squareButton.classList.add(piece);
        square.appendChild(squareButton);
    }
}

function makeEmpty(squareIdArray) {
    for (let i = 0; i < squareIdArray.length; i++) {
        const square = document.getElementById(squareIdArray[i]);
        square.classList.add('empty');
    }
}

arrangeBoard([1, 8], whitePieces, 'rook');
arrangeBoard([2, 7], whitePieces, 'knight');
arrangeBoard([3, 6], whitePieces, 'bishop');
arrangeBoard([4], whitePieces, 'king');
arrangeBoard([5], whitePieces, 'queen');
arrangeBoard([9, 10, 11, 12, 13, 14, 15, 16], whitePieces, 'pawn');

arrangeBoard([57, 64], blackPieces, 'rook');
arrangeBoard([58, 63], blackPieces, 'knight');
arrangeBoard([59, 62], blackPieces, 'bishop');
arrangeBoard([60], blackPieces, 'king');
arrangeBoard([61], blackPieces, 'queen');
arrangeBoard([49, 50, 51, 52, 53, 54, 55, 56], blackPieces, 'pawn');

const emptySquaresId = Array(32).fill(0);

for (let i = 0; i < emptySquaresId.length; i++) {
    emptySquaresId[i] = 17+i;
}

makeEmpty(emptySquaresId);

const whiteButton = document.querySelectorAll('.white');
const blackButton = document.querySelectorAll('.black');

function selectPiece (buttonObject) {
    buttonObject.forEach(element => {
        element.classList.add('selectable');
        element.addEventListener('click', () => {
            buttonObject.forEach(element => {
                element.classList.remove('selected');
            })
            element.classList.remove('selectable');
            element.classList.add('selected');
            switch (getPieceName(element)) {
                case 'king': alert('king'); break;
                case 'queen': alert('queen'); break;
                case 'rook': alert('rook'); break;
                case 'knight': alert('knight'); break;
                case 'bishop': alert('bishop'); break;
                case 'pawn': alert('pawn'); break;
            }
        });
    });
}

function getPieceName (element) {
    if (element.classList.contains('king'))
        return 'king';
    else if (element.classList.contains('queen'))
        return 'queen';
    else if (element.classList.contains('rook'))
        return 'rook';
    else if (element.classList.contains('knight'))
        return 'knight';
    else if (element.classList.contains('bishop'))
        return 'bishop';
    else
        return 'pawn';
}

let turn = 0;

while (turn != -1) {
    if (turn % 2 == 0) {
        selectPiece(whiteButton);
        break;
    } else {
        selectPiece(blackButton);
        break;
    }
}