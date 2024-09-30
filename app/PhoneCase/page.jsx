import Products from '../../app/components/Products'
const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phonecase");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const PhoneCase = async () => {
  const products = await getData();
  return (
    <Products products={products} />
  )
}

export default PhoneCase