import React, { ElementType } from "react";

export default function PageTitle({
  firstLine,
  secondLine,
  element = "h2",
}: {
  firstLine: string;
  secondLine: string;
  element?: ElementType;
}) {
  return (
    <div>
      {React.createElement(
        element,
        { className: " text-white" },
        <span className="block text-2xl font-inter font-bold">
          {firstLine}
        </span>,
        <span className="block text-5xl md:text-6xl font-spacemono md:tracking-mono-6xl">
          {secondLine}
        </span>
      )}
      {/* <h2 className=" text-white">
        <span className="block text-2xl font-inter font-bold">{firstLine}</span>
        <span className="block text-5xl md:text-6xl font-spacemono md:tracking-mono-6xl">
          {secondLine}
        </span>
      </h2> */}
      <div className="w-full md:w-96 h-1 text-white bg-gradient-to-l from-blue-800 to-sky-400 rounded-md md:ml-16 mt-4 "></div>
    </div>
  );
}
