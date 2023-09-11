package fundamentos;

import java.util.Scanner;

public class Console {
	
	public static void main(String[] args) {
		
		System.out.print("Bom");
		System.out.print(" dia!\n");
		System.out.println("Bom dia!");
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Digite o seu nome: ");
		String nome = entrada.nextLine();
		
		System.out.print("Digite o seu sobrenome: ");
		String sobrenome = entrada.nextLine();
		
		System.out.print("Digite a sua idade: ");
		int idade = entrada.nextInt();
		
		//System.out.println("\n\nNome: " + nome +" " + sobrenome + " tenho " + idade + " anos.");
		
		System.out.printf("%s %s tem %d anos.%n", nome, sobrenome, idade);
		
		
		
		entrada.close();
		
	}

}
