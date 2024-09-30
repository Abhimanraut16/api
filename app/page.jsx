import Products from './components/Products'
const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

// export const getSingleProduct = async (_id: number) => {
//   const item = await getData();
//   const singleItem = await item.find((product: any) => product._id === _id);
//   return singleItem;
// };

export default async function Home() {
  const products = await getData();

  console.log(products)


  return (
    <main>
      <Products products={products} />
    </main>
  );
}
