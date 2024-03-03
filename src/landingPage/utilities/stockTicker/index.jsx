import React from 'react';
import Ticker from '../../../components/Ticker';

const FinanceComponent = () => {
  return (
    <div className='bg-gradient-to-r from-black via-slate-950 to-black'>
  <div className="flex flex-col lg:flex-row justify-between items-center px-5 lg:px-10 py-5 lg:py-10">
    <div className='pb-2 lg:pb-0 text-center lg:text-left'>
      <h1 className="text-3xl lg:text-5xl font-bold pt-2">Financial Insights</h1>
    </div>

    <div className="mt-5 lg:mt-0 lg:ml-auto text-center lg:text-left">
      <div className="text-base lg:text-2xl max-w-xs lg:max-w-2xl text-gray-300">Nossa Equipe é especializada em produtos de Renda Fixa e Variável, trazendo melhor rentabilidade e segurança para seus investimentos.</div>
    </div>
  </div>

  <div className='p-5 lg:p-10 flex justify-between items-center'>
    {/* Div on the far left side */}
    <div className="lg:hidden"></div> {/* This will be hidden on larger screens */}
    <div className="hidden lg:flex"></div> {/* This will be hidden on smaller screens */}

    {/* Ticker component */}
    <div className="flex-grow">
      <Ticker style={{ height: '300px' }} /> {/* Adjust the height here */}
    </div>

    {/* Div on the far right side */}
    <div className="lg:hidden"></div> {/* This will be hidden on larger screens */}
    <div className="hidden lg:flex"></div> {/* This will be hidden on smaller screens */}
  </div>
</div>


  );
};

export default FinanceComponent;
