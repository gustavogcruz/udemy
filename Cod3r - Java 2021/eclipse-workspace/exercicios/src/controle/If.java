package controle;

import java.util.Locale;
import java.util.Scanner;

public class If {

	public static void main(String[] args) {

		Scanner entrada = new Scanner(System.in).useLocale(Locale.US);

		System.out.print("Informe a m�dia: ");
		double media = entrada.nextDouble();

		if (media <= 10 && media >= 7.0) {
			System.out.println("Aprovado!");
			System.out.println("Parab�ns!");

		}

		if (media <= 7 && media >= 4.5) {
			System.out.println("Aluno em recupera��o");
		}

		if (media <= 4.5 && media >= 0) {
			System.out.println("Aluno Reprovado");
		}

		entrada.close();

	}

}
