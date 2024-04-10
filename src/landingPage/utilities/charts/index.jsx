
import Chart1 from '../../../assets/Chart1.mp4';
import Charts2 from '../../../assets/Charts2.mp4';
import Charts3 from '../../../assets/Charts3.mp4';



const Grids = () => {
  return (
    <section className="bg-slate-950 2xl:py-24" id='platform'>
    <div className="px-4 mx-auto bg-slate-950 border-gray-200/20 border max-w-7xl sm:px-6 lg:px-8 2xl:rounded-xl mb-10">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:order-2 2xl:-mr-52">
                  <video className="w-full shadow-xl rounded-xl" autoPlay loop muted>
                    <source src={Chart1} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                </div>

                <div className="lg:order-1">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-snug">Gráfico Avançado <br className="hidden xl:block" />responsivo com Tooltip</h2>

                    <ul className="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-white"> Indicadores Personalizáveis </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-white"> Ferramentas de Desenho </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-white"> Dados em Tempo Real </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-white"> Replay de Mercado </span>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-white"> Mobile Friendly </span>
                        </li>
                    </ul>

                    <div className="flex flex-col items-start mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12">
                        <a href="form" title="" className="inline-flex items-center justify-center px-4 py-4 mt-5 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-white/20 rounded-lg sm:mt-0 hover:bg-white hover:text-black" role="button"> Criar Conta </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="px-4 mx-auto bg-slate-950 border-gray-200/20 border max-w-7xl sm:px-6 lg:px-8 2xl:rounded-xl mb-10">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:order-2 2xl:-mr-52">
                  <video className="w-full shadow-xl rounded-xl" autoPlay loop muted>
                      <source src={Charts2} type="video/mp4" />
                        Your browser does not support the video tag.
                  </video>
                </div>

                <div className="lg:order-1">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-snug">Mapa de Calor de Criptomoedas</h2>

                    <ul className="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-white"> Análise de Volume e Volatilidade </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-white"> Indicadores de Desempenho Relativo </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-white"> Análise Comparativa de Desempenho </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-white"> Detalhes e Contexto sobre os Eventos </span>
                        </li>
                    </ul>

                    <div className="flex flex-col items-start mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12">
                        <a href="form" title="" className="inline-flex items-center justify-center px-4 py-4 mt-5 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-white/20 rounded-lg sm:mt-0 hover:bg-white hover:text-black" role="button"> Saber mais </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="px-4 mx-auto bg-slate-950 border-gray-200/20 border max-w-7xl sm:px-6 lg:px-8 2xl:rounded-xl">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:order-2 2xl:-mr-52">
                  <video className="w-full shadow-xl rounded-xl" autoPlay loop muted>
                      <source src={Charts3} type="video/mp4" />
                        Your browser does not support the video tag.
                  </video>
                </div>

                <div className="lg:order-1">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-snug">Abas e Gráficos Interativos <br className="hidden xl:block" />com Mercado Mundial</h2>

                    <ul className="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-white"> Notícias em Tempo Real </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-white"> Ações de Mercados Globais </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-white"> Pesquisa Avançada de Ações </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-white"> Análise Comparativa de Desempenho </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-white"> Gráficos Interativos </span>
                        </li>
                    </ul>

                    <div className="flex flex-col items-start mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12">
                        <a href="form" title="" className="inline-flex items-center justify-center px-4 py-4 mt-5 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-white/20 rounded-lg sm:mt-0 hover:bg-white hover:text-black" role="button"> Conhecer </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  );
};

export default Grids;
