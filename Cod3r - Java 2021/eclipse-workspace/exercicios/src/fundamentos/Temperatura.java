package fundamentos;

public class Temperatura {
	
	public static void main(String[] args) {
		
		//formula - (33 °F - 32) × 5/9

		final double FATOR = 5.0/9.0;
		final double AJUSTE = 32;
		
		//recebe temperatura em farenheits
		double tempF = 86;
		//recebe temperatura em Celsius
		double tempC;
		
		tempC = (tempF - AJUSTE) * FATOR;
		
		System.out.println("Temperatura em Celsius " + tempC + " °C");		
			
	}

}
