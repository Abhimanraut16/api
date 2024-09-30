import Link from "next/link";
import React from "react";

function Notfound() {
  return (
    <div className="py-10 flex flex-col justify-center items-center">
      <p>your page is not found</p>
      <Link href={'/Home'} className="border-b-[1px] border-b-gray-950 mt-2" >
      Back to home
      </Link>

    </div>
  )

}

export default Notfound;
