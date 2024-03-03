import React, { useState } from "react";
import { auth, provider } from "../../api/firebase";
import { signInWithPopup } from "firebase/auth";
import GoogleSignInButton from "./account/googleButton"; // Assuming GoogleSignInButton is in the same directory
import LoginBg from "../../assets/loginBg.png"

function SignIn() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user); // Set the user state upon successful sign-in
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error during Google sign-in:", error);
      });
  };

  return (
    <section className="h-screen w-screen bg-slate-950 flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
        <div className="flex items-center justify-center px-4 py-10 bg-slate-950 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl">Login do usuário</h2>
            <p className="mt-2 text-base text-gray-300">Ainda não criou sua Conta? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Preencher Perfil</a></p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-400"> Email </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="example@gmail.com"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-400"> Senha </label>

                    <a href="#" title="" className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"> Esqueceu sua senha? </a>
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="example123"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Log in</button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <GoogleSignInButton onClick={handleGoogleSignIn} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 sm:px-6 lg:px-8 relative" style={{backgroundImage: `url(${LoginBg})`}}>
          <img src={LoginBg} alt="Login Background" className="absolute inset-0 object-cover w-full h-full opacity-70" />
          <div className="absolute inset-0 flex items-end justify-end">
            <div className="w-full max-w-md mx-auto xl:max-w-xl p-6">
              <h3 className="text-2xl font-bold text-white">Design your own card</h3>
              <p className="leading-relaxed text-white mt-2.5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
              <div className="flex items-center justify-center mt-10 space-x-3">
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 p-4 text-white text-sm">Your Text Here</div>
        </div>
      </div>
    </section>
  )
}

export default SignIn;
