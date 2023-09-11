package fundamentos;

import javax.swing.JOptionPane;

public class ConversaoStringNumero {

	public static void main(String[] args) {

		String valor1 = JOptionPane.
				showInputDialog("Digite o primeiro número:");
		String valor2 = JOptionPane.
				showInputDialog("Digite o segundo número:");
		
		double num1 = Double.parseDouble(valor1);
		double num2 = Double.parseDouble(valor2);
		double total = num1 + num2;
		
		System.out.println("A soma é: " + total);
		System.out.println("A média é: " + total / 2);

	}

}
