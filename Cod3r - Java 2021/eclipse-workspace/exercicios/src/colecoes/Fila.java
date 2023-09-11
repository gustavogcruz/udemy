package colecoes;

import java.util.LinkedList;
import java.util.Queue;

public class Fila {
	
	public static void main(String[] args) {
		
		Queue<String> fila = new LinkedList<String>(); // ou Queue<String> fila = new LinkedList<>()
		
		//Offer e Add - adicionam elementos na fila. 
		// Diferença é o comportamento quando a fila está cheia
		
		fila.add("Luciana"); // Add - retorna uma exceção
		fila.offer("Théo"); //Offer - retorna true OR false (fila cheia)
		/*fila.add("Gael");
		fila.offer("Miguel");
		fila.add("Carol");
		fila.offer("Catarina");*/
		
		for (String contato: fila) {
			System.out.println(contato);
			
		}
	
		// Peek e Element - vão obter o próximo elemento da fila (sem remover)
		// Diferença é o comportamento quando a fila está vazia (peek or element)
		
		System.out.println(fila.peek()); // retorna NULL caso a fila esteja vazia
		System.out.println(fila.element()); // retorna uma exceção caso a fila esteja vazia
		

		System.out.println(fila.poll()); //retorna o elemento e retira da fila. Caso não tenha mais elemento, retorna NULL
		System.out.println(fila.poll());
		System.out.println(fila.poll());
		//System.out.println(fila.remove()); //retorna uma exceção caso a fila esteja vazia
		
		//fila.size();
		//fila.clear();
		//fila.isEmpty();
		System.out.println(fila.contains("Ana"));
		
	}

}
