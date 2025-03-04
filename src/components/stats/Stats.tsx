import React from "react";
import { stats } from "./index";
import Image from "next/image";

const Stats = () => {
  return (
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
              <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <Image
                  src="/stats.png"
                  width={272}
                  height={572}
                  alt="Statistics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl mb-4">
                Transforming lives through Quran and Hadith
              </h3>
              <p className="text-gray-500 mb-8 md:text-lg lg:text-xl">
                Our platform connects users with valuable insights and guidance,
                making a meaningful impact globally.
              </p>
            </div>
            <div>
              <ul className="grid grid-cols-2 gap-6">
                {stats.map((item, idx) => (
                  <li key={idx}>
                    <h4 className="text-4xl text-[#C06318] font-semibold">
                      {item.data}
                    </h4>
                    <p className="mt-2 text-gray-600">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;