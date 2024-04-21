import { useState } from "react";

export default function LabTestButton({ label, onTest }) {
  const [showConfirm, setShowConfirm] = useState(false);

  if (showConfirm) {
    return (
      <div className="fixed bg-black/70 inset-0 flex items-center h-full justify-center">
        <div className="bg-white p-4 rounded-lg">
          <div>Are you sure you want to request a test</div>
          <div className="flex gap-2 mt-1 ">
            <button type="button" onClick={() => setShowConfirm(false)}>
              Cancel
            </button>
            <button onClick={() => {onTest(); setShowConfirm(false);}} type="button" className="primary">
              Request&nbsp;Test!
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button type="button" className="bg-teal-400" onClick={() => setShowConfirm(true)}>
      {label}
    </button>
  );
}
