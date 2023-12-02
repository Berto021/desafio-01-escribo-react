import React from 'react';
import bg from '../assets/escribo-bg.png';
import { useState } from 'react';
export const Form = () => {
  const [number, setNumber] = useState();
  const [numberArray, setNumberArray] = useState([]);
  const [result, setResult] = useState();
  const [value, setValue] = useState();
  const [showA, setShowA] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    escribo(number);
  };

  const escribo = (num) => {
    setNumberArray([]);
    setNumber('');
    for (let i = num - 1; i > 0; i--) {
      if (i % 3 === 0 || i % 5 === 0) {
        setNumberArray(numberArray.push(i));
        console.log(numberArray);
      }
    }
    console.log(numberArray);
    console.log(typeof numberArray);
    const total = numberArray.reduce((acc, value) => acc + value, 0);
    setResult(`Resultado do somatório: ${total}`);
    setShowA(`Números válidos: ${numberArray}`);
    console.log(total);
  };

  return (
    <div>
      <form className='flex flex-col justify-center items-center gap-[1rem]'>
        <label>
          <input
            className='mt-[1rem] w-[7.6rem] h-[3.2rem] rounded-[5px] p-[10px] font-bold text-[2rem] text-[#333333]'
            id='input'
            min='0'
            type='number'
            autoFocus
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </label>
        <button
          onClick={handleSubmit}
          className='w-[6rem] h-[2.5rem] bg-color-bg-button font-bold rounded-[5px] text-[1rem]'
        >
          Enviar
        </button>
      </form>
      <div className='text-[1.5rem] font-bold flex justify-center items-center flex-col mt-[1.5rem]'>
        <span className='mt-1'>{showA}</span>
        <span className=''>{result}</span>
      </div>
      <div className='flex justify-center items-center'>
        <img className='mt-[2rem] w-[95%]' src={bg} alt='' />
      </div>
    </div>
  );
};
