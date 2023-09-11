package oo.composicao;

public class CompraTeste {
	
	public static void main(String[] args) {
		
		Compra compra1 = new Compra();
		compra1.cliente = "Luciana";
		compra1.adicionarItem("Caneta", 2, 2.50);
		compra1.adicionarItem("Borracha", 2, 3.25);
		compra1.adicionarItem("Caderno", 2, 7.25);
		
		System.out.println(compra1.itens.size());
		System.out.println(compra1.obterValorTotal());
		
		//só pra mostrar a relação bidirecional
		double total = compra1.itens.get(0).compra.itens.get(1).compra.obterValorTotal();
		System.out.println("O valor Total é R$: " + total);
		
		
	}

}
