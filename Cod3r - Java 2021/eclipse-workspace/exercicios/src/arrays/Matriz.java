package arrays;

import java.util.Arrays;
import java.util.Locale;
import java.util.Scanner;

public class Matriz {
	
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in).useLocale(Locale.US);

		System.out.print("Quantos Alunos? ");
		int qtdeAlunos = entrada.nextInt();

		System.out.print("Quantas Notas por Aluno? ");
		int qtdeNotas = entrada.nextInt();
		
		double [][] notasDaTurma = new double[qtdeAlunos][qtdeNotas];
		
		double total = 0;
		for (int a = 0; a < notasDaTurma.length; a++) {
			for (int n = 0; n < notasDaTurma[a].length; n++) {
			
			System.out.printf("Informe a nota %d do aluno %d: ",n+1,a+1);
			
			notasDaTurma[a][n] = entrada.nextDouble();
			total += notasDaTurma[a][n];
				
			}
		}
		
		double media = total / (qtdeAlunos * qtdeNotas);
		System.out.println("Media da Turma é: " + media);
		
		for(double[] notasDoAluno: notasDaTurma) {
			System.out.println(Arrays.toString(notasDoAluno));
		}

		entrada.close();
	}

}
