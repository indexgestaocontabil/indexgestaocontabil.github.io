import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { PARAMS, REGEX } from '../../globals';
import { getWhatsAppLink } from '../../utils/utilitary-functions';
import './ContactPage.scss';
import Ripples from 'react-ripples';

type FormType = {
  name?: string;
  email?: string; 
  phone?: string; 
  message?: string; 
};

function ContactPage() {
  const sendToFormSubmit = (
    body: string, 
    successCallback?: VoidFunction, 
    errorCallback?: VoidFunction
  ) => {
    fetch('https://formsubmit.co/ajax/hugodeiro@gmail.com', {
      method: 'POST',
      body,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => successCallback && successCallback())
      .catch(() => errorCallback && errorCallback());
  }

  const initialPayload: FormType = { 
    name: '', 
    email: '', 
    phone: '', 
    message: '' 
  };

  const onFormikValidate = (values: FormType) => {
    const errors: FormType = {};

    // Validar nome
    if (!values.name) {
      errors.name = 'Nome é um campo obrigatório!';
    }

    // Validar E-mail
    if (!values.email) {
      errors.email = 'E-mail é um campo obrigatório!';
    } else if (!REGEX.VALIDATORS.EMAIL.test(values.email)) {
      errors.email = 'E-mail inválido!';
    }

    // Validar telefone
    if (values.phone) {
      if (isNaN(Number(values.phone))) {
        errors.phone = 'Telefone deve ser composto apenas por valores numéricos!';
      } else if (![10, 11].includes(values.phone.length)) {
        errors.phone = 'Telefones devem ter entre 10 e 11 caracteres';
      }
    }

    // Validar Mensagem
    if (!values.message) {
      errors.message = 'Mensagem é um campo obrigatório!';
    }

    return errors;
  }

  return (
    <div className='contact-wrapper'>
      <Formik
        initialValues={initialPayload}
        validate={onFormikValidate}
        onSubmit={(values: FormType, { setSubmitting }) => {
          const phone = values.phone 
            ? `${values.phone} (Link para Whatsapp: ${getWhatsAppLink(values.phone)})`
            : '';

          sendToFormSubmit(
            JSON.stringify({
              Nome: values.name,
              'E-mail': values.email,
              'Telefone / WhatsApp': phone,
              Mensagem: values.message
            }), 
            () => setSubmitting(false)
          );
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className='input-field-form'>
            <div className='input-field'>
              <label htmlFor="name" className='input-field-label'>Nome*</label>
              <Field type="text" name="name" className='input-field-content'/>
              <ErrorMessage name="name" component="div" className='input-field-error' />
            </div>

            <div className='input-field'>
              <label htmlFor="email" className='input-field-label'>E-mail*</label>
              <Field type="email" name="email" className='input-field-content'/>
              <ErrorMessage name="email" component="div" className='input-field-error' />
            </div>

            <div className='input-field'>
              <label htmlFor="phone" className='input-field-label'>Telefone/WhatsApp</label>
              <Field type="tel" 
                name="phone" 
                className='input-field-content' 
                placeholder="DDD + Número" 
                minLength="10"
                maxLength="11"/>
              <ErrorMessage name="phone" component="div" className='input-field-error' />
            </div>

            <div className='input-field'>
              <label htmlFor="message" className='input-field-label'>Mensagem*</label>
              <Field as="textarea" name="message" className='input-field-content input-field-content-textarea'/>
              <ErrorMessage name="message" component="div" className='input-field-error' />
            </div>

            <Ripples
              color={PARAMS.RIPPLES_COLOR}
              className="submit-button-ripples"
            >
              <button 
                type="submit"
                className='submit-button' 
                disabled={isSubmitting || !dirty || !isValid}>
                Enviar Mensagem
              </button>
            </Ripples>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactPage;
