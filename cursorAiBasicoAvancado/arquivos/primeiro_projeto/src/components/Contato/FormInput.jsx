import React from 'react';

/**
 * Componente FormInput - Campo de entrada reutilizável para formulários
 * 
 * Este componente renderiza um campo de entrada com label, validação de erros
 * e integração com react-hook-form. Suporta diferentes tipos de input
 * como text, email, tel, etc.
 * 
 * @component
 * @param {Object} props - Propriedades do componente
 * @param {string} props.id - ID único do campo
 * @param {string} props.label - Texto do label do campo
 * @param {string} props.type - Tipo do input (text, email, tel, etc.)
 * @param {string} props.placeholder - Texto de placeholder do campo
 * @param {Object} props.register - Função register do react-hook-form
 * @param {Object} props.validation - Objeto com regras de validação
 * @param {Object} props.error - Objeto de erro do react-hook-form
 * @param {string} props.className - Classes CSS adicionais
 * @returns {JSX.Element} Campo de entrada com label e validação
 */
function FormInput({
  id,
  label,
  type = 'text',
  placeholder,
  register,
  validation = {},
  error,
  className = ''
}) {
  return (
    <div className={`mb-3 ${className}`}>
      <label htmlFor={id} className="form-label">
        {label}:
      </label>
      <input
        type={type}
        id={id}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder}
        {...register(id, validation)}
      />
      {error && (
        <div className="invalid-feedback">{error.message}</div>
      )}
    </div>
  );
}

export default FormInput; 