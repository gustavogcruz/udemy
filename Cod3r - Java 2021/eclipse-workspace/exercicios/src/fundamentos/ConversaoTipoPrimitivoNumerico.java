package fundamentos;

public class ConversaoTipoPrimitivoNumerico {
	
	public static void main(String[] args) {
		
		double d = 1; //implicita
				
		float f = (float) 1.12345688888; //explicita - ( CAST )
		//float f = 1.0F;
		
		int c = 128; //explicita - ( CAST )
		byte b = (byte) c;
		
		double e = 1.99999999; //explicita - ( CAST )
		int g = (int ) e;
		
		System.out.println(d);
		System.out.println(f);
		System.out.println(b);
		System.out.println(g);

		
	}

}
