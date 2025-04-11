import radiTableChair1 from './assets/radi-table-chair-1.jpeg';
import radiTableChair2 from './assets/radi-table-chair-2.jpeg';

function ImageTwo () {
  return (
    <>
    <section className="bg-orange-50 h-160 lg:h-260">
    <div className="flex w-full mt-127 md:mt-183 lg:mt-297">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center"></div>
  <img className="w-1/3" src={radiTableChair1} alt="Radi Table and Chairs" />
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
  <img className="w-2/2" src={radiTableChair2} alt="Radi Table and Chairs" /></div>
</div>
<div className="bg-orange-50 mt-54 flex flex-row justify-start">
  <a className="btn ml-60  btn-m btn-ghost text-red-950 font-extrabold md:ml-0 md:mt-30 lg:mt-117 hover:none border-none shadow-none bg-orange-50 lg:text-lg">WT-G1</a>
  <a className="btn btn-m btn-ghost text-red-950 font-extrabold md:mt-30 lg:mt-117 hover:bg-orange-50  hover:none border-none shadow-none lg:text-lg">Radi Table and Chairs
  </a>
  </div>
</section>
    </>
  )
}

export default ImageTwo;
