import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function index() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950 py-28">
        <div className="">
            <div className="text-center font-semibold">
                <h1 className="text-5xl">
                    <span className="text-blue-700 tracking-wide">Flexible </span>
                    <span>Plans</span>
                </h1>
                <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 pb-10 md:w-full">
                    Choose a plan that works best for you and<br/> your team.
                </p>
            </div>
            <div className="pt-24 flex flex-row">
                <div className="w-96 p-8 bg-slate-900/40 text-center rounded-3xl pr-16 shadow-xl">
                    <h1 className="text-gray-300 font-semibold text-2xl uppercase">Bronze</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">R$ </span>
                        <span className="text-3xl font-semibold">99</span>
                        <span className="text-gray-400 font-medium">/ mensal</span>
                    </p>

                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                               Plataforma de análises
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Consultor financeiro à disposição
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                2 reuniões mensais (+1 emergencial)
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Acompanhamento perosonalizado
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Conteúdo educacional
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Relatório semanal de mercado
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Carteira CVL (Fiss)
                            </span>
                        </p>

                        <a href="#" className="">
                            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span className="font-medium">
                                    Escolher Plano
                                </span>
                                <ArrowForwardIcon className='ml-2'/>
                            </p>
                        </a>
                    </div>
                </div>
    
                <div className="w-80 p-8 bg-slate-900/90  text-center rounded-3xl text-white border shadow-xl border-white/20 transform scale-125">
                    <h1 className="text-white font-semibold text-2xl">OURO</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">R$ </span>
                        <span className="text-3xl font-semibold">197</span>
                        <span className="text-gray-400 font-medium">/ mensal</span>
                    </p>
                    <div className="pt-8">
                    <p className="font-semibold text-gray-400 text-left">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                               Plataforma de análises
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Consultor financeiro à disposição
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                2 reuniões mensais (+1 emergencial)
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Acompanhamento perosonalizado
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Conteúdo educacional
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Relatório semanal de mercado
                            </span>
                        </p>
                        <p className="font-semibold  text-blue-500 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Carteira CVL (Fiss, Ações e Crypto)
                            </span>
                        </p>
                        <p className="font-semibold  text-blue-500 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Consultoria financeira pessoal
                            </span>
                        </p>
                        <p className="font-semibold  text-blue-500 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Mentoria de análise gráfica e técnica
                            </span>
                        </p>
                        <p className="font-semibold  text-blue-500 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Estratégias com opções
                            </span>
                        </p>
                        <p className="font-semibold text-blue-500 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Operações ao VIVO Day Trading
                            </span>
                        </p>

                        <a href="#" className="">
                            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span className="font-medium">
                                    Escolher Plano
                                </span>
                                <ArrowForwardIcon className='ml-2 mb-1'/>
                            </p>
                        </a>
                    </div>
                    <div className="absolute top-4 right-4">
                        <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
                    </div>
                </div>
         
                <div className="w-96 p-8 bg-slate-900/40 text-center rounded-3xl pl-16 shadow-xl">
                    <h1 className="text-gray-300 font-semibold text-2xl">PRATA</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">R$ </span>
                        <span className="text-3xl font-semibold">157</span>
                        <span className="text-gray-400 font-medium">/ mensal</span>
                    </p>
                 
                    <div className="pt-8">
                    <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Consultor financeiro à disposição
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                2 reuniões mensais (+1 emergencial)
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Acompanhamento perosonalizado
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Conteúdo educacional
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Relatório semanal de mercado
                            </span>
                        </p>
                        <p className="font-semibold text-green-500 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Carteira CVL (Fiss, Ações e Crypto)
                            </span>
                        </p>
                        <p className="font-semibold text-green-500 text-left pt-5">
                            <CheckIcon className='mb-1'/>
                            <span className="pl-2">
                                Consultoria financeira pessoal
                            </span>
                        </p>

                        <a href="#" className="">
                            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span className="font-medium">
                                   Escolher Plano
                                </span>
                                <ArrowForwardIcon className='ml-2'/>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index