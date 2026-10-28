
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#fff' }}>
      <img src={product.image} alt={product.title} style={{ height: '150px', objectFit: 'contain', marginBottom: '12px' }} />
      <div>
        <h4 style={{ fontSize: '1rem', margin: '8px 0', height: '2.8em', overflow: 'hidden' }}>{product.title}</h4>
        <p style={{ fontWeight: 'bold', color: '#2c3e50', fontSize: '1.1rem' }}>${product.price.toFixed(2)}</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', padding: '8px 12px', border: '1px solid #007bff', color: '#007bff', borderRadius: '4px', textAlign: 'center', flex: 1 }}>
          Ver Detalle
        </Link>
        <button onClick={() => addToCart(product)} style={{ padding: '8px 12px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', flex: 1 }}>
          + Carrito
        </button>
      </div>
    </div>
  );
};