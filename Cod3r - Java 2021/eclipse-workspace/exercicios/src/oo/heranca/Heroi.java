package oo.heranca;

public class Heroi extends Jogador {
	
	public Heroi () {
		this(0,0);
	}
	
	public Heroi(int x, int y) {
		super(x,y);
	}
	
	@Override
	public boolean atacar (Jogador oponente) {
		
		int DeltaX  = Math.abs(x - oponente.x);
		int DeltaY = Math.abs(y - oponente.y);
		
		if (DeltaX == 0 && DeltaY == 1) {
			oponente.vida -=20;
			return true;
		} else if (DeltaX == 1 && DeltaY == 0) {
			oponente.vida -=20;
			return true;
		} else {
			return false;	
		}
	}

}
