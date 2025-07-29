import React from 'react';

/**
 * Componente FormTextarea - Campo de texto multilinha para formulários
 * 
 * Este componente renderiza um campo de texto multilinha com label, validação
 * de erros e integração com react-hook-form. Ideal para mensagens longas
 * e comentários.
 * 
 * @component
 * @param {Object} props - Propriedades do componente
 * @param {string} props.id - ID único do campo
 * @param {string} props.label - Texto do label do campo
 * @param {string} props.placeholder - Texto de placeholder do campo
 * @param {Object} props.register - Função register do react-hook-form
 * @param {Object} props.validation - Objeto com regras de validação
 * @param {Object} props.error - Objeto de erro do react-hook-form
 * @param {number} props.rows - Número de linhas visíveis (padrão: 4)
 * @param {string} props.className - Classes CSS adicionais
 * @returns {JSX.Element} Campo de texto multilinha com label e validação
 */
function FormTextarea({
  id,
  label,
  placeholder,
  register,
  validation = {},
  error,
  rows = 4,
  className = ''
}) {
  return (
    <div className={`mb-3 ${className}`}>
      <label htmlFor={id} className="form-label">
        {label}:
      </label>
      <textarea
        id={id}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        rows={rows}
        {...register(id, validation)}
      ></textarea>
      {error && (
        <div className="invalid-feedback">{error.message}</div>
      )}
    </div>
  );
}

export default FormTextarea; 