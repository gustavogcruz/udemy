package oo.heranca.teste;

import oo.heranca.desafio.Carro;
import oo.heranca.desafio.Ferrari;
import oo.heranca.desafio.Marea;

public class Deslocamento {
	
	public static void main(String[] args) {
		
		Carro c1 = new Marea();
		
		c1.acelerar();		
		System.out.println(c1);
		
		c1.acelerar();		
		System.out.println(c1);
		
		c1.acelerar();		
		System.out.println(c1 + "\n");
		
		Ferrari c2 = new Ferrari();		
		
		//c2.ligarAr();
		//c2.ligarTurbo();
		
		c2.acelerar();
		c2.frear();
		System.out.println(c2);
		System.out.println(c2.velocidadeDoAr());
		
		c2.acelerar();
		c2.frear();
		System.out.println(c2);
		
		c2.acelerar();
		System.out.println(c2);
		
	}

}
