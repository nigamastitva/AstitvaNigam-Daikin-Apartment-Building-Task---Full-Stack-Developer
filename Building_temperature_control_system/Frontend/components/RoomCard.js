export default function RoomCard({ room, type, onRemove }) {
  const getRoomSpecificInfo = () => {
    if (type === "apartment") {
      return <p className="text-sm">Owner: {room.ownerName}</p>;
    } else {
      return <p className="text-sm">Type: {room.type.toLowerCase()}</p>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg">{room.id}</h3>
        <button
          onClick={() => onRemove(room.id, type)}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>

      <div className="mt-2">
        <p className="text-2xl font-bold">
          {room.currentTemperature.toFixed(1)}°C
        </p>
        {getRoomSpecificInfo()}
      </div>

      <div className="mt-4 flex space-x-4">
        <div
          className={`px-3 py-1 rounded-full text-sm ${
            room.heatingEnabled
              ? "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          Heating: {room.heatingEnabled ? "ON" : "OFF"}
        </div>
        <div
          className={`px-3 py-1 rounded-full text-sm ${
            room.coolingEnabled
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          Cooling: {room.coolingEnabled ? "ON" : "OFF"}
        </div>
      </div>
    </div>
  );
}
