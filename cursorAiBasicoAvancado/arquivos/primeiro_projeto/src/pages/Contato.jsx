import React from 'react';
import ContactForm from '../components/Contato/ContactForm';

/**
 * Página Contato - Página de contato da aplicação
 * 
 * Esta página renderiza a seção de contato com um formulário completo
 * para que os usuários possam entrar em contato com a empresa.
 * 
 * @component
 * @returns {JSX.Element} Página de contato com formulário
 */
function Contato() {
  /**
   * Função que processa o envio do formulário de contato
   * 
   * @param {Object} data - Dados do formulário enviado
   */
  const handleContactSubmit = (data) => {
    console.log('Dados do formulário:', data);
    alert('Contato enviado com sucesso!');
  };
  
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Contato</h1>
      <p className="lead">
        Entre em contato conosco através do formulário abaixo:
      </p>
      
      <div className="mt-5">
        <ContactForm onSubmit={handleContactSubmit} />
      </div>
    </div>
  );
}

export default Contato; 