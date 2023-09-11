package oo.heranca;

public class Monstro extends Jogador {
	
	public Monstro(int x, int y) {
		super(x,y);
	}
	
	public boolean atacarNivelTres (Jogador oponente) {
		
		boolean ataque1 = atacar(oponente);
		boolean ataque2 = atacar(oponente);
		boolean ataque3 = atacar(oponente);
		return ataque1 || ataque2 || ataque3;
		
	}

}
