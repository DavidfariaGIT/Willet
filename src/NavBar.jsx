import { useState } from 'react';

function Navbar() {
  const [cart, setCart] = useState(false);

  const CartClick = () => {
    setCart(true);
  }

  const CloseMenu = () => {
    setCart(false);
  }

  return (
    <>
      <div className="navbar bg-orange-50 pb-20 cursor-pointer">
        <div className="navbar-start lg:gap-25 lg:fixed lg:ml-7 lg:mt-10 lg:z-5">
          <a className="px-5 text-red-950 text-m font-extrabold md:text-lg lg:text-2xl cursor-pointer">Catalogue</a>
          <a className="px-5 text-red-950 text-m font-extrabold md:text-lg lg:text-2xl cursor-pointer">Showroom</a>
          <a className="px-5 text-red-950 text-m font-extrabold md:text-lg lg:text-2xl cursor-pointer">about</a>
          <button
            onClick={CartClick}
            className="bg-transparent border-0 p-0 cursor-pointer"
          >
            <a className="absolute text-red-950 font-extrabold md:absolute top-1.5 right-4 lg:text-2xl lg:top-3 lg:fixed cursor-pointer">cart(0)</a>
          </button>
        </div>
        <div className="navbar-end">
        </div>
      </div>

      {cart ? (
        <div className="z-50 flex justify-center md:justify-end">
          <div className="fixed top-0 z-50 bg-orange-50 p-6 min-h-screen w-full overflow-y-auto md:w-90 lg:w-200 lg:shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={CloseMenu}
                className="text-red-950 text-xl font-bold cursor-pointer bg-transparent border-0 p-0 lg:font-extrabold"
              >
                close
              </button>
              <h2 className="text-xl font-bold text-red-950 cursor-pointer lg:font-extrabold">Cart(0)</h2>
            </div>

            <div className="py-4">
              <p className="text-red-950 text-2xl font-extrabold">Your cart is empty.</p>
            </div>

            <button className="w-full mt-195 bg-red-950 text-sm font-bold text-white py-3 rounded cursor-pointer md:w-45 md:mt-279 md:ml-35 lg:mt-200 lg:ml-99 lg:w-90 focus:outline-none active:outline-none hover:bg-red-950">
              Continue shopping
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
