import { useState } from "react";

export default function TemperatureControl({ currentTemp, onUpdate }) {
  const [temp, setTemp] = useState(currentTemp);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(temp);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <label className="font-medium">Set Building Temperature:</label>
      <input
        type="number"
        step="0.5"
        min="10"
        max="40"
        value={temp}
        onChange={(e) => setTemp(parseFloat(e.target.value))}
        className="border rounded px-2 py-1 w-20"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
      >
        Update
      </button>
    </form>
  );
}
