function ImageOne() {
  return (
    <section className="bg-orange-50 h-188 lg:h-360">
      <div className="flex flex-row">
        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
          <img className="w-4/4" src="/src/assets/cb061929ab51d1e0bde75636b581a3eee071ba31-2400x3000.jpeg" />
        </div>
        <div className="card bg-base-300 rounded-box grid h-20 "></div>
        <img className="w-1/3" src="./assets/eb363b30e536cf875c898563a7beb1193b6367c6-2400x3000.jpeg" />
      </div>
      <div className="bg-orange-50 mt-57 flex flex-row justify-start lg:mt-0">
        <a className="btn pt-2 pl-6 btn-m btn-ghost text-red-950 font-extrabold md:text-md md:z-50 md:pt-30 md:ml-153 lg:ml-290 lg:pt-5 border-none shadow-none cursor-pointer lg:pl-0 hover:bg-orange-50">WT-G1</a>
        <a className="btn pt-2 btn-m btn-ghost text-red-950 font-extrabold md:text-md md:pt-30 lg:pt-5 border-none shadow-none cursor-pointer hover:bg-orange-50">Otto Table & Chairs
        </a>
      </div>

      <div className="bg-orange-50">
        <img
          className="max-h-200 mt-6.5 md:max-h-183 md:relative md:ml-50 lg:mt-168.5 lg:max-h-300 lg:ml-95 lg:mb-30"
          src=".git/assets/87ab0c507bf346ef6ae58ed29e845c368f4ccb1e-2400x3000.jpeg"
          alt="Product image"
        />
      </div>
      <div className="bg-orange-50">
        <div className="bg-orange-50 flex flex-row justify-start">
          <a className="btn pt-2 pl-6 btn-m btn-ghost text-red-950 font-extrabold md:text-md  md:z-50 md:relative md:bottom-12 lg:bottom-45 border-none shadow-none cursor-pointer bg-orange-50 lg:text-lg">WT-G1</a>
          <a className="btn pt-6 pb-21 btn-m btn-ghost text-red-950 font-extrabold md:text-md md:pb-0 md:pt-0 md:z-50 md:relative md:bottom-11 lg:bottom-45 border-none shadow-none cursor-pointer lg:pb-0 lg:text-lg hover:bg-orange-50">Popo Dining Chair</a>
        </div>
      </div>
    </section>
  )
};

export default ImageOne;
