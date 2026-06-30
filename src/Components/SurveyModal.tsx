import React, { useState } from 'react';

export const SurveyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-xl border border-slate-200 w-80 z-50">
      {!submitted ? (
        <>
          <h3 className="font-bold text-lg mb-2">How did we pace? 🏃</h3>
          <p className="text-sm text-slate-600 mb-4">
            We’d love to hear how your browsing experience felt today so we can keep improving your journey!
          </p>
          <textarea 
            className="w-full border border-slate-300 rounded p-2 text-sm mb-3 focus:ring-lime-500"
            rows={3}
            placeholder="Tell us about your experience..."
          ></textarea>
          <div className="flex justify-end gap-2">
            <button onClick={onClose} className="text-slate-500 text-sm hover:text-slate-900">Skip</button>
            <button 
              onClick={() => setSubmitted(true)}
              className="bg-slate-900 text-white px-4 py-1.5 rounded text-sm hover:bg-lime-500 hover:text-slate-900 font-semibold"
            >
              Submit Feedback
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-4">
          <p className="font-bold text-lime-600 mb-2">Thanks for the feedback!</p>
          <p className="text-sm text-slate-600 mb-4">Enjoy your next run.</p>
          <button onClick={onClose} className="bg-slate-900 text-white px-4 py-1.5 rounded text-sm">Close</button>
        </div>
      )}
    </div>
  );
};