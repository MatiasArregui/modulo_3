import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export const Navbar = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <nav style={styles.container}>
      <h2 style={{ margin: 0 }}>MiTienda</h2>
      <div style={styles.container_div}>
        <Link to="/" style={styles.link_normal}>Inicio</Link>
        <Link to="/contact" style={styles.link_normal}>Contacto</Link>
        <Link to="/cart" style={styles.link_carrito}>
          🛒 Carrito: <strong>{totalItems}</strong>
        </Link>
      </div>
    </nav>
  );
};

const styles = {
    container:{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1rem 2rem', 
        background: '#1a1a1a', 
        color: '#fff'},
    container_div: {
        display: 'flex', 
        gap: '20px', 
        alignItems: 'center'},
    link_normal: { 
        color: '#fff', 
        textDecoration: 'none' },
    link_carrito: {
         background: '#007bff', 
         padding: '6px 14px', 
         borderRadius: '20px', 
         fontSize: '0.9rem', 
         color: '#fff', 
         textDecoration: 'none', 
         display: 'flex', 
         alignItems: 'center', 
         gap: '5px' },
}