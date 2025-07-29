import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { news } from '../data/news';
import LatestNews from '../components/Home/LatestNews';

function Home() {
  return (
    <div className="container mt-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Bem-vindo à E-Tech</h1>
          <p className="col-md-8 fs-4">
            A sua loja de referência para os melhores e mais recentes produtos
            eletrônicos do mercado.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Ver todas as ofertas
          </button>
        </div>
      </div>

      <h2>Nossos Produtos</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <Link to={`/produto/${product.id}`}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/produto/${product.id}`} className="text-decoration-none text-dark">
                    {product.name}
                  </Link>
                </h5>
                <p className="card-text">{product.description}</p>
              </div>
              <div className="card-footer">
                <h5 className="text-body-secondary">{product.price}</h5>
                <Link to={`/produto/${product.id}`} className="btn btn-primary">
                  Ver detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Componente de Últimas Notícias do Blog */}
      <LatestNews news={news} maxNews={3} />
    </div>
  );
}

export default Home; 