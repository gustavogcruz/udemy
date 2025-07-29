import React from 'react';

function Sobre() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Sobre a Empresa</h1>
      <p className="lead">
        Aqui você encontra informações sobre a nossa empresa. Somos dedicados a
        fornecer as melhores soluções para nossos clientes.
      </p>

      <div className="mt-5">
        <h2>Nossa História</h2>
        <p>
          Fundada em 2024, nossa empresa nasceu da paixão por tecnologia e
          inovação. Começamos como uma pequena startup com grandes sonhos e,
          graças à confiança de nossos clientes e ao trabalho árduo de nossa
          equipe, crescemos e nos tornamos uma referência no mercado.
        </p>
      </div>

      <div className="mt-4">
        <h2>Nossa Missão</h2>
        <p>
          Nossa missão é empoderar nossos clientes, oferecendo produtos e
          serviços de alta qualidade que resolvam seus problemas e superem suas
          expectativas. Buscamos constantemente a excelência em tudo o que
          fazemos.
        </p>
      </div>

      <div className="mt-4">
        <h2>Nossos Valores</h2>
        <ul>
          <li>
            <strong>Inovação:</strong> Buscamos constantemente novas formas de
            melhorar e inovar.
          </li>
          <li>
            <strong>Compromisso com o Cliente:</strong> A satisfação de nossos
            clientes é nossa prioridade.
          </li>
          <li>
            <strong>Integridade:</strong> Agimos com honestidade e transparência em
            todas as nossas interações.
          </li>
          <li>
            <strong>Trabalho em Equipe:</strong> Acreditamos que juntos somos mais
            fortes e podemos alcançar resultados extraordinários.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sobre; 