import React from "react";

export default function ItemListNav() {
  const feed = 1;
  const page = 1;
  const maxPage = 10;
  return (
    <>
      <div className="max-w-4xl mx-auto ">
        <div className="flex max-w-1xl justify-center">
          <div className="flex-none w-14 h-14">
            {" "}
            <span className="disabled">&lt; prev</span>
          </div>
          <div className="flex-initial w-48 justify-center">
            {" "}
            <span className="page justify-center">1/10</span>
          </div>
          <div className="flex-initial w-14 ...">
            <span className="disabled">more &gt;</span>
          </div>
        </div>
      </div>
    </>
  );
}
