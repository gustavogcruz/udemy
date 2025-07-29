import React from 'react';

/**
 * Componente FormCheckbox - Campo de checkbox para formulários
 * 
 * Este componente renderiza um campo de checkbox com label e integração
 * com react-hook-form. Ideal para aceitar termos, newsletters e opções
 * booleanas.
 * 
 * @component
 * @param {Object} props - Propriedades do componente
 * @param {string} props.id - ID único do campo
 * @param {string} props.label - Texto do label do checkbox
 * @param {Object} props.register - Função register do react-hook-form
 * @param {Object} props.validation - Objeto com regras de validação
 * @param {Object} props.error - Objeto de erro do react-hook-form
 * @param {string} props.className - Classes CSS adicionais
 * @returns {JSX.Element} Campo de checkbox com label
 */
function FormCheckbox({
  id,
  label,
  register,
  validation = {},
  error,
  className = ''
}) {
  return (
    <div className={`mb-3 form-check ${className}`}>
      <input
        type="checkbox"
        id={id}
        className={`form-check-input ${error ? 'is-invalid' : ''}`}
        {...register(id, validation)}
      />
      <label htmlFor={id} className="form-check-label">
        {label}
      </label>
      {error && (
        <div className="invalid-feedback">{error.message}</div>
      )}
    </div>
  );
}

export default FormCheckbox; 