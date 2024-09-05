package pieces;

import board.Position;

public class King extends Piece {

    public King(PieceColor color, Position position) {
        super(color, position);
    }

    @Override
    public boolean isValidMove(Position newPosition, Piece[][] board) {
        if (newPosition.equals(this.position)) {
            return false;
        }

        int rowDiff = Math.abs(position.getRow() - newPosition.getRow());
        int colDiff = Math.abs(position.getColumn() - newPosition.getColumn());

        if (!(rowDiff == 1 && colDiff == 1)) {
            return false;
        }

        Piece destinationPiece = board[newPosition.getRow()][newPosition.getColumn()];

        return destinationPiece == null || destinationPiece.getColor() != this.getColor();
    }
}
