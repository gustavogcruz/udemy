package lambdas;

import java.util.function.BinaryOperator;

public class Calcular3 {
	
	public static void main(String[] args) {
		
		// N�O int -> Double 
		// double -> Double
		//Double = 1 <> Double = 1.0
		
		BinaryOperator<Double> calc = (a,b) -> {return a + b;};
		
		System.out.println(calc.apply(2.0, 3.0));
		
		calc = (a,b) -> a * b;
		
		System.out.println(calc.apply(2.0, 3.0));
		
		//

		BinaryOperator<Integer> calc2 = (a,b) -> {return a + b;};
		
		System.out.println(calc2.apply(2, 3));
		
		calc2 = (a,b) -> a * b;
		
		System.out.println(calc2.apply(2, 3));
		
	}

}
