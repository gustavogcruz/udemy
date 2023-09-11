package controle;

import java.util.Locale;
import java.util.Scanner;

public class DoWhile {
	
	public static void main(String[] args) {
		
		// if(...) sentença; ou {}
		// while(...) sentença; ou {}
		// for (..;..;..) sentença; ou {}
		// do sentença; ou {} while (...);
		
		Scanner entrada = new Scanner(System.in).useLocale(Locale.US);
		
		String texto = "";

		do {
			System.out.println("Você precisa falar " + 
		"\nas palavras mágicas");
			System.out.println("Quer sair?");
			texto = entrada.nextLine();			
		} while (!texto.equalsIgnoreCase("por favor"));

		
		System.out.println("Obrigado!");
		entrada.close();
		
	}

}
