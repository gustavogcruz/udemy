package fundamentos;

public class NotacaoPonto {
	
	public static void main(String[] args) {
		
		String s = "Hello, X";
		s= s.replace("X", "Senhora");
		s= s.toUpperCase();
		s= s.concat(" !!!");
		
		System.out.println(s);
		
		String x = "Gustavo".toUpperCase();
		System.out.println(x);
		
		String y = "Boa Tarde X".
				replace("X", "Théo").
				toUpperCase().
				concat(" !!!");
		System.out.println(y);
		
		
		// Tipos primitivos não tem o operador PONTO - "."
	}

}
