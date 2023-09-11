package colecoes;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

public class Mapa {
	
	public static void main(String[] args) {
		
		
		Map<Integer, String> usuarios = new HashMap<>();
		
			usuarios.put(1, "Luciana");
			usuarios.put(20, "Théo");
			usuarios.put(3, "Miguel");
			usuarios.put(4, "Gael");
			
			
		System.out.println(usuarios.size());
		System.out.println(usuarios.isEmpty());
		System.out.println(usuarios.keySet()); // retorna as chaves
		System.out.println(usuarios.values()); // retorna os valores associados as chaves
		System.out.println(usuarios.entrySet()); //retorna chave e valor
		
		System.out.println(usuarios.containsKey(1)); //true ou false para a pesquisa da chave
		System.out.println(usuarios.containsValue("Luciana")); 
		System.out.println(usuarios.get(20)); // pega o valor da chave
		System.out.println(usuarios.remove(1)); // pode remover usando chave/valor - (1,"Luciana")
		
		/*for (int chave: usuarios.keySet()) {
			System.out.println(chave);
		}
		
		
		for (String usuario: usuarios.values()) {
			System.out.println(usuario);
		}*/
		
		for (Entry<Integer, String> registro: usuarios.entrySet()) {
			System.out.print(registro.getKey() + " ==> ");
			System.out.println(registro.getValue());
		}
		
	}

}
