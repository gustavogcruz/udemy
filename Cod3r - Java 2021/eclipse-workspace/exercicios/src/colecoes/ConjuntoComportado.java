package colecoes;

import java.util.HashSet;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;

public class ConjuntoComportado {
	
	public static void main(String[] args) {
		
		//Set<String> listaAprovados = new HashSet<String>();
		SortedSet<String> listaAprovados = new TreeSet<String>();
		//Set<String> listaAprovados = new LinkedHashSet <String>();
		
		// a lista obrigatoriamente tem que ser String <String>
		// caso o tipo seja diferente do determinado. Retornará um erro de compilação.
	
		listaAprovados.add("Luciana");
		listaAprovados.add("Théo");
		listaAprovados.add("Gael");
		listaAprovados.add("Miguel");
		
		for(String candidato: listaAprovados) {
			System.out.println(candidato);
			
		}
		
		//Set<String> listaAprovados = new HashSet<String>();
		Set<Integer> nums = new HashSet<>();
		//Set<String> listaAprovados = new LinkedHashSet <String>();
		
		// a lista obrigatoriamente tem que ser String <String>
		// caso o tipo seja diferente do determinado. Retornará um erro de compilação.
		
		nums.add(1);
		nums.add(2);
		nums.add(120);
		nums.add(6);
		
		//nums.get(0) - não é possível acessar pelo índice.
		
		for(int	 n: nums) {
			System.out.println(n);
			
		}
	
	}
}
