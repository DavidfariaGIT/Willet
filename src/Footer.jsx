import { useState } from 'react';

function Footer() {
  const [showTradeOverlay, setShowTradeOverlay] = useState(false);

  const toggleTradeOverlay = () => {
    setShowTradeOverlay(!showTradeOverlay);
  };

  return (
    <>
      <footer>
        <div className="flex footer_container bg-orange-50 md:h-100 lg:mt-20">
          <ul className="flex flex-col ml-3 md:mt-140 md:ml-13 lg:mt-170">
            <li><a className="text-red-950 text-sm font-extrabold">Catalogue</a></li>
            <li><a className="text-red-950 text-sm font-extrabold">Showroom</a></li>
            <li><a className="text-red-950 text-sm font-extrabold">About</a></li>
          </ul>

          <div className="text-xs font-semibold ml-35 md:flex md:flex-row md:mt-141 md:gap-10 md:w-80 lg:mt-175 lg:gap-40 lg:w-220 lg:ml-125 lg:z-10">
            <ul className="text-red-950">
              <li>
                <a
                  className="cursor-pointer hover:underline"
                  onClick={toggleTradeOverlay}
                >
                  trade account
                </a>
              </li>
              <li><a>custom</a></li>
              <li><a>lead times & shipping</a></li>
              <li><a>care guide</a></li>
            </ul>

            <ul className="text-red-950 mt-14 md:mt-0">
              <li><a>privacy policy</a></li>
              <li><a>terms of service</a></li>
            </ul>

            <div className="text-red-950 mt-14 md:mt-0">
              <p>Instagram</p>
              <a>@willett</a>
              <div className="mt-12 md:mt-0 md:ml-35 md:absolute md:top-904 w-30 lg:mt-531 lg:ml-58 lg:w-40">
                <p>sign up for our newsletter</p>
                <input className="border-none" type="text" placeholder="enter your email" />
              </div>
            </div>
          </div>
        </div>
        <h1 className="pl-4 bg-orange-50 font-extrabold text-red-950 text-[140px] md:text-[110px] md:pb-30 md:pl-12 lg:text-[220px] lg:z-0">willett</h1>
      </footer>


      {showTradeOverlay && (
        <div className="fixed inset-0 bg-amber-950 z-50 overflow-y-auto">
          <button
            onClick={toggleTradeOverlay}
            className="sticky top-6 left-6 text-white font-bold text-xl ml-6 mt-6"
          >
            menu
          </button>
          <div className="text-white p-6 mt-20 lg:mt-35">
            <h2 className="text-4xl font-extrabold mb-40 lg:absolute lg:left-13 lg:text-6xl">Willett</h2>
            <div className=" flex flex-col lg:ml-140 lg:w-270">
            <hr className="pb-4"/>
            <p className="font-semibold text-sm px-10 mb-8">Trade Account</p>
            <p className="w-117 px-10 font-semibold text-sm">
              To sign up for a trade account, please fill out the fields below. Trade discount percentages may vary based on items of interest.
            </p>
            <form className="flex flex-col mt-10 px-10 gap-4">
              <label className="">Name
                <input
                  id="Name"
                  type="email"
                  placeholder="Enter Name"
                  className="p-2 w-full max-w-md bg-transparent border border-white text-white placeholder-white mt-1 md:ml-10"
                />
              </label>
              <label>Email
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="p-2 w-full max-w-md bg-transparent border border-white text-white placeholder-white mt-1 md:ml-11"
                />
              </label>
              <label>Interest
                <input
                  type="text"
                  placeholder="items you are Interesred in"
                  className="p-2 w-full max-w-md bg-transparent border border-white text-white placeholder-white mt-1 md:ml-7"
                />
              </label>
              <button className="mt-4 bg-white text-amber-950 px-2 py-2 text-left text-sm font-semibold">
                inquire
              </button>
            </form>
            <hr className="mt-12" />
            <div className="px-10">
              <h3 className="py-3 text-sm font-semibold">Custom Pieces</h3>
              <p className="font-semibold text-sm py-4">Willett offers custom design services for furniture and spaces. Note: certain in-line pieces are also available for customization.</p>
              <form className="flex flex-col mt-10 gap-4">
                <label>Name
                  <input
                    id="Name"
                    type="email"
                    placeholder="Enter Name"
                    className="p-2 w-full max-w-md bg-transparent border border-white text-white placeholder-white mt-1 md:ml-10"
                  />
                </label>
                <label>Email
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="p-2 w-full max-w-md bg-transparent border border-white text-white placeholder-white mt-1 md:ml-11"
                  />
                </label>
                <label>Interest
                  <input
                    type="text"
                    placeholder="items you are Interesred in"
                    className="p-2 w-full max-w-md bg-transparent border border-white text-white placeholder-white mt-1 md:ml-7"
                  />
                </label>
                <button className="mt-4 bg-white text-amber-950 px-2 py-2 text-left text-sm font-semibold mb-16">
                  inquire
                </button>
              </form>
            </div>
            <hr />
            <p className="text-sm font-semibold py-2 px-10">Care Guide</p>
            <p className="text-sm font-semibold py-5 px-10 underline">Download Care Guide</p>
            <hr className="mt-10"/>
            <p className="text-sm font-semibold px-10 pt-3">Shipping, Lead Times, and Payment</p>
            <p className="text-sm font-semibold px-10 pt-6">Please allow 8-10 weeks from the time of your order for items to be built. Shipping time and cost will be determined based on item size/weight and distance. An estimated shipping cost can be calculated once destination is known. Willett uses personalized and custom shipping partners.</p>
            <p className="text-sm font-semibold px-10 pt-13">We accept checks, wire transfers, ACH payments, and credit cards. Please note that there is a 3% processing fee for all credit card transactions. All transactions are secured and encrypted. Prices shown do not include applicable taxes, shipping, or handling charges. Taxes will be calculated and added during the checkout.</p>
            <p className="text-sm font-semibold px-10 pt-12">Local Los Angeles pick up available.</p>
            <p className="text-sm font-semibold mb-10 px-10 pt-12">International shipping is not available at this time.</p>
          </div>
        </div>
        </div>
      )}
    </>
  );
}

export default Footer;
