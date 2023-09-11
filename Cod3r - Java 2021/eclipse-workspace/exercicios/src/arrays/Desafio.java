package arrays;

import java.util.Arrays;
import java.util.Locale;
import java.util.Scanner;

public class Desafio {
	
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in).useLocale(Locale.US);

		System.out.print("Quantas notas? ");	
		int qtdeNotas = entrada.nextInt();
		//System.out.println(qtdeNotas);
		
		double [] notas = new double[qtdeNotas];
		
		for (int i = 0; i < notas.length; i++) {
			System.out.print("Informe a nota " + (i + 1) + ": ");
			notas[i] = entrada.nextDouble();
		}
		
		System.out.println("\n" + Arrays.toString(notas) +"\n");
		
		double total = 0;
		for (double nota: notas) {
			total+=nota;
		}
 
		System.out.println("A média de Notas é: " + (total/notas.length));
		entrada.close();
	}

}
