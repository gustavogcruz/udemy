package fundamentos;

import javax.swing.JOptionPane;

public class ConversaoStringNumero {

	public static void main(String[] args) {

		String valor1 = JOptionPane.
				showInputDialog("Digite o primeiro n�mero:");
		String valor2 = JOptionPane.
				showInputDialog("Digite o segundo n�mero:");
		
		double num1 = Double.parseDouble(valor1);
		double num2 = Double.parseDouble(valor2);
		double total = num1 + num2;
		
		System.out.println("A soma �: " + total);
		System.out.println("A m�dia �: " + total / 2);

	}

}
