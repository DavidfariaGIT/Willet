function Heroimg() {
  return (
    <>
      <div className="bg-orange-50 w-full">
        <div
          className="hero min-h-200 md:max-w-150 md:mx-auto bg-orange-50 lg:max-w-240 lg:min-h-300"
          style={{
            backgroundImage: "public/assets/f3e4bec288d1545a58cb2e711d46fb7dfceae5f8-2400x3000.jpeg",
          }}>
          <h1 className="absolute left-5 top-16 text-8xl text-red-950 font-extrabold md:text-[160px] md:py-90 md:px-5 lg:text-[350px] lg:py-65">willet</h1>
        </div>
      </div>
      <div className="bg-orange-50 h-23 flex flex-row justify-start md:h-0">
        <a className="cursor-pointer pt-2 pl-6 text-red-950 font-extrabold md:text-sm md:pt-0 md:z-50 md:absolute md:bottom-20 lg:bottom-60 border-none shadow-none focus:outline-none">WT-G1</a>
        <a className="cursor-pointer pt-2 text-red-950 font-extrabold md:text-sm md:pt-0 md:z-50 md:absolute md:bottom-20 md:left-25 lg:bottom-60 border-none shadow-none focus:outline-none">Popo Dining Chair</a>
      </div>
    </>
  )
}

export default Heroimg;
