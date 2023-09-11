package colecoes;

import java.util.HashSet;
import java.util.Set;

public class ConjuntoBaguncado {
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void main(String[] args) {
		
		HashSet conjunto = new HashSet();
		
		conjunto.add(1.2); // double -> Double
		conjunto.add(true); // boolean -> Boolean
		conjunto.add("Teste"); // String
		conjunto.add(1); // int -> Integer
		conjunto.add('x'); // 
		
		System.out.println("Tamanho �: " + conjunto.size());
		
		//n�o aceita elementos repetidos. N�o gera erro, simplesmente n�o altera o tamanho
		
		conjunto.add(1); // int -> Integer
		conjunto.add('x'); // 
		
		System.out.println("Tamanho �: " + conjunto.size() + " N�o aceita repeti��o");
		
		
		System.out.println(conjunto.remove("Teste"));
		System.out.println("Tamanho �: " + conjunto.size());
		
		
		System.out.println(conjunto.contains("Teste")); // checa se existe determinado elemento
		System.out.println(conjunto.contains('x'));
		
		System.out.println(conjunto);
		
		Set nums = new HashSet();
		nums.add(1);
		nums.add(2);
		nums.add(3);
		System.out.println(nums);
		
		conjunto.addAll(nums); //Uni�o entre dois conjuntos
		System.out.println(conjunto);
		
		conjunto.retainAll(nums); //Interse��o entre dois conjuntos
		System.out.println(conjunto);
		
		conjunto.clear();
		System.out.println(conjunto);
	}

}
