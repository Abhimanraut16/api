'use client';
import Image from "next/image";
import Link from "next/link";

function Products({ products }) {
  return (
    <div className="max-w-sreen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10 ">

      {products.map((product) => (
        <Link href={{ pathname: "/SingleProduct", query: { _id: product?._id } }} key={product._id} className="product-card">
          <div className="border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300">
            <Image src={product.image} alt={product.title} width={500}
              height={500} className="w-full h-80 object-cover" />
            <div className="px-4 pb-2 text-sm flex flex-col gap-1">

              <p className="text-gray-600 "  >{product.title}</p>

              {/* <p>{product.description}</p> */}
              <p className="font-semibold" >Price: ${product.price}</p>
              <div className="flex items-center justify-between">
                <button>Add to Cart</button>
                <button className="uppercase text-xs font-semibold hover:text-blue-700 duration-200">More info</button>

              </div>

              {/* {product.previousPrice && <p>Previous Price: ${product.previousPrice}</p>} */}
              {/* {product.isNew && <span>New Arrival!</span>} */}
              {/* <p>Category: {product.category}</p> */}
              {/* <p>Brand: {product.brand}</p> */}
            </div>
          </div>
        </Link>
      ))}

      
    </div>
  );
}

export default Products;
