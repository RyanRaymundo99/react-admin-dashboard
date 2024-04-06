import Logo from "../../../assets/Logo.svg"

function Footer() {
  return (
    <footer class="bg-slate-950 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10 ">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-200">
        <img src={Logo} alt="logo" className='h-32 w-32' />
      </a>
    </div>
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-100 tracking-widest text-sm mb-3">Home</h2>
        <nav class="list-none mb-10">
          <li>
            <a href="#platform" class="text-gray-400 hover:text-gray-800">Plataforma</a>
          </li>
          <li>
            <a href="/form" class="text-gray-400 hover:text-gray-800">Vantagens</a>
          </li>

          <li>
            <a href="/form" class="text-gray-400 hover:text-gray-800">Criar Conta</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-100 tracking-widest text-sm mb-3">Perfil de Investidor</h2>
        <nav class="list-none mb-10">
          <li>
            <a href="/form" class="text-gray-400 hover:text-gray-800">Criar seu Perfil</a>
          </li>
          <li>
            <a href="/form" class="text-gray-400 hover:text-gray-800">Oque você Precisa</a>
          </li>
          <li>
            <a href="/form" class="text-gray-300 hover:text-gray-800">Criar conta</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-100 tracking-widest text-sm mb-3">Sobre nós</h2>
        <nav class="list-none mb-10">
          <li>
            <a href="/about" class="text-gray-400 hover:text-gray-800">Oque Somos?</a>
          </li>
          <li>
            <a href="/about" class="text-gray-400 hover:text-gray-800">Onde atuamos?</a>
          </li>
          <li>
            <a href="/about" class="text-gray-400 hover:text-gray-800">Como nós achar?</a>
          </li>
          <li>
            <a href="/about" class="text-gray-400 hover:text-gray-800">Social Media</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="border border-t-1 border-blue-200/20">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2024 CVL Capital —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">Made with Love by @RyanRaymundo</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer