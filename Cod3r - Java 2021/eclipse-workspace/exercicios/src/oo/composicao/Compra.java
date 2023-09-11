package oo.composicao;

import java.util.ArrayList;

public class Compra {
	
	
	String cliente;
	ArrayList<Item> itens = new ArrayList<Item>();
	
	void adicionarItem (String nome, int quantidade, double preco) 
	{
		this.adicionarItem(new Item(nome, quantidade, preco));
	
	}
	
	void adicionarItem (Item item) {
		this.itens.add(item);
		item.compra = this;
	}
	
	double obterValorTotal () {
		double total = 0;
		
		for (Item item: itens) { //Array de itens do tipo Item
			total += item.quantidade * item.preco; //cálcula a quantidade x o preço do item
			
		}
		
		return total; // retorna double com o valor total da compra
	}

}
