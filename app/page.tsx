import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white p-8">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <div className="flex items-center gap-2">
          <Image 
            src="/robux-icon.png" 
            alt="Robux Icon"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-bold">RobloxTopUp</h1>
        </div>
        <nav>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition">
            Login
          </button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto">
        <section className="text-center mb-16">
          <div className="bg-yellow-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-4">
            SPECIAL OFFER! 30% OFF
          </div>
          <h1 className="text-5xl font-bold mb-6">Buy Robux at Cheapest Price</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Instant delivery, secure payment, and 24/7 customer support for all your Roblox needs.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-xl font-bold transition shadow-lg">
            Buy Robux Now
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Image 
                src="/lightning-icon.png" 
                alt="Fast Icon"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Delivery</h3>
            <p>Get your Robux within seconds after payment</p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="bg-purple-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Image 
                src="/shield-icon.png" 
                alt="Secure Icon"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
            <p>Multiple payment methods with 100% security</p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="bg-green-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Image 
                src="/support-icon.png" 
                alt="Support Icon"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p>Our team is always ready to help you</p>
          </div>
        </section>

        <section className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6 text-center">Popular Robux Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { amount: "400 Robux", price: "$4.99", discount: "$3.49" },
              { amount: "800 Robux", price: "$9.99", discount: "$6.99" },
              { amount: "1700 Robux", price: "$19.99", discount: "$13.99" },
              { amount: "4500 Robux", price: "$49.99", discount: "$34.99" },
            ].map((item, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-6 text-center hover:scale-105 transition">
                <div className="text-2xl font-bold mb-2">{item.amount}</div>
                <div className="text-gray-300 line-through mb-1">{item.price}</div>
                <div className="text-3xl font-bold text-yellow-400 mb-4">{item.discount}</div>
                <button className="bg-green-500 hover:bg-green-600 w-full py-2 rounded-full font-bold transition">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image 
              src="/robux-icon.png" 
              alt="Robux Icon"
              width={30}
              height={30}
            />
            <span className="font-bold">RobloxTopUp</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-300 transition">Terms</a>
            <a href="#" className="hover:text-yellow-300 transition">Privacy</a>
            <a href="#" className="hover:text-yellow-300 transition">Contact</a>
            <a href="#" className="hover:text-yellow-300 transition">FAQ</a>
          </div>
        </div>
        <p className="text-center mt-8 text-white/70">
          © 2023 RobloxTopUp. Not affiliated with Roblox Corporation.
        </p>
      </footer>
    </div>
  );
}