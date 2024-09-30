// import React from 'react';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';

// const SingleProductPage = async ({ searchParams }) => {
//   const { id } = searchParams;

//   if (!id) {
//     return notFound();
//   }

//   try {
//     const res = await fetch(`https://jsonserver.reactbd.com/amazonpro/products/${id}`);

//     if (!res.ok || !res.headers.get('content-type')?.includes('application/json')) {
//       throw new Error('Failed to fetch product data or invalid response');
//     }

//     const product = await res.json();

//     if (!product) {
//       return notFound();
//     }

//     return (
//       <div>
//         <h1>Single Product Page</h1>
//         <div>
//           <Image src={product.image} alt={product.title} width={500} height={500} />
//           <h2>{product.title}</h2>
//           <p>{product.description}</p>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error(error);
//     return <div>Failed to load product data. Please try again later.</div>;
//   }
// };

// export default SingleProductPage;


'use client';
import Image from "next/image";

import { getSingleProduct } from "../helpers";

const SingleProduct = async ({ searchParams }) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);

  const product = await getSingleProduct(_id);

  return (
    <div className="max-w-sreen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10 ">

      <div className="border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300">
        <Image src={product.image} alt={product.title} width={500} height={500} />
    
        <div className="px-4 pb-2 text-sm flex flex-col gap-1">

          <p className="text-gray-600 "  >{product.title}</p>
          <p className="font-semibold" >Price: ${product.price}</p>
          <div className="flex items-center justify-between">
            <button>Add to Cart</button>
            <button className="uppercase text-xs font-semibold hover:text-blue-700 duration-200">More info</button>

          </div>

        </div>
      </div>

    </div>
  );
}

export default SingleProduct;




// <div className="max-w-sreen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10 ">

//   {products.map((product) => (
//     <Link href={{ pathname: "/SingleProduct", query: { _id: product?._id } }} key={product._id} className="product-card">


//       <div className="border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300">
//         <Image src={product.image} alt={product.title} width={500}
//           height={500} className="w-full h-80 object-cover" />
//         <div className="px-4 pb-2 text-sm flex flex-col gap-1">

//           <p className="text-gray-600 "  >{product.title}</p>

   
//           <p className="font-semibold" >Price: ${product.price}</p>
//           <div className="flex items-center justify-between">
//             <button>Add to Cart</button>
//             <button className="uppercase text-xs font-semibold hover:text-blue-700 duration-200">More info</button>

//           </div>
//         </div>
//       </div>


//     </Link>
//   ))}


// </div>






// import React from 'react';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';


// const SingleProductPage = async ({ searchParams }) => {
//   const { id } = searchParams;

//   if (!id) {
//     return notFound();
//   }

//   const res = await fetch(`https://jsonserver.reactbd.com/amazonpro/products/${id}`);
//   const product = await res.json();

//   if (!product) {
//     return notFound();
//   }

//   return (
//     <div>
//       <h1>Single Product Page</h1>
//       <div>
//         <Image src={product.image} alt={product.title} width={500} height={500} />
//         <h2>{product.title}</h2>
//         <p>{product.description}</p>
//       </div>
//     </div>
//   );
// };

// export default SingleProductPage;







// import React from 'react';
// import Image from 'next/image';

// const SingleProductPage = async ({ searchParams }) => {


//   const _id = Number(_idString)
//   const product = await searchParams(_id)

//   return (
//     <div>
//       <h1>Single Product Page</h1>
//    {searchParams && (

//         <Image src={product?.image } />
//       )}
//     </div>
//   );
// };

// export default SingleProductPage;




// import React from 'react';

// type Props = {
//   searchParams: { [key: string]: string | string[] | undefined }
// };

// const SingleProductPage: React.FC<Props> = ({ searchParams }) => {
//   return <div>Single Product Page</div>;
// };

// export default SingleProductPage;





// import React from 'react'


// const SingleProductPage = () => {
//   return (
//     <div>SingleProductPage</div>
//   )
// }



// export default SingleProductPage