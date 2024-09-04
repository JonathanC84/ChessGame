package pieces;

import board.Position;

public class Rook extends Piece {

    public Rook(PieceColor color, Position position) {
        super(color, position);
    }

    @Override
    public boolean isValidMove(Position newPosition, Piece[][] board) {

        if (position.getRow() == newPosition.getRow()) {
            int columnMoveStart = Math.min(position.getColumn(), newPosition.getColumn()) + 1;
            int columnMoveEnd = Math.max(position.getColumn(), newPosition.getColumn());
            for (int columnBox = columnMoveStart; columnBox < columnMoveEnd; columnBox++) {
                if (board[position.getRow()][columnBox] != null) {
                    return false;
                }
            }
        } else if (position.getColumn() == newPosition.getColumn()) {
            int rowMoveStart = Math.min(position.getRow(), newPosition.getRow()) + 1;
            int rowMoveEnd = Math.max(position.getRow(), newPosition.getRow());
            for (int rowBox = rowMoveStart; rowBox < rowMoveEnd; rowBox++) {
                if (board[rowBox][position.getColumn()] != null) {
                    return false;
                }
            }
        } else {
            return false;
        }

        Piece destinationPiece = board[newPosition.getRow()][newPosition.getColumn()];

        if (destinationPiece == null) {
            return true;
        } else return destinationPiece.getColor() != this.getColor();
    }
}
