import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente PromotionBanner - Banner de promoções e novidades
 * 
 * Este componente renderiza um banner promocional com design limpo e minimalista,
 * destacando as melhores ofertas e novidades da loja. Inclui título chamativo,
 * descrição e botões de call-to-action para promoções e novidades.
 * 
 * @component
 * @param {Object} props - Propriedades do componente
 * @param {string} props.title - Título principal do banner (padrão: "OS MELHORES COMPUTADORES DO MUNDO!")
 * @param {string} props.subtitle - Subtítulo/descrição do banner
 * @param {string} props.promotionsText - Texto do botão de promoções (padrão: "PROMOÇÕES")
 * @param {string} props.newsText - Texto do botão de novidades (padrão: "NOVIDADES")
 * @param {string} props.promotionsLink - Link para a página de promoções
 * @param {string} props.newsLink - Link para a página de novidades
 * @param {string} props.className - Classes CSS adicionais
 * @returns {JSX.Element} Banner promocional com design moderno
 */
function PromotionBanner({
  title = "OS MELHORES COMPUTADORES DO MUNDO!",
  subtitle = "Conheça os produtos da nossa loja e aproveite as promoções",
  promotionsText = "PROMOÇÕES",
  newsText = "NOVIDADES",
  promotionsLink = "/promocoes",
  newsLink = "/novidades",
  className = ''
}) {
  return (
    <div className={`promotion-banner ${className}`}>
      <div className="banner-container">
        <div className="banner-content">
          {/* Título Principal */}
          <h1 className="banner-title">
            {title}
          </h1>
          
          {/* Subtítulo */}
          <p className="banner-subtitle">
            {subtitle}
          </p>
          
          {/* Botões de Ação */}
          <div className="banner-buttons">
            <Link 
              to={promotionsLink} 
              className="btn-promotions"
            >
              {promotionsText}
            </Link>
            
            <Link 
              to={newsLink} 
              className="btn-news"
            >
              {newsText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionBanner; 