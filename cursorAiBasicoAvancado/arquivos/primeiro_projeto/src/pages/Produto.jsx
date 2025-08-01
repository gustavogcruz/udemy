import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

/**
 * Página Produto - Exibe detalhes completos do produto
 * 
 * Esta página renderiza uma página de produto completa com galeria de imagens,
 * seleção de tamanho e cor, avaliações, preços e funcionalidades de e-commerce.
 * 
 * @component
 * @returns {JSX.Element} Página de produto completa
 */
function Produto() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  
  // Estados para controle da interface
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <h2>Produto não encontrado!</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Voltar para a Home
        </Link>
      </div>
    );
  }

  // Dados simulados para cores e tamanhos disponíveis
  const availableColors = [
    { name: 'black', label: 'Black', hex: '#000000' },
    { name: 'white', label: 'White', hex: '#ffffff' }
  ];

  const availableSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL'];
  const inStockSizes = ['XXS', 'XS']; // Simulando tamanhos em estoque

  // Imagens do produto (simulando múltiplas imagens)
  const productImages = [
    product.image,
    product.image, // Simulando diferentes ângulos
    product.image,
    product.image
  ];

  /**
   * Função para adicionar produto ao carrinho
   */
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor, selecione um tamanho');
      return;
    }
    
    const cartItem = {
      id: product.id,
      name: product.name,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      price: product.price,
      image: product.image
    };
    
    console.log('Produto adicionado ao carrinho:', cartItem);
    alert('Produto adicionado ao carrinho!');
  };

  /**
   * Função para alterar quantidade
   */
  const handleQuantityChange = (increment) => {
    const newQuantity = quantity + increment;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="product-page">
      {/* Breadcrumbs */}
      <div className="container mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none">Produtos</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>
      </div>

      <div className="container mt-4">
      <div className="row">
          {/* Galeria de Imagens */}
          <div className="col-lg-6">
            <div className="product-gallery">
              {/* Imagem Principal */}
              <div className="main-image-container mb-3">
                <img 
                  src={productImages[selectedImage]} 
                  alt={product.name} 
                  className="img-fluid main-product-image"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
              </div>
              
              {/* Thumbnails */}
              <div className="thumbnails-container d-flex gap-2">
                {productImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - Vista ${index + 1}`}
                      className="img-fluid"
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        objectFit: 'cover',
                        border: selectedImage === index ? '2px solid #007bff' : '1px solid #dee2e6'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detalhes do Produto */}
          <div className="col-lg-6">
            <div className="product-details">
              {/* Nome e Tipo */}
              <h1 className="product-title mb-2">{product.name}</h1>
              <p className="product-type text-muted mb-3">Tech Jersey</p>
              
              {/* Preço */}
              <div className="price-section mb-3">
                <span className="original-price text-muted text-decoration-line-through me-2">
                  R$ 79,00
                </span>
                <span className="current-price text-primary fw-bold fs-4">
                  {product.price}
                </span>
              </div>
              
              {/* Parcelamento */}
              <p className="installment-info text-muted mb-3">
                4x de R$ 14,75 sem juros ou R$ 59,00 à vista
              </p>
              
              {/* Avaliações */}
              <div className="reviews-section mb-4">
                <div className="d-flex align-items-center">
                  <div className="stars me-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning"></i>
                    ))}
                  </div>
                  <span className="review-count text-muted">(122 avaliações)</span>
                </div>
              </div>
              
              {/* Seleção de Cor */}
              <div className="color-section mb-4">
                <h6 className="mb-2">Cor: {availableColors.find(c => c.name === selectedColor)?.label}</h6>
                <div className="color-options d-flex gap-2">
                  {availableColors.map((color) => (
                    <div
                      key={color.name}
                      className={`color-swatch ${selectedColor === color.name ? 'selected' : ''}`}
                      onClick={() => setSelectedColor(color.name)}
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: color.hex,
                        border: color.name === 'white' ? '1px solid #dee2e6' : 'none',
                        cursor: 'pointer',
                        border: selectedColor === color.name ? '2px solid #007bff' : '1px solid #dee2e6'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Seleção de Tamanho */}
              <div className="size-section mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">Tamanho</h6>
                  <a href="#" className="size-guide text-decoration-none text-muted">
                    <i className="bi bi-rulers me-1"></i>
                    Guia de Tamanhos
                  </a>
                </div>
                <div className="size-options d-flex flex-wrap gap-2">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      className={`btn ${selectedSize === size ? 'btn-primary' : 'btn-outline-secondary'} ${
                        !inStockSizes.includes(size) ? 'disabled opacity-50' : ''
                      }`}
                      onClick={() => inStockSizes.includes(size) && setSelectedSize(size)}
                      disabled={!inStockSizes.includes(size)}
                      style={{ minWidth: '50px' }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Promoção */}
              <div className="promotion-banner mb-4">
                <div className="alert alert-primary mb-0">
                  <i className="bi bi-tag-fill me-2"></i>
                  50% Off - Desconto aplicado no carrinho
                </div>
              </div>
              
              {/* Seletor de Quantidade */}
              <div className="quantity-section mb-4">
                <h6 className="mb-2">Quantidade</h6>
                <div className="quantity-selector d-flex align-items-center">
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <i className="bi bi-dash"></i>
                  </button>
                  <span className="mx-3 fw-bold">{quantity}</span>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>
              </div>
              
              {/* Botão de Comprar */}
              <div className="action-section mb-4">
                <button 
                  className={`btn btn-primary btn-lg w-100 ${!selectedSize ? 'disabled' : ''}`}
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                >
                  {selectedSize ? 'Adicionar ao Carrinho' : 'Selecionar Tamanho'}
                </button>
              </div>
              
              {/* Descrição */}
              <div className="description-section">
                <h6 className="mb-3">
                  <i className="bi bi-info-circle me-2"></i>
                  DESCRIÇÃO
                </h6>
                <p className="text-muted">
                  {product.description}
                </p>
                <p className="text-muted">
                  Nosso produto favorito, este design assimétrico é criado em nosso tecido 
                  Tech Tee suave e funcional para ser uma versão elevada do seu básico favorito. 
                  Este estilo feminino drapeia nos lugares certos. A única pergunta é: 
                  quantas cores você precisa?
                </p>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Produto; 