package classe;

public class ValorVsReferencia {

	public static void main(String[] args) {
		
		double a = 2;
		double b = a;
		
		a++;
		b--; // atribuição por valor (tipo primitivo)
		
		System.out.println("a = " + a);
		System.out.println("b = " + b);
		
		
		Data d1 = new Data();
		Data d2 = new Data();
				
		d2 = d1; // atribuição por referência (Objeto)
		
		d1.dia = 31;
		d2.mes = 12;
		d1.ano = 2025;
		
		d1.imprimirDataFormatada();
		d2.imprimirDataFormatada();
		
		voltarDataPadrao(d1);

		d1.imprimirDataFormatada();
		d2.imprimirDataFormatada();
		
		int c = 5;
		alterarPrimitivo(c);
		System.out.println(c);
		
	}
	
	static void voltarDataPadrao(Data d) {
		d.dia = 1;
		d.mes = 1;
		d.ano = 1970;
	}
	
	static void alterarPrimitivo (int a) {
		a++;
	}
	

}
