package fundamentos;

public class TipoString {
	
	public static void main(String[] args) {
		
	System.out.println("Olá Pessoas".charAt(0));	
	
	String s = "Boa Tarde";
	s= s.toUpperCase();
	System.out.println(s.concat("!!!"));
	System.out.println(s.toLowerCase().startsWith("boa"));
	System.out.println(s.startsWith("BOA"));
	System.out.println(s.toUpperCase().endsWith("TARDE"));
	System.out.println(s.length());
	System.out.println(s.equals("Boa Tarde"));
	System.out.println(s.equalsIgnoreCase("Boa Tarde"));
	
	var nome ="Théo";
	var sobrenome = "Castro";
	var idade = 2;
	var salario = 1100.999F;
	
	System.out.println("\nNome: " + nome + "\nSobrenome " + sobrenome + "\nIdade: " + idade + "\nSalário: R$ " + salario + "\n\n");
	
	System.out.printf("O senhor %s %s tem %d anos e ganha R$ %.2f.", 
			nome, sobrenome, idade, salario);
	
	String frase = String.format("\n\nO senhor %s %s tem %d anos e ganha R$ %.2f.", 
			nome, sobrenome, idade, salario);
	System.out.println(frase);
	
	System.out.println("Frase qualquer".contains("Qual"));
	System.out.println("Frase qualquer".indexOf("qual"));
	System.out.println("Frase qualquer".substring(6,14));
	
	}

}
