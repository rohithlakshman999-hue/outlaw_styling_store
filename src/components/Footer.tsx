import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 pt-16 pb-8 text-white border-t border-zinc-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="heading-luxury text-2xl font-bold tracking-widest uppercase mb-6">
              Outlaw
            </h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Export Surplus Apparel. Redefining modern luxury streetwear with premium essentials and minimalist design.
            </p>
            <div className="flex space-x-6 text-sm font-semibold tracking-wider">
              <a href="#" className="text-gray-400 hover:text-white transition-luxury">
                IG
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-luxury">
                FB
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-luxury">
                X
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-wider text-sm mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/shop" className="hover:text-white transition-luxury">All Products</Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-white transition-luxury">New Arrivals</Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-white transition-luxury">Oversized</Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-white transition-luxury">Streetwear</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-wider text-sm mb-6">Help</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-white transition-luxury">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-luxury">FAQ</Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-luxury">Shipping & Returns</Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-white transition-luxury">Track Order</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-wider text-sm mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black border border-zinc-800 text-white px-4 py-2 w-full focus:outline-none focus:border-gray-500 transition-luxury text-sm"
              />
              <button
                type="button"
                className="bg-white text-black px-4 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-gray-200 transition-luxury"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} OUTLAW STYLING STUDIO. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-luxury">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-luxury">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
