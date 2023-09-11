package colecoes;

import java.util.ArrayList;
import java.util.List;

public class Lista {
	
	public static void main(String[] args) {
		
		//ArrayList<Usuario> lista = new ArrayList<>();
		List<Usuario> lista = new ArrayList<>();
		
		Usuario u1 = new Usuario("Luciana");
		
		lista.add(u1);
		lista.add(new Usuario("Théo"));
		lista.add(new Usuario("Gael"));
		lista.add(new Usuario("Miguel"));
		
		System.out.println("Removido? " + lista.remove(2));
		System.out.println("Removido? " + lista.remove(new Usuario("Miguel")));
		System.out.println("Tem? " + lista.contains(new Usuario("Théo")));
		
		
		for (Usuario u:lista) {
			System.out.println("\n"  + u);
		}
		
		System.out.println("\n"  + lista.get(0)); //acesso pelo indice
		
	}

}
