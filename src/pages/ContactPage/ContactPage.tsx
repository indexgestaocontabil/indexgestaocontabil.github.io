import React from 'react';
import './ContactPage.scss';

function ContactPage() {
  const onSubmit = () => {
    fetch('https://formsubmit.co/ajax/hugodeiro@gmail.com', {
      method: 'POST',
      body: JSON.stringify({
        Nome: 'Hugo Deiró',
        Mensagem: 'Blablablabla',
        Teste: 'Teste123',
        Email: 'hugodeiro@gmail.com'
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      console.log('success!');
    }).catch(() => {
      console.log('Failure!');
    });
  }

  return (
    // <form action="https://formsubmit.co/indexcontabilidade@outlook.com" method="POST">
    <div>
      <button onClick={onSubmit}>
        Enviar Teste
      </button>
    </div>
  );
}

export default ContactPage;
