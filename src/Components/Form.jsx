import React from 'react';
import bg from '../assets/escribo-bg.png';
export const Form = () => {
  return (
    <div>
      <form className='flex flex-col justify-center items-center gap-[1rem]'>
        <label for='input'>
          <input
            className='mt-[1rem] w-[7.6rem] h-[3.2rem] rounded-[5px] p-[10px] font-bold text-[2rem] text-[#333333]'
            id='input'
            min='0'
            type='number'
            autoFocus
          />
        </label>
        <button className='w-[6rem] h-[2.5rem] bg-color-bg-button font-bold rounded-[5px] text-[1rem]'>Enviar</button>
      </form>
      <div class='text-[1.5rem] font-bold flex justify-center items-center flex-col mt-[1.5rem]'>
        <span class='array'></span>
        <span class='result'></span>
      </div>
      <div className='flex justify-center items-center'>
        <img className='mt-[2rem] w-[95%]' src={bg} alt='' />
      </div>
    </div>
  );
};
