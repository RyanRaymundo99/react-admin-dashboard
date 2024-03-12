import React, { useEffect, useState } from 'react';
import ProfileStatsBg from "../../../assets/Profilestatsbg.png";

function TypingAnimation({ text, speed, className }) {
    const [displayText, setDisplayText] = useState('');
    const [resetAnimation, setResetAnimation] = useState(false);
  
    useEffect(() => {
      let currentIndex = 0;
      let typingInterval;
      
      if (resetAnimation) {
        setDisplayText('');
        setResetAnimation(false);
      } else {
        typingInterval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayText(text.substring(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
            setTimeout(() => {
              setResetAnimation(true);
            }, 1000); // Reset after 1 second, adjust as needed
          }
        }, speed);
      }
  
      return () => clearInterval(typingInterval);
    }, [text, speed, resetAnimation]);
  
    return (
      <h2 className="text-black">
        {displayText}
      </h2>
    );
  }
  
  function Index() {
    return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${ProfileStatsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh' // Adjust this as needed
      }}
    >
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl lg:text-5xl">Contact us</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div class="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div class="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                <div class="overflow-hidden bg-transparent backdrop-blur-sm border border-gray-200/20 rounded-xl">
                    <div class="p-6">
                        <svg class="flex-shrink-0 w-10 h-10 mx-auto text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <p class="mt-6 text-lg font-medium text-gray-400">+1-316-555-0116</p>
                        <p class="mt-1 text-lg font-medium text-gray-400">+1-446-526-0117</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-transparent backdrop-blur-sm border border-gray-200/20 rounded-xl">
                    <div class="p-6">
                        <svg class="flex-shrink-0 w-10 h-10 mx-auto text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p class="mt-6 text-lg font-medium text-gray-400">contact@example.com</p>
                        <p class="mt-1 text-lg font-medium text-gray-400">hr@example.com</p>
                    </div>
                </div>

                <div class="overflow-hidden bg-transparent backdrop-blur-sm border border-gray-200/20 rounded-xl">
                    <div class="p-6">
                        <svg class="flex-shrink-0 w-10 h-10 mx-auto text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p class="mt-6 text-lg font-medium leading-relaxed text-gray-400">8502 Preston Rd. Ingle, Maine 98380, USA</p>
                    </div>
                </div>
            </div>

          <div className="mt-6 overflow-hidden bg-transparent backdrop-blur-sm border border-gray-200/20 rounded-xl">
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center text-gray-300">Send us a message</h3>

              <div className="mt-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <div className="text-base font-medium text-gray-300">Nome Completo</div>
                    <div className="mt-2.5 relative auto-typing block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                    <TypingAnimation text="Antonio Pereira" speed={100} />
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-medium text-gray-300">Email</div>
                    <div className="mt-2.5 relative auto-typing block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                    <TypingAnimation text="AntonioAlex9011@gmail.com" speed={100} />
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-medium text-gray-300">Oque você sabe sobre Investimentos?</div>
                    <div className="mt-2.5 relative auto-typing block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                    <TypingAnimation text="Ainda estou aprendendo o básico sobre investimento e finanças" speed={100} />
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-medium text-gray-300">Qual o seu Objetivo ao investir?</div>
                    <div className="mt-2.5 relative auto-typing block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                    <TypingAnimation text="Estou procurando uma forma de aumentar minha rend passivamente" speed={100} />
                    </div>
                  </div>

                  {/* More divs with auto typing */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
