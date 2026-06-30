import React, { useState, useMemo } from 'react';
import { MOCK_PRODUCTS, type Product } from './data';
import { Navbar } from './Components/Navbar';
import { FacetedSearch } from './Components/FacetedSearch';
import { ProductGrid } from './Components/ProductGrid';
import { CheckoutProcess } from './Components/CheckoutProcess';
import { SurveyModal } from './Components/SurveyModal';

export default function App() {
  const [filters, setFilters] = useState({ brand: [] as string[], cushion: [] as string[] });
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSurvey, setShowSurvey] = useState(true);
  const [cart, setCart] = useState<Product[]>([]);

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
      const cushionMatch = filters.cushion.length === 0 || filters.cushion.includes(product.cushion);
      return brandMatch && cushionMatch;
    });
  }, [filters]);

  const handleAddToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
  };

  const handleRemoveFromCart = (indexToRemove: number) => {
    setCart(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleCompleteCheckout = () => {
    setCart([]); 
    setShowCheckout(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 font-sans text-slate-900">
      <Navbar cartCount={cart.length} onCartClick={() => setShowCheckout(true)} />
      
      <main className="flex-1 container mx-auto flex flex-col md:flex-row mt-6 mb-12 bg-white rounded-xl shadow-sm overflow-hidden">
        <FacetedSearch filters={filters} setFilters={setFilters} />
        <ProductGrid products={filteredProducts} onBuy={handleAddToCart} />
      </main>

      {showCheckout && (
        <CheckoutProcess 
          cart={cart}
          removeFromCart={handleRemoveFromCart}
          onComplete={handleCompleteCheckout} 
          onCancel={() => setShowCheckout(false)} 
        />
      )}

      {showSurvey && <SurveyModal onClose={() => setShowSurvey(false)} />}
    </div>
  );
}