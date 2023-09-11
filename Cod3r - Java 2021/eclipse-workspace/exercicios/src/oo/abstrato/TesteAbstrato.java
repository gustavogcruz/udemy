package oo.abstrato;

public class TesteAbstrato {
	
	public static void main(String[] args) {
		
		Mamifero m = new Cachorro();
		System.out.println(m.mover());
		System.out.println(m.mamar());
		System.out.println(m.respirar());
		
		
	}

}
