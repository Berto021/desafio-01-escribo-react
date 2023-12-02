import { useState } from 'react';
import './App.css';
import { Form } from './Components/Form';

function App() {
  return (
    <>
      <div className='bg-color-bg-principal min-h-screen text-color-letter-white'>
        <div className='flex justify-center items-center flex-col font-bold'>
          <h1 className='sm:text-[2rem] xl:text-[3rem] mt-[4.2rem] '>Desafio Técnico Escribo</h1>
          <p className='sm:text-[1rem]  xl:text-[2rem] font-medium mt-[0.5rem] '>Digite um número inteiro</p>
          <div className=' flex flex-col'>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
