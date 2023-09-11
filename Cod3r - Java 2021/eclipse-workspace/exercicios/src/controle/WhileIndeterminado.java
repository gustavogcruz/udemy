package controle;

import java.util.Locale;
import java.util.Scanner;

public class WhileIndeterminado {
	
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner (System.in).useLocale(Locale.US);
		
		String valor = "";
		
		while (!valor.equalsIgnoreCase("sair")) {
			System.out.print("Você diz: ");
			valor = entrada.nextLine();
			
		}
		
		entrada.close();
	}

}
