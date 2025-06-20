import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-blue-800 text-white font-sans">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <div className="flex items-center gap-2">
          <Image
            src="/asset/robux-icon.jpg"
            alt="Robux Icon"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-bold">TOP UP ROBLOX</h1>
        </div>
        <nav>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition">
            Login
          </button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto">
      <section className="text-center mb-16 relative bg-[url('/asset/ilustrasi-roblox.jpg')] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-black/30"></div> {/* Overlay untuk kontras */}
  <div className="relative z-10"> {/* Konten di atas gambar */}
    <div className="bg-yellow-400 text-black inline-block px-4 py-2 rounded-full font-bold mb-4">
      SPECIAL OFFER! 30% OFF
    </div>
    <h1 className="text-5xl font-bold mb-6 text-white">Buy Robux at Cheapest Price</h1>
    <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
      Instant delivery, secure payment, and 24/7 customer support for all your Roblox needs.
    </p>
    <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-xl font-bold transition shadow-lg">
      Buy Robux Now
    </button>
  </div>
</section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="bg-white-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Image 
                src="/asset/pp.jpg" 
                alt="Fast Icon"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Delivery</h3>
            <p>Get your Robux within seconds after payment</p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="bg-white-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Image 
                src="/asset/shield-icon.jpg" 
                alt="Secure Icon"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
            <p>Multiple payment methods with 100% security</p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="bg-green-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Image 
                src="/asset/24-7.jpg" 
                alt="Support Icon"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p>Our team is always ready to help you</p>
          </div>
        </section>

       <section className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
  <h2 className="text-3xl font-bold mb-6 text-center text-white">Paket Robux Populer</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { 
        amount: "400 Robux", 
        originalPrice: "$4.99", 
        discountPrice: "Rp49.900", 
        image: "/robux-400.png",
        popular: false
      },
      { 
        amount: "800 Robux", 
        originalPrice: "$9.99", 
        discountPrice: "Rp89.900", 
        image: "/robux-800.png",
        popular: true
      },
      { 
        amount: "1700 Robux", 
        originalPrice: "$19.99", 
        discountPrice: "Rp179.900", 
        image: "/robux-1700.png",
        popular: false
      },
      { 
        amount: "4500 Robux", 
        originalPrice: "$49.99", 
        discountPrice: "Rp449.900", 
        image: "/robux-4500.png",
        popular: false
      },
    ].map((item, index) => (
      <div 
        key={index} 
        className={`bg-gradient-to-b ${item.popular ? 'from-purple-600 to-blue-600' : 'from-gray-800 to-gray-900'} rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden`}
      >
        {item.popular && (
          <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-3 py-1 text-xs font-bold rounded-bl-lg">
            TERLARIS!
          </div>
        )}
        
        <div className="flex justify-center mb-4">
          <Image 
            src={item.image}
            alt={item.amount}
            width={100}
            height={100}
            className="object-contain h-24"
          />
        </div>
        
        <div className="text-2xl font-bold mb-2 text-white">{item.amount}</div>
        <div className="text-gray-300 line-through text-sm mb-1">{item.originalPrice}</div>
        <div className="text-3xl font-bold text-yellow-400 mb-4">{item.discountPrice}</div>
        
        <div className="mb-3 text-xs text-gray-300">
          Harga normal: {item.originalPrice} (~Rp{String(parseFloat(item.originalPrice.replace('$',''))*15000).toLocaleString('id-ID')})
        </div>
        
        <button className={`w-full py-3 rounded-lg font-bold transition ${item.popular ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' : 'bg-green-500 hover:bg-green-600 text-white'}`}>
          Beli Sekarang
        </button>
        
        {item.popular && (
          <div className="mt-2 text-xs text-yellow-300">
            ⭐ 500+ terjual minggu ini
          </div>
        )}
      </div>
    ))}
  </div>
  
  <div className="mt-6 text-center text-gray-300 text-sm">
    *Harga sudah termasuk PPN 11% | Pembelian instan ke akun Roblox Anda
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