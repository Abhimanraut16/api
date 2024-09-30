import Products from '../../app/components/Products'
const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/amazonpro");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Home = async () => {
  const products = await getData();
  return (
    <Products products={products} />
  )
}

export default Home