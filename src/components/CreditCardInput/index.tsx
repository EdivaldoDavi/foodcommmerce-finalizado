import React from 'react';
import NumberFormat from 'react-number-format';

const CreditCardInput = () => {
  // Função para formatar a máscara do cartão de crédito
  const formatCreditCardNumber = (value) => {
    const cleanValue = value.replace(/\s+/g, ''); // Remover espaços em branco
    let formattedValue = '';

    // Definir a máscara com base na quantidade de dígitos
    if (cleanValue.length <= 14) {
      formattedValue = cleanValue.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    } else if (cleanValue.length <= 15) {
      formattedValue = cleanValue.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    } else {
      formattedValue = cleanValue.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    }

    return formattedValue.trim();
  };

  return (
    <NumberFormat
      format={formatCreditCardNumber}
      placeholder="Digite o número do cartão de crédito"
      allowEmptyFormatting={false}
      mask="_"
    />
  );
};

export default CreditCardInput;
