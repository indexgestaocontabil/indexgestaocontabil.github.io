import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram } from 'react-icons/fi';
import { ACCOUNTS, PARAMS } from '../../globals';
import { getWhatsAppLink, getInstagramLink } from '../../utils/utilitary-functions';
import useCustomSnackbar from '../../hooks/use-custom-snackbar';
import Hero from '../../components/Hero/Hero';
import ContactContent from './content.json';
import './ContactPage.scss';

const COMPANY_PHONE = '(71) 3599-7019';
const COMPANY_ADDRESS =
  'Hangar Business Park Torre 01 - Sala 313, Av. Luís Viana Filho - São Cristóvão, Salvador - BA, 41500-300';

type FormType = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const initialPayload: FormType = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ContactPage = () => {
  const triggerSnackbar = useCustomSnackbar();

  const sendToFormSubmit = (
    body: string,
    successCallback?: VoidFunction,
    errorCallback?: VoidFunction
  ) => {
    fetch(`https://formsubmit.co/ajax/${ACCOUNTS.email}`, {
      method: 'POST',
      body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(() => successCallback && successCallback())
      .catch(() => errorCallback && errorCallback());
  };

  const onFormikValidate = (values: FormType) => {
    const errors: FormType = {};

    if (!values.name) {
      errors.name = 'Nome é um campo obrigatório!';
    }

    if (!values.email) {
      errors.email = 'E-mail é um campo obrigatório!';
    } else if (!PARAMS.REGEX.VALIDATORS.EMAIL.test(values.email)) {
      errors.email = 'E-mail inválido!';
    }

    if (values.phone) {
      if (isNaN(Number(values.phone))) {
        errors.phone =
          'Telefone deve ser composto apenas por valores numéricos!';
      } else if (![10, 11].includes(values.phone.length)) {
        errors.phone = 'Telefones devem ter entre 10 e 11 caracteres';
      }
    }

    if (!values.message) {
      errors.message = 'Mensagem é um campo obrigatório!';
    }

    return errors;
  };

  return (
    <div className="contact-page">
      <Hero {...ContactContent.hero} />

      <section className="contact-section">
        <div className="contact-info">
          <span className="eyebrow">Contato</span>
          <h2>Fale Conosco</h2>
          <p>Estamos prontos para atendê-lo.</p>

          <ul className="contact-info-list">
            <li>
              <div className="icon-box">
                <FiMapPin />
              </div>
              <div>
                <span className="label">Endereço</span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    COMPANY_ADDRESS
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {COMPANY_ADDRESS}
                </a>
              </div>
            </li>

            <li>
              <div className="icon-box">
                <FiPhone />
              </div>
              <div>
                <span className="label">Telefone</span>
                <a
                  href={getWhatsAppLink(
                    COMPANY_PHONE.replace(/\(|\)|\s|-/g, '')
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {COMPANY_PHONE}
                </a>
              </div>
            </li>

            <li>
              <div className="icon-box">
                <FiMail />
              </div>
              <div>
                <span className="label">E-mail</span>
                <a href={`mailto:${ACCOUNTS.email}`}>{ACCOUNTS.email}</a>
              </div>
            </li>

            <li>
              <div className="icon-box">
                <FiClock />
              </div>
              <div>
                <span className="label">Horário</span>
                <span className="value">Seg-Sex: 9h às 18h</span>
              </div>
            </li>
          </ul>

          <div className="contact-info-social">
            <span className="label">Redes Sociais</span>
            <a
              href={getInstagramLink(ACCOUNTS.instagram)}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FiInstagram />
            </a>
          </div>
        </div>

        <div className="contact-form-card">
          <Formik
            initialValues={initialPayload}
            validate={onFormikValidate}
            onSubmit={(values: FormType, { setSubmitting, resetForm }) => {
              const phone = values.phone
                ? `${values.phone} \n\tLink para Whatsapp: ${getWhatsAppLink(
                    values.phone
                  )}`
                : '';

              sendToFormSubmit(
                JSON.stringify({
                  Nome: values.name,
                  'E-mail': values.email,
                  'Telefone / WhatsApp': phone,
                  Mensagem: values.message,
                }),
                () => {
                  const [firstName] = (values.name || '').split(' ');
                  const parsedFirstName = firstName ? `, ${firstName}` : '';
                  triggerSnackbar(
                    `Mensagem enviada com sucesso! Em breve entraremos em contato com você${parsedFirstName}.`
                  );
                  setSubmitting(false);
                  resetForm();
                },
                () => {
                  triggerSnackbar(
                    'Oops, não conseguimos enviar sua mensagem! Por favor, tente novamente mais tarde ou tente falar conosco via e-mail ou Telefone/WhatsApp.'
                  );
                }
              );
            }}
          >
            {({ isSubmitting, dirty, isValid }) => (
              <Form className="contact-form">
                <div className="form-row">
                  <div className="input-field">
                    <label htmlFor="name" className="input-field-label">
                      Nome*
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Seu nome"
                      className="input-field-content"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="input-field-error"
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="email" className="input-field-label">
                      E-mail*
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      className="input-field-content"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="input-field-error"
                    />
                  </div>
                </div>

                <div className="input-field">
                  <label htmlFor="phone" className="input-field-label">
                    Telefone/WhatsApp
                  </label>
                  <Field
                    type="tel"
                    name="phone"
                    className="input-field-content"
                    placeholder="DDD + Número"
                    minLength="10"
                    maxLength="11"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="input-field-error"
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="message" className="input-field-label">
                    Mensagem*
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Como podemos ajudar?"
                    className="input-field-content input-field-content-textarea"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="input-field-error"
                  />
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting || !dirty || !isValid}
                >
                  Enviar Mensagem
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
