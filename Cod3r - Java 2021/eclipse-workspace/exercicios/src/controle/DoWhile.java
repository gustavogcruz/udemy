package controle;

import java.util.Locale;
import java.util.Scanner;

public class DoWhile {
	
	public static void main(String[] args) {
		
		// if(...) senten�a; ou {}
		// while(...) senten�a; ou {}
		// for (..;..;..) senten�a; ou {}
		// do senten�a; ou {} while (...);
		
		Scanner entrada = new Scanner(System.in).useLocale(Locale.US);
		
		String texto = "";

		do {
			System.out.println("Voc� precisa falar " + 
		"\nas palavras m�gicas");
			System.out.println("Quer sair?");
			texto = entrada.nextLine();			
		} while (!texto.equalsIgnoreCase("por favor"));

		
		System.out.println("Obrigado!");
		entrada.close();
		
	}

}
