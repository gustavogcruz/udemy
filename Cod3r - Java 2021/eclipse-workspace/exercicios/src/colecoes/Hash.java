package colecoes;

import java.util.HashSet;

public class Hash {
	
	public static void main(String[] args) {
		
		HashSet<Usuario> usuarios = new HashSet<Usuario>();
		
		usuarios.add(new Usuario("Th�o"));
		usuarios.add(new Usuario("Gael"));
		usuarios.add(new Usuario("Miguel"));
		
		boolean resultado = usuarios.contains(new Usuario ("Th�o"));
		System.out.println(resultado);
		
	}

}
