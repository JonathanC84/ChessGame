package pieces;

import board.Position;

public class Bishop extends Piece {

    public Bishop(PieceColor color, Position position) {
        super(color, position);
    }

    @Override
    public boolean isValidMove(Position newPosition, Piece[][] board) {
        if (newPosition.equals(this.position)) {
            return false;
        }

        int rowDiff = Math.abs(position.getRow() - newPosition.getRow());
        int colDiff = Math.abs(position.getColumn() - newPosition.getColumn());

        // Diagonal move
        if (rowDiff != colDiff) {
            return false;
        }

        int rowStep = newPosition.getRow() > position.getRow() ? 1 : -1;
        int colStep = newPosition.getColumn() > position.getColumn() ? 1 : -1;
        int steps = rowDiff - 1;

        // Checking the path is clear
        for (int i = 1; i <= steps; i++) {
            if (board[position.getRow() + i * rowStep][position.getColumn() + i * colStep] != null) {
                return false;
            }
        }

        Piece destinationPiece = board[newPosition.getRow()][newPosition.getColumn()];

        if (destinationPiece == null) {
            return true;
        } else {
            return destinationPiece.getColor() != this.getColor();
        }
    }
}
