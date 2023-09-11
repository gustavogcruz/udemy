package oo.heranca.teste;

import oo.heranca.Direcao;
import oo.heranca.Heroi;
import oo.heranca.Monstro;

public class Jogo {
	
	public static void main(String[] args) {
		
		Monstro monstro = new Monstro(10,10);
		//monstro.x = 10;
		//monstro.y = 10;
		
		Heroi heroi = new Heroi();
		heroi.x = 10;	
		heroi.y = 11;
			
		System.out.println("Monstro tem =>  " + monstro.vida + " vida(s)");
		System.out.println("Heroi tem => " +  heroi.vida + " vida(s)\n");
		
		heroi.atacar(monstro); //atacou o monstro (-20)
		monstro.atacarNivelTres(heroi);
;		
		monstro.andar(Direcao.NORTE); //monstro andou
		heroi.atacar(monstro); // não atacou
		monstro.atacar(heroi);
			
		
		System.out.println("Monstro tem =>  " + monstro.vida + " vida(s)");
		System.out.println("Heroi tem => " +  heroi.vida + " vida(s)");
		
	}

}
