package colecoes;

import java.util.LinkedList;
import java.util.Queue;

public class Fila {
	
	public static void main(String[] args) {
		
		Queue<String> fila = new LinkedList<String>(); // ou Queue<String> fila = new LinkedList<>()
		
		//Offer e Add - adicionam elementos na fila. 
		// Diferen�a � o comportamento quando a fila est� cheia
		
		fila.add("Luciana"); // Add - retorna uma exce��o
		fila.offer("Th�o"); //Offer - retorna true OR false (fila cheia)
		/*fila.add("Gael");
		fila.offer("Miguel");
		fila.add("Carol");
		fila.offer("Catarina");*/
		
		for (String contato: fila) {
			System.out.println(contato);
			
		}
	
		// Peek e Element - v�o obter o pr�ximo elemento da fila (sem remover)
		// Diferen�a � o comportamento quando a fila est� vazia (peek or element)
		
		System.out.println(fila.peek()); // retorna NULL caso a fila esteja vazia
		System.out.println(fila.element()); // retorna uma exce��o caso a fila esteja vazia
		

		System.out.println(fila.poll()); //retorna o elemento e retira da fila. Caso n�o tenha mais elemento, retorna NULL
		System.out.println(fila.poll());
		System.out.println(fila.poll());
		//System.out.println(fila.remove()); //retorna uma exce��o caso a fila esteja vazia
		
		//fila.size();
		//fila.clear();
		//fila.isEmpty();
		System.out.println(fila.contains("Ana"));
		
	}

}
