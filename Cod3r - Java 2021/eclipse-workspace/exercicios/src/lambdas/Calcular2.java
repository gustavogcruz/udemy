package lambdas;

public class Calcular2 {
	
	public static void main(String[] args) {
		
		Calculo calculo = (a,b) -> {return a + b;};
		
		System.out.println(calculo.executar(2, 3));
		
		calculo = (a,b) -> a * b;
		
		System.out.println(calculo.executar(2, 3));
		
		System.out.println(calculo.legal());
		
		System.out.println(Calculo.muitoLegal());
		
	}

}
