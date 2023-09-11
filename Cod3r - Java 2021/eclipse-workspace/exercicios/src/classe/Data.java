package classe;

public class Data {
	
	//byte,shot,int,long -> 0
	//float, double -> 0.0
	//boolean -> false
	//char -> '\u0000'
	
	int mes;
	int dia;
	int ano;
	
	Data () {
		//dia = 1;
		//mes = 1;
		//ano = 1970;
		this(1,1,1970);
	}
	
	Data (int dia, int mes, int ano) {
		this.dia = dia;
		this.mes = mes;
		this.ano = ano;
	}
	
	String obterDataFormatada () {
		final String formato = "%d/%d/%d";
		return String.format(formato, dia, mes, ano);
	}
	
	void imprimirDataFormatada ( ) {
		System.out.println(obterDataFormatada());
	}

}
