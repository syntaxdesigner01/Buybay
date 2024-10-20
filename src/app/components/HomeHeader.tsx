import Image from "next/image";
import React from "react";

export default function HomeHeader() {
  return (
    <section className="py-10">
      <div className="h-[400px] bg-[#EFF0ED] ">
        <div className="">
          <section className="flex flex-col lg:flex-row justify-between w-full items-center h-full">
            {/* First Aside - Text Section */}
            <aside className="flex flex-col justify-between h-[400px] py-32 w-full lg:w-[30%] px-10">
              <p>New Arrivals 2024</p>
              <div>
                <h1>The Clothing</h1>
                <h1>Collection</h1>
              </div>
              <div>
                <button>Shop now</button>
              </div>
            </aside>

            <aside className="flex flex-col justify-start items-end h-[400px] py-20 w-full lg:w-[60%] px-10 relative overflow-hidden ">
              <section className="relative left-[20vw] bottom-[-15vh]">
                <section className="relative bottom-[20vh] right-[30vw]">
                  <img
                    src={"/Ellipse 36.png"}
                    alt=""
                    width={'370px'}
                    height={'370px'}
                  />

                  <section className=" relative top-[-60vh]">
                    <section className="flex items-center gap-0 z-50">

                      <section className="relative right-[-10vw]">
                        <img
                          src={
                            "/Look_of_the_Week_-_Grey_Suit_and_Sock_Boots-removebg-preview 1.png"
                          }
                          alt=""
                          width={'260px'}
                          height={'260px'}
                        />
                      </section>

                      <section className="relative top-[7vh]">
                        <img
                          src={
                            "/Men_teal_blue_Suit__beach_wedding_suit__blue_groomsmen_Suit__Gift_For_men__Slim_Fit_Suit__wedding_suit_for_Groom__cocktail_party_men_suit_-removebg-preview 1.png"
                          }
                          alt=""
                          width={'200px'}
                          height={'200px'}
                        />
                      </section>
                    </section>
                  </section>
                </section>

                
              </section>
            </aside>
          </section>
        </div>
      </div>
    </section>
  );
}
