package pieces;
import board.Position;

public abstract class Piece {
    protected PieceColor color;
    protected Position position;

    public Piece(PieceColor color, Position position) {
        this.color = color;
        this.position = position;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public PieceColor getColor() {
        return color;
    }

    public abstract boolean isValidMove(Position newPosition, Piece[][] board);

    public boolean isWhite() {
        return this.color.equals(PieceColor.WHITE);
    }
}


