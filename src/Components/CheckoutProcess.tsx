import { useState } from 'react';
import type { Product } from '../data';

const STEPS = ['Cart', 'Shipping', 'Payment', 'Confirmation'];

interface Props {
  cart: Product[];
  removeFromCart: (index: number) => void;
  onComplete: () => void;
  onCancel: () => void;
}

export const CheckoutProcess: React.FC<Props> = ({ cart, removeFromCart, onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  const nextStep = () => {
    if (currentStep === STEPS.length - 1) onComplete();
    else setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold">Secure Checkout</h2>
          <button onClick={onCancel} className="text-slate-400 hover:text-slate-900">✕ Close</button>
        </div>

        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 -translate-y-1/2"></div>
          {STEPS.map((step, index) => (
            <div key={step} className={`bg-white px-2 text-sm font-semibold ${index <= currentStep ? 'text-lime-600' : 'text-slate-400'}`}>
              {index + 1}. {step}
            </div>
          ))}
        </div>

        <div className="py-4 text-center min-h-[200px] flex items-center justify-center flex-col">
          
          {currentStep === 0 && (
            <div className="w-full">
              {cart.length === 0 ? (
                <p className="text-slate-500">Your cart is empty. Add some gear to get started!</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded" />
                        <div className="text-left">
                          <p className="font-bold">{item.name}</p>
                          <p className="text-xs text-slate-500">{item.brand}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-semibold">${item.price}</span>
                        <button 
                          onClick={() => removeFromCart(index)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-end pt-4">
                    <p className="text-xl font-bold">Total: ${cartTotal}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {currentStep === 1 && (
             <form className="w-full max-w-sm flex flex-col gap-3">
               <input type="text" placeholder="Full Name" className="w-full border border-slate-300 p-2 rounded focus:ring-lime-500" />
               <input type="text" placeholder="Street Address" className="w-full border border-slate-300 p-2 rounded focus:ring-lime-500" />
               <div className="flex gap-4">
                 <input type="text" placeholder="City" className="w-2/3 border border-slate-300 p-2 rounded focus:ring-lime-500" />
                 <input type="text" placeholder="ZIP" className="w-1/3 border border-slate-300 p-2 rounded focus:ring-lime-500" />
               </div>
             </form>
          )}

          {currentStep === 2 && (
             <form className="w-full max-w-sm flex flex-col gap-3">
               <input type="text" placeholder="Card Number" className="w-full border border-slate-300 p-2 rounded focus:ring-lime-500" />
               <div className="flex gap-4">
                 <input type="text" placeholder="MM/YY" className="w-1/2 border border-slate-300 p-2 rounded focus:ring-lime-500" />
                 <input type="text" placeholder="CVC" className="w-1/2 border border-slate-300 p-2 rounded focus:ring-lime-500" />
               </div>
             </form>
          )}

          {currentStep === 3 && (
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Order Confirmed!</h3>
              <p className="text-slate-600 mb-6">Your fresh kicks are being prepped for shipment. A confirmation email is on the way.</p>
              <div className="bg-slate-50 p-4 rounded-lg inline-block border border-slate-200">
                <p className="text-sm text-slate-500 uppercase tracking-wide">Amount Paid</p>
                <p className="text-2xl font-bold">${cartTotal}</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end pt-6 border-t mt-4">
          {currentStep === 0 && cart.length === 0 ? (
            <button onClick={onCancel} className="bg-slate-200 text-slate-700 px-6 py-2 rounded font-bold hover:bg-slate-300">
              Back to Store
            </button>
          ) : (
            <button 
              onClick={nextStep}
              className="bg-lime-500 text-slate-900 px-6 py-2 rounded font-bold hover:bg-lime-400 transition-colors"
            >
              {currentStep === 0 ? 'Proceed to Shipping' 
                : currentStep === 1 ? 'Proceed to Payment' 
                : currentStep === 2 ? 'Place Order' 
                : 'Back to Store'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};