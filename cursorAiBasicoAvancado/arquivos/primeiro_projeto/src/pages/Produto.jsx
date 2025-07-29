import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

function Produto() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Produto não encontrado!</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="lead">{product.description}</p>
          <h2>{product.price}</h2>
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
      <Link to="/" className="btn btn-secondary mt-3">
        Voltar para a Home
      </Link>
    </div>
  );
}

export default Produto; 