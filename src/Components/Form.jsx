import React from 'react';
export const Form = () => {
  return (
    <div>
      <form className='flex flex-col justify-center items-center gap-[1rem]'>
        <label for='input'>
          <input class='.input-number' id='input' min='0' autofocus type='number' />
        </label>
        <button className='w-[6rem] h-[2.5rem] bg-color-bg-button font-bold rounded-[5px] text-[1rem]'>Enviar</button>
      </form>
    </div>
  );
};
