import logo from "../assets/img.jpg";

export default function Hero() {
  return (
    <section className="h-[650px] bg-red-100 pt-20">
      <div className="container mx-auto flex justify-around h-full">

        <div className="flex flex-col  justify-center h-full">

         <div>
            <div className="flex items-center mb-3">
              <div className="w-[35px] h-[2px] bg-black mr-3"> </div>{" "}
              <p className="font-semibold">NEW TREND</p>
            </div>
      <div className="mb-5">
         <p className="uppercase text-2xl font-normal">autumn sale & discount's</p>
      </div>
      <div>
        <p className=" uppercase font-semibold text-3xl">  accessories & furniture</p>
      </div>

      <div className="mt-6">
         <p className="font-semibold ">DISCOVER MORE</p>
         <div className="w-[120px] h-[2px] bg-black mr-3"> </div>
      </div>
          
      </div>
        </div>

        <div className="hidden lg:block">
          <img src={logo} alt="" className="" />
        </div>
      </div>
    </section>
  );
}
