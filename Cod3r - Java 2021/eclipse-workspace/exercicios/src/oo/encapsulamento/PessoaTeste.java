 package oo.encapsulamento;

public class PessoaTeste {
	
	public static void main(String[] args) {
		
		Pessoa p1 = new Pessoa("Théo","Neves",-40);
		
		//p1.idade = -40; //valor alterado diretamente
		p1.setIdade(121); // valor alterador por método
		p1.setNome("Luciana");
		
		//System.out.println(p1.idade); //valor lido diretamente
		System.out.println("Nome: " + p1.getNome());
		System.out.println("Idade: " + p1.getIdade()); //valor lido por método
		
		System.out.println(p1);
			
	}

}
