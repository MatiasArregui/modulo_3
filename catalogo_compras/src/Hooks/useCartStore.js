import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  cart: [],
  addToCart: (product) => {
    const { cart } = get();
    const existingIndex = cart.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      set({ cart: updatedCart });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },
  removeFromCart: (productId) => {
    set({ cart: get().cart.filter((item) => item.id !== productId) });
  },
  clearCart: () => set({ cart: [] }),
  getTotalItems: () => get().cart.reduce((sum, item) => sum + item.quantity, 0),
  getTotalPrice: () => get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
}));