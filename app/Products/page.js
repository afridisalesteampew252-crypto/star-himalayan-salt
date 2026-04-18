const products = [
  { name: "Himalayan Pink Salt 1kg" },
  { name: "Pink Salt Grinder" }
];

export default function Products() {
  return (
    <div style={{padding:20}}>
      <h1>Products</h1>

      {products.map((p, i) => (
        <div key={i}>
          <h2>{p.name}</h2>
          <a href={`https://wa.me/923318484115?text=I want ${p.name}`}>
            Order
          </a>
        </div>
      ))}
    </div>
  );
                    }
