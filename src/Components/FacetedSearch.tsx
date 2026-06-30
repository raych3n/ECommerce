import React from 'react';

interface Filters {
  brand: string[];
  cushion: string[];
}

interface Props {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export const FacetedSearch: React.FC<Props> = ({ filters, setFilters }) => {
  const handleCheckbox = (category: keyof Filters, value: string) => {
    setFilters(prev => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  return (
    <aside className="w-64 flex-shrink-0 p-6 bg-slate-50 border-r border-slate-200">
      <h2 className="text-lg font-bold mb-6 border-b pb-2">Filter Your Run</h2>
      
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-slate-700">Brand</h3>
        {['Hoka', 'Salomon', 'Saucony'].map(brand => (
          <label key={brand} className="flex items-center space-x-2 mb-2 cursor-pointer">
            <input 
              type="checkbox" 
              className="rounded text-lime-600 focus:ring-lime-500"
              checked={filters.brand.includes(brand)}
              onChange={() => handleCheckbox('brand', brand)}
            />
            <span>{brand}</span>
          </label>
        ))}
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-slate-700">Cushioning</h3>
        {['Maximum', 'Balanced', 'Responsive'].map(cushion => (
          <label key={cushion} className="flex items-center space-x-2 mb-2 cursor-pointer">
            <input 
              type="checkbox" 
              className="rounded text-lime-600 focus:ring-lime-500"
              checked={filters.cushion.includes(cushion)}
              onChange={() => handleCheckbox('cushion', cushion)}
            />
            <span>{cushion}</span>
          </label>
        ))}
      </div>
    </aside>
  );
};