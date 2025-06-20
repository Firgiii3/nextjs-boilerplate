import Image from "next/image";
import Link from "next/link";

export default function RobloxTopUp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-blue-800 text-white font-sans">
      {/* Navbar */}
      <nav className="bg-blue-900/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-yellow-400">ADUL TOP UP</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800/50 transition">
                Beranda
              </Link>
              <Link href="/check-pesanan" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800/50 transition">
                Check Pesanan
              </Link>
              <Link href="/keranjang" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800/50 transition flex items-center">
                <span>Keranjang</span>
                <span className="ml-1 bg-yellow-400 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden bg-blue-900/90 hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800/50 transition">
              Beranda
            </Link>
            <Link href="/check-pesanan" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800/50 transition">
              Check Pesanan
            </Link>
            <Link href="/keranjang" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800/50 transition flex items-center">
              <span>Keranjang</span>
              <span className="ml-1 bg-yellow-400 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Image Background */}
        <div className="relative mb-12 rounded-10xl overflow-hidden mt-6">
          {/* Image Background */}
          <div className="absolute inset-0">
            <Image
              src="/asset/header1.jpg"
              alt="Roblox Background"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            <div className="absolute inset"></div>
          </div>
          
          {/* Text Content */}
          <div className="relative py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
                 
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-yellow-300 drop-shadow-lg">

            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 pb-12">
          {/* Left Column - Steps */}
          <div className="lg:w-1/2 space-y-8">
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex gap-6 items-start">
              <div className="bg-green-400 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shrink-0">
                01
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Isi Data</h3>
                <p className="text-gray-200">
                  Klik <span className="text-yellow-300 font-semibold">'Top Up Sekarang'</span> dan masukan Username Roblox kamu
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex gap-6 items-start">
              <div className="bg-green-400 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shrink-0">
                02
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Masukan jumlah robux</h3>
                <p className="text-gray-200">
                  Masukan jumlah robux yang mau kamu beli, klik <span className="text-yellow-300 font-semibold">'Konfirmasi'</span> dan ikuti petunjuk yang diberikan
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex gap-6 items-start">
              <div className="bg-green-400 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shrink-0">
                03
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Pembayaran Berhasil</h3>
                <p className="text-gray-200">
                  Selesaikan pembayaran dengan metode pembayaran yang kamu pilih. Jika sudah berhasil, Robux bisa digunakan dalam 5 menit.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="lg:w-1/2 bg-white/10 backdrop-blur-sm rounded-xl p-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-500/30 p-4 rounded-lg">
                <p className="text-gray-300">Available Stock</p>
                <p className="text-2xl font-bold text-yellow-400">1478 R$</p>
              </div>
              <div className="bg-blue-500/30 p-4 rounded-lg">
                <p className="text-gray-300">Robux Price</p>
                <p className="text-2xl font-bold">Rp 15.000/100 R$</p>
              </div>
              <div className="bg-blue-500/30 p-4 rounded-lg">
                <p className="text-gray-300">Robux Sold</p>
                <p className="text-2xl font-bold">115.345.892 R$</p>
              </div>
              <div className="bg-blue-500/30 p-4 rounded-lg">
                <p className="text-gray-300">Minimum Purchase</p>
                <p className="text-2xl font-bold">25 R$</p>
              </div>
            </div>

            {/* Detail Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Detail Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-1">Username Roblox</label>
                  <input 
                    type="text" 
                    placeholder="Example: BelRbix123" 
                    className="w-full bg-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Jumlah Robux (R$)</label>
                  <input 
                    type="number" 
                    className="w-full bg-white/20 rounded-lg px-4 py-2 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Metode Pembayaran</h3>
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <input type="radio" id="qris" name="payment" checked />
                  <label htmlFor="qris" className="font-medium">QRIS</label>
                </div>
                <div className="bg-white p-1 rounded inline-block">
                  {/* QRIS Code Image would go here */}
                  <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-500">
                    QR Code
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Ringkasan Pembayaran</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span>Kupon Diskon:</span>
                  <input 
                    type="text" 
                    placeholder="Enter Code Here" 
                    className="bg-white/20 rounded px-2 py-1 text-sm w-40 text-white"
                  />
                </div>
                <div className="flex justify-between">
                  <span>Diskon:</span>
                  <span>Rp 0</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>Rp 0</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-yellow-400">Rp 0</span>
                </div>
              </div>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 rounded-lg transition">
                Bayar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}