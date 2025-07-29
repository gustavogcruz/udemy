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
      <h1>Contato</h1>
      <p>Entre em contato conosco através do formulário abaixo:</p>
      
      <ContactForm onSubmit={handleContactSubmit} />
    </div>
  );
}

export default Contato; 