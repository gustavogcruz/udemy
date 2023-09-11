package fundamentos.operadores;

import java.util.Scanner;

public class DesafioCalculadora {
	
	public static void main(String[] args) {
		
	//Ler Num1
	//Ler Num2
	// + - / *
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.println("Informe o n�mero: ");
		double num1 = entrada.nextDouble();
		System.out.println("Informe o n�mero: ");
		double num2 = entrada.nextDouble();
		System.out.println("Informe a opera��o : ");
		String operacao = entrada.next();
		
		//L�gica
		double resultado = "+".equals(operacao) ? num1 + num2 : 0;
		resultado = "-".equals(operacao) ? num1 - num2 : resultado;
		resultado = "*".equals(operacao) ? num1 * num2 : resultado;
		resultado = "+".equals(operacao) ? num1 + num2 : resultado;
		resultado = "/+".equals(operacao) ? num1 / num2 : resultado;
		resultado = "%+".equals(operacao) ? num1 % num2 : resultado;
				
		System.out.printf("%.2f %s %.2f = %.2f", 
		num1, operacao, num2, resultado);
		entrada.close();
	
	}

}
