package fundamentos.operadores;

public class Ternarios {
	
	public static void main(String[] args) {
		
		double media = 7.6;
		String resultadoFinal = media >=7.0 ? "aprovado." : "em recupera��o.";
		
		System.out.println("O Aluno est� " + resultadoFinal);
		
		double nota = 7.3;
		boolean bomComportamente = true;
		boolean passouPorMedia = nota >= 7;
		boolean temDesconto = bomComportamente && passouPorMedia;
		String resultado = temDesconto ? "Sim." : "N�o";
		
		
		System.out.printf("Tem desconto? %s", resultado);
	}

}
