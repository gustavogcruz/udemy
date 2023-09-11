package oo.encapsulamento;

public class Pessoa {

	private String nome;
	private String sobreNome;
	private int idade;

	public Pessoa() {
	}

	/*
	 * public Pessoa (int idade) { this.idade = idade; }
	 */

	public Pessoa(String nome, String sobreNome, int idade) {
		setNome(nome);
		setSobreNome(sobreNome);
		setIdade(idade);
	}
	
	
	/**
	 * @return the nome
	 */
	public String getNome() {
		return nome;
	}

	/**
	 * @param nome the nome to set
	 */
	public void setNome(String nome) {
		this.nome = nome;
	}
		

	public String getSobreNome() {
		return sobreNome;
	}

	public void setSobreNome(String sobreNome) {
		this.sobreNome = sobreNome;
	}
	
	public String getNomeCompleto () {
		return getNome() + " " + getSobreNome();
	}

	//Getter
	public int getIdade() {
		return idade;
	}

	//Setter
	public void setIdade(int novaIdade) {
		
		novaIdade = Math.abs(novaIdade);
		
		if (novaIdade >= 0 && novaIdade <= 120) {
			this.idade = novaIdade;
		} // else this.idade = 0;
	}
	
	@Override
	public String toString() {
		return "Olá eu sou " + getNomeCompleto() + " e tenho " + getIdade() + " anos.";
	}

}
