package fundamentos;

public class TiposPrimitivos {
	
	public static void main(String[] args) {
		
		//Informa��es de funcion�rio
		
		//Tipos N�mericos Inteiros
		
		byte anosDeEmpresa = 23;
		short numeroDeVoos = 542;
		int id = 56789;
		long pontosAcumulados = 3_234_845_223L;
		
		//Tipos N�mericos Reais
		
		float salario = 11_445_44F;
		double vendasAcumuladas = 2_991_797_103.01;
		
		//Tipo booleano
		boolean estaDeFerias = true; //True or False
		
		//Tipo Caracter
		char status = 'A'; //Um �nico caractes - /u - tabela Unicode
		
		//Dias de empresa
		System.out.println(anosDeEmpresa * 365);
		
		//N�mero de viagens
		System.out.println(numeroDeVoos / 2);
		
		//Pontos Acumulados
		System.out.println(pontosAcumulados/ vendasAcumuladas);
		
		//ID e Sal�rio
		System.out.println("ID:"+id + ",ganha o sal�rio -> " + salario);
		
		//F�rias
		System.out.println("F�rias? " + estaDeFerias);
		
		//Status Funcion�rio
		System.out.println("Status: " + status);
	}

}
