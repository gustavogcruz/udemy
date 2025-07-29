import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente LatestNews - Exibe as últimas notícias do blog
 * 
 * Este componente renderiza uma seção com as últimas notícias do blog da E-Tech,
 * incluindo título, descrição, data de publicação e link para ler mais.
 * 
 * @component
 * @param {Object} props - Propriedades do componente
 * @param {Array} props.news - Array de objetos contendo as notícias
 * @param {string} props.news[].id - ID único da notícia
 * @param {string} props.news[].title - Título da notícia
 * @param {string} props.news[].excerpt - Resumo da notícia
 * @param {string} props.news[].date - Data de publicação da notícia
 * @param {string} props.news[].author - Autor da notícia
 * @param {string} props.news[].image - URL da imagem da notícia
 * @param {string} props.news[].slug - Slug da notícia para o link
 * @param {number} props.maxNews - Número máximo de notícias a exibir (padrão: 3)
 * @returns {JSX.Element} Seção com as últimas notícias do blog
 */
function LatestNews({ news = [], maxNews = 3 }) {
  /**
   * Formata a data para exibição no formato brasileiro
   * 
   * @param {string} dateString - Data em formato string
   * @returns {string} Data formatada no padrão brasileiro
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // Limita o número de notícias exibidas
  const displayNews = news.slice(0, maxNews);

  return (
    <section className="latest-news mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4">Últimas do Blog</h2>
            <p className="text-muted mb-4">
              Fique por dentro das novidades, dicas e tendências do mundo da tecnologia
            </p>
          </div>
        </div>
        
        <div className="row">
          {displayNews.length > 0 ? (
            displayNews.map((article) => (
              <div className="col-md-4 mb-4" key={article.id}>
                <div className="card h-100 shadow-sm">
                  {article.image && (
                    <img
                      src={article.image}
                      className="card-img-top"
                      alt={article.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link 
                        to={`/blog/${article.slug}`} 
                        className="text-decoration-none text-dark"
                      >
                        {article.title}
                      </Link>
                    </h5>
                    <p className="card-text text-muted">
                      {article.excerpt}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        Por {article.author} • {formatDate(article.date)}
                      </small>
                      <Link 
                        to={`/blog/${article.slug}`} 
                        className="btn btn-outline-primary btn-sm"
                      >
                        Ler mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="text-center py-5">
                <h4 className="text-muted">Nenhuma notícia disponível</h4>
                <p className="text-muted">
                  Em breve teremos novidades interessantes para você!
                </p>
              </div>
            </div>
          )}
        </div>
        
        {displayNews.length > 0 && (
          <div className="row mt-4">
            <div className="col-12 text-center">
              <Link to="/blog" className="btn btn-primary">
                Ver todas as notícias
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default LatestNews; 