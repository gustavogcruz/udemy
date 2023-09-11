package colecoes;

import java.util.HashSet;

public class Hash {
	
	public static void main(String[] args) {
		
		HashSet<Usuario> usuarios = new HashSet<Usuario>();
		
		usuarios.add(new Usuario("Théo"));
		usuarios.add(new Usuario("Gael"));
		usuarios.add(new Usuario("Miguel"));
		
		boolean resultado = usuarios.contains(new Usuario ("Théo"));
		System.out.println(resultado);
		
	}

}
