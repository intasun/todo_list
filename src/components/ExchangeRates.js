import { useEffect } from 'react';
import styled from 'styled-components';

function ExchangeRates(props) {
  const { prev, next, prevRate, curRate, nextRate, getRates, className } =
    props;

  useEffect(() => getRates(), [getRates]);

  return (
    <div className={`${className} exchange`}>
      <span> Exchange rates on {curRate.exchangedate}: </span>
      <div>
        <button type='button' className='exchange--btn' onClick={prev}>
          {`${prevRate.cc} <`}
        </button>
        <span className='exchange--info'>{` ${curRate.cc}: ${curRate.rate} `}</span>
        <button type='button' className='exchange--btn' onClick={next}>
          {`> ${nextRate.cc}`}
        </button>
      </div>
    </div>
  );
}

const StyledExchangeRates = styled(ExchangeRates)`
  font-size: 1.1em;
  width: 50%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  .exchange {
    &--info {
      font-weight: bold;
      vertical-align: bottom;
    }

    &--btn {
      width: 50px;
      height: 100%;
      margin-left: 5px;
      margin-right: 5px;
      border: none;
      color: rgb(115, 115, 253);
      font-size: 0.6em;
      font-style: italic;
      box-shadow: 2px 2px lightgrey inset, -2px -2px silver inset;

      &:active {
        box-shadow: 2px 2px silver inset, -2px -2px lightgrey inset;
      }
    }
  }
`;

export default StyledExchangeRates;
