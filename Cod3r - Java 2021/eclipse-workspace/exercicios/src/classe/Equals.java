package classe;

import java.util.Date;

public class Equals {
	
	public static void main(String[] args) {
		
		Usuario u1 = new Usuario();	
		u1.nome = "pedro silva";
		u1.email = "pedro.silva@blabla.com";
		
		
		Usuario u2 = new Usuario();	
		u2.nome = "pedro silva";
		u2.email = "pedro.silva@blabla.com";
		
		System.out.println(u1== u2);
		System.out.println(u1.equals(u2));
		System.out.println(u2.equals(u1));
		
		
		System.out.println(u2.equals(new Date ()));
		
	}

}
