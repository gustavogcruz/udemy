import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormCheckbox from './FormCheckbox';

/**
 * Componente ContactForm - Formulário de contato completo
 * 
 * Este componente renderiza um formulário de contato completo utilizando
 * react-hook-form para validação e gerenciamento de estado. Inclui campos
 * para nome, email, telefone, mensagem e checkbox para newsletter.
 * 
 * @component
 * @param {Object} props - Propriedades do componente
 * @param {Function} props.onSubmit - Função chamada quando o formulário é enviado
 * @param {string} props.className - Classes CSS adicionais
 * @returns {JSX.Element} Formulário de contato completo
 */
function ContactForm({ onSubmit, className = '' }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   * Função que processa o envio do formulário
   * 
   * @param {Object} data - Dados do formulário
   */
  const handleFormSubmit = (data) => {
    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log(data);
      alert('Contato enviado com sucesso!');
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={className}>
      <FormInput
        id="name"
        label="Nome"
        type="text"
        register={register}
        validation={{ required: 'O nome é obrigatório' }}
        error={errors.name}
      />

      <FormInput
        id="email"
        label="E-mail"
        type="email"
        register={register}
        validation={{
          required: 'O e-mail é obrigatório',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Endereço de e-mail inválido',
          },
        }}
        error={errors.email}
      />

      <FormInput
        id="phone"
        label="Telefone"
        type="tel"
        placeholder="(11) 99999-9999"
        register={register}
        validation={{
          required: 'O telefone é obrigatório',
          pattern: {
            value: /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/,
            message: 'Formato de telefone inválido',
          },
        }}
        error={errors.phone}
      />

      <FormTextarea
        id="message"
        label="Mensagem"
        placeholder="Digite sua mensagem aqui..."
        register={register}
        validation={{ required: 'A mensagem é obrigatória' }}
        error={errors.message}
        rows={5}
      />

      <FormCheckbox
        id="newsletter"
        label="Concordo em receber newsletters e ofertas promocionais por e-mail"
        register={register}
        error={errors.newsletter}
      />

      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}

export default ContactForm; 