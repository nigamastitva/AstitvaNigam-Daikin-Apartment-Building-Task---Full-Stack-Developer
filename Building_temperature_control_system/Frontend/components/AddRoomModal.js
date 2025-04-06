import { useState } from "react";

export default function AddRoomModal({
  isOpen,
  onClose,
  onAdd,
  roomType,
  setRoomType,
}) {
  const [formData, setFormData] = useState({
    id: "",
    ownerName: "",
    type: "GYM",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roomType === "apartment") {
      onAdd({ id: formData.id, ownerName: formData.ownerName });
    } else {
      onAdd({ id: formData.id, type: formData.type });
    }
    setFormData({ id: "", ownerName: "", type: "GYM" });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Room</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Room Type:</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={roomType === "apartment"}
                onChange={() => setRoomType("apartment")}
                className="mr-2"
              />
              Apartment
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={roomType === "common-room"}
                onChange={() => setRoomType("common-room")}
                className="mr-2"
              />
              Common Room
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Room ID:</label>
            <input
              type="text"
              value={formData.id}
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
              className="border rounded w-full px-3 py-2"
              required
            />
          </div>

          {roomType === "apartment" ? (
            <div className="mb-4">
              <label className="block mb-2">Owner Name:</label>
              <input
                type="text"
                value={formData.ownerName}
                onChange={(e) =>
                  setFormData({ ...formData, ownerName: e.target.value })
                }
                className="border rounded w-full px-3 py-2"
                required
              />
            </div>
          ) : (
            <div className="mb-4">
              <label className="block mb-2">Common Room Type:</label>
              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="border rounded w-full px-3 py-2"
              >
                <option value="GYM">Gym</option>
                <option value="LIBRARY">Library</option>
                <option value="LAUNDRY">Laundry</option>
              </select>
            </div>
          )}

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
