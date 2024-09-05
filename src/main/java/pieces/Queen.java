package pieces;

import board.Position;

public class Queen extends Piece {

    public Queen(PieceColor color, Position position) {
        super(color, position);
    }

    @Override
    public boolean isValidMove(Position newPosition, Piece[][] board) {
        if (newPosition.equals(this.position)) {
            return false;
        }

        int rowDiff = Math.abs(newPosition.getRow() - this.position.getRow());
        int colDiff = Math.abs(newPosition.getColumn() - this.position.getColumn());

        // Linear move
        boolean linear = this.position.getRow() == newPosition.getRow()
                || this.position.getColumn() == newPosition.getColumn();

        // Diagonal move
        boolean diagonal = rowDiff == colDiff;

        if (!linear && !diagonal) {
            return false;
        }

        int rowDirection = Integer.compare(newPosition.getRow(), this.position.getRow());
        int colDirection = Integer.compare(newPosition.getColumn(), this.position.getColumn());

        // Checking the path is clear
        int currentRow = this.position.getRow() + rowDirection;
        int currentCol = this.position.getColumn() + colDirection;
        while (currentRow != newPosition.getRow() || currentCol != newPosition.getColumn()) {
            if (board[currentRow][currentCol] != null) {
                return false; // Path is blocked
            }
            currentRow += rowDirection;
            currentCol += colDirection;
        }

        Piece destinationPiece = board[newPosition.getRow()][newPosition.getColumn()];

        return destinationPiece == null || destinationPiece.getColor() != this.getColor();
    }
}
