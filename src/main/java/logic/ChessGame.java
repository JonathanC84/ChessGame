package logic;

import board.ChessBoard;
import board.Position;
import pieces.Piece;
import pieces.PieceColor;

public class ChessGame {
    private ChessBoard board;
    private boolean whiteTurn = true;

    public ChessGame() {
        this.board = new ChessBoard();
    }

    public boolean makeMove(Position start, Position end) {
        Piece movingPiece = board.getPiece(start.getRow(), start.getColumn());
        boolean isNotThisColorTurn = movingPiece.getColor() != (whiteTurn ? PieceColor.WHITE : PieceColor.BLACK);

        if (movingPiece == null || isNotThisColorTurn) {
            return false;
        }

        if (movingPiece.isValidMove(end, board.getBoard())) {
            board.setPiece(end.getRow(), end.getColumn(), movingPiece);
            board.setPiece(start.getRow(), start.getColumn(), null);
            whiteTurn = !whiteTurn;
            return true;
        }

        return false;
    }
}
