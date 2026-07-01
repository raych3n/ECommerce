import type { Product } from '../data';

export const ProductGrid: React.FC<{ products: Product[], onBuy: (product: Product) => void }> = ({ products, onBuy }) => {
  return (
    <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="border border-slate-200 rounded-lg p-4 flex flex-col hover:shadow-lg transition-shadow bg-white">
          <div className="h-48 rounded flex items-center justify-center mb-4 text-slate-400">
            <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
          </div>
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="text-slate-500 text-sm mb-2">{product.brand} • {product.surface} • {product.cushion} Cushion</p>
          <p className="text-slate-700 text-sm mb-6 flex-1">{product.description}</p>
          <div className="flex justify-between items-center mt-auto">
            <span className="text-lg font-bold">${product.price}</span>
            <button 
              onClick={() => onBuy(product)}
              className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-lime-500 hover:text-slate-900 font-semibold transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
      {products.length === 0 && (
        <div className="col-span-full text-center py-12 text-slate-500">
          No shoes match your exact criteria. Try adjusting your filters!
        </div>
      )}
    </div>
  );
};