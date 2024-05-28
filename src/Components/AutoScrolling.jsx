import React from "react";
import { Honor, Iphone, Motorola, OnePlus, Oppo, Pixel, Realme, Samsung, Sony, Vivo, Xiamoi, Huawei } from "./Icons/Logos";

function AutoScrolling() {
  const row1 = [<Huawei />, <Iphone />, <Motorola />, <Xiamoi />, <Samsung />, <Vivo />];
  const row2 = [<Oppo />, <Realme />, <Honor />, <Sony />, <OnePlus />];

  return (
    <div className="w-screen text-black relative flex items-center justify-center">
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <div className="text-4xl font-medium mb-2 text-[#02203c]">MARCAS</div>
        <div className="flex w-[1200px] overflow-hidden select-none mask-[linear-gradient(to_right, rgba(0,0,0,0)_0%, rgba(0,0,0,1)_10%, rgba(0,0,0,1)_90%, rgba(0,0,0,0)_100%)]">
          <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full animate-[scrollX_30s_linear_infinite]">
            {row1.map((el, index) => (
              <div key={index} className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                {React.cloneElement(el, { className: "logo" })}
              </div>
            ))}
          </div>
          <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full animate-[scrollX_30s_linear_infinite]">
            {row1.map((el, index) => (
              <div key={index + row1.length} className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                {React.cloneElement(el, { className: "logo" })}
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-[1200px] overflow-hidden select-none mask-[linear-gradient(to_right, rgba(0,0,0,0)_0%, rgba(0,0,0,1)_10%, rgba(0,0,0,1)_90%, rgba(0,0,0,0)_100%)]">
          <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full animate-[scrollX_30s_linear_infinite_reverse_-3s]">
            {row2.map((el, index) => (
              <div key={index} className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                {React.cloneElement(el, { className: "logo" })}
              </div>
            ))}
          </div>
          <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full animate-[scrollX_30s_linear_infinite_reverse_-3s]">
            {row2.map((el, index) => (
              <div key={index + row2.length} className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                {React.cloneElement(el, { className: "logo" })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoScrolling;


