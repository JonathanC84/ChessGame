package pieces;

import board.Position;

public class Pawn extends Piece {

    private final int direction = isWhite() ? -1 : 1;

    public Pawn(PieceColor color, Position position) {
        super(color, position);
    }

    @Override
    public boolean isValidMove(Position newPosition, Piece[][] board) {
        if (newPosition.equals(this.position)) {
            return false;
        }

        int rowDiff = (newPosition.getRow() - position.getRow()) * direction;
        int colDiff = newPosition.getColumn() - position.getColumn();

        boolean isStartingPosition = (isWhite() && position.getRow() == 6) || (!isWhite() && position.getRow() == 1);
        boolean isMiddleRowEmpty = board[position.getRow() + direction][position.getColumn()] == null;

        Piece destinationPiece = board[newPosition.getRow()][newPosition.getColumn()];

        if (destinationPiece == null && colDiff == 0) {
            return rowDiff == 1 || (rowDiff == 2 && isStartingPosition && isMiddleRowEmpty);
        } else if (destinationPiece != null) {
            return Math.abs(colDiff) == 1 && rowDiff == 1 && (destinationPiece.color != this.color);
        } else {
            return false;
        }
    }
}
