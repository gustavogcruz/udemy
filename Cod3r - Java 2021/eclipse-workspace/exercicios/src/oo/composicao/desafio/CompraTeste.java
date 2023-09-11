package oo.composicao.desafio;

public class CompraTeste {
	
	public static void main(String[] args) {
		
		
		Compra compra1 = new Compra();
		compra1.adicionarItem("Caneta", 2.50, 2);
		compra1.adicionarItem(new Produto("Lapis", 2.5), 2);
		
		Compra compra2 = new Compra();
		compra2.adicionarItem("Caderno", 2.50, 2);
		compra2.adicionarItem(new Produto("Borracha", 2.5), 2);
		
		Cliente cliente1 = new Cliente("Luciana");
		cliente1.adicionarCompra(compra1);
		cliente1.compras.add(compra2);
		
		System.out.println(cliente1.obterValorTotal());
	}

}
