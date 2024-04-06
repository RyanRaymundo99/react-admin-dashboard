import icon1 from "../../../assets/formIcons/icon1.svg"
import icon2 from "../../../assets/formIcons/icon2.svg"
import icon3 from "../../../assets/formIcons/icon3.svg"
import icon4 from "../../../assets/formIcons/icon4.svg"

import FormBg from "../../../assets/formBg.png"



function index() {
  return (
    <section class="py-10 bg-slate-950 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
            <div class="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
                <div class="flex items-start">
                    <img src={icon1} class="flex-shrink-0 w-9 h-9" />
                    <div class="ml-5">
                        <h3 class="text-xl font-semibold text-gray-300">Conhecimento <br /> e Preferências de Investimento</h3>
                        <p class="mt-3 text-base text-gray-400">Avaliação do conhecimento em investimentos, necessidades futuras de retorno e reação diante de perdas.</p>
                    </div>
                </div>

                <div class="flex items-start">
                    <img src={icon2} class="flex-shrink-0 w-9 h-9" />
                    <div class="ml-5">
                        <h3 class="text-xl font-semibold text-gray-300">Objetivos <br /> e Planos de Investimento</h3>
                        <p class="mt-3 text-base text-gray-400">Identificação dos objetivos de investimento, prazos para alcançá-los e status atual dos investimentos.</p>
                    </div>
                </div>

                <div class="flex items-start">
                    <img src={icon3} class="flex-shrink-0 w-9 h-9" />
                    <div class="ml-5">
                        <h3 class="text-xl font-semibold text-gray-300">Interesse  <br /> em Economia e Finanças</h3>
                        <p class="mt-3 text-base text-gray-400">Medição do interesse em assuntos relacionados à economia e ao mercado financeiro.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <img src={icon4} class="flex-shrink-0 w-9 h-9" />
                    <div class="ml-5">
                        <h3 class="text-xl font-semibold text-gray-300">Formulário</h3>
                        <p class="mt-3 pb-3 text-base text-gray-400">Medição do interesse em assuntos relacionados à economia e ao mercado financeiro.</p>
                        <a href="https://view.forms.app/vladsonluiz/identificacaoperfildoinvestidor" className="p-2 mt-2 rounded-lg bg-transparent text-black bg-green-400 hover:bg-green-900 ">Iniciar o Teste</a>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-3">
                <img class="w-full rounded-lg shadow-xl" src={FormBg} alt="" />
            </div>
        </div>
        
    </div>
</section>

  )
}

export default index