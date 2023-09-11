package fundamentos;

public class TiposPrimitivos {
	
	public static void main(String[] args) {
		
		//Informações de funcionário
		
		//Tipos Númericos Inteiros
		
		byte anosDeEmpresa = 23;
		short numeroDeVoos = 542;
		int id = 56789;
		long pontosAcumulados = 3_234_845_223L;
		
		//Tipos Númericos Reais
		
		float salario = 11_445_44F;
		double vendasAcumuladas = 2_991_797_103.01;
		
		//Tipo booleano
		boolean estaDeFerias = true; //True or False
		
		//Tipo Caracter
		char status = 'A'; //Um único caractes - /u - tabela Unicode
		
		//Dias de empresa
		System.out.println(anosDeEmpresa * 365);
		
		//Número de viagens
		System.out.println(numeroDeVoos / 2);
		
		//Pontos Acumulados
		System.out.println(pontosAcumulados/ vendasAcumuladas);
		
		//ID e Salário
		System.out.println("ID:"+id + ",ganha o salário -> " + salario);
		
		//Férias
		System.out.println("Férias? " + estaDeFerias);
		
		//Status Funcionário
		System.out.println("Status: " + status);
	}

}
