import Image from "next/image";
import React from "react";

export default function HomeHeader() {
  return (
    <section className="py-10">
      <div className="h-[90vh] bg-[#EFF0ED]">
        <div className="">
          <section className="flex  justify-between w-full items-center h-full ">
            <section className=" flex flex-col justify-between h-[90vh] py-32  w-[30%] px-10">
              <p>New Arrivals 2024</p>

              <div>
                <h1>The Clothing</h1> <h1>Collection</h1>
              </div>

              <div>
                <button>Shop now</button>
              </div>
            </section>



            <section className="flex flex-col justify-start items-end h-[90vh] py-20  w-[60%] px-10">
           <section className="relative">
                {/* <section className="absolute top-0 right-0  left-0"> */}
                    <Image src={'/Ellipse 36.png'} alt="" width={400} height={400} />
                {/* </section> */}
           </section>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}
