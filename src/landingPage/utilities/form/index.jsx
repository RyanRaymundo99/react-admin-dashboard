import icon1 from "../../../assets/formIcons/icon1.svg"
import icon2 from "../../../assets/formIcons/icon2.svg"
import icon3 from "../../../assets/formIcons/icon3.svg"
import icon4 from "../../../assets/formIcons/icon4.svg"

import FormBg from "../../../assets/formBg.png"



function index() {
  return (
    <section className="py-10 bg-slate-950 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
            <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
                <div className="flex items-start">
                    <img src={icon1} className="flex-shrink-0 w-9 h-9" />
                    <div className="ml-5">
                        <h3 className="text-xl font-semibold text-gray-300">Conhecimento <br /> e Preferências de Investimento</h3>
                        <p className="mt-3 text-base text-gray-400">Avaliação do conhecimento em investimentos, necessidades futuras de retorno e reação diante de perdas.</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <img src={icon2} className="flex-shrink-0 w-9 h-9" />
                    <div className="ml-5">
                        <h3 className="text-xl font-semibold text-gray-300">Objetivos <br /> e Planos de Investimento</h3>
                        <p className="mt-3 text-base text-gray-400">Identificação dos objetivos de investimento, prazos para alcançá-los e status atual dos investimentos.</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <img src={icon3} className="flex-shrink-0 w-9 h-9" />
                    <div className="ml-5">
                        <h3 className="text-xl font-semibold text-gray-300">Interesse  <br /> em Economia e Finanças</h3>
                        <p className="mt-3 text-base text-gray-400">Medição do interesse em assuntos relacionados à economia e ao mercado financeiro.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <img src={icon4} className="flex-shrink-0 w-9 h-9" />
                    <div className="ml-5">
                        <h3 className="text-xl font-semibold text-gray-300">Formulário</h3>
                        <p className="mt-3 pb-3 text-base text-gray-400">Medição do interesse em assuntos relacionados à economia e ao mercado financeiro.</p>
                        <a href="https://view.forms.app/vladsonluiz/identificacaoperfildoinvestidor" className="p-2 mt-2 rounded-lg text-white bg-green-600 hover:bg-green-900 ">Iniciar o Teste</a>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-3">
                <img className="w-full rounded-lg shadow-xl" src={FormBg} alt="" />
            </div>
        </div>
        
    </div>
</section>

  )
}

export default index