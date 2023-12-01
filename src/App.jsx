import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className='bg-color-bg-principal min-h-screen text-color-letter-white'>
        <div className='flex justify-center items-center flex-col font-bold'>
          <h1 className='text-5xl mt-[4rem]'>Desafio Técnico Escribo</h1>
          <p className='text-[2rem] font-medium'>Digite um número inteiro</p>
        </div>
      </div>
    </>
  );
}

export default App;
