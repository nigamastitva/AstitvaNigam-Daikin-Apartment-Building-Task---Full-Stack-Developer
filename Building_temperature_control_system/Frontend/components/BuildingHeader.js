export default function BuildingHeader({ building }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Building Control System
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded">
          <h3 className="font-semibold text-blue-800">Requested Temperature</h3>
          <p className="text-2xl">{building.requestedTemperature}°C</p>
        </div>
        <div className="bg-green-50 p-4 rounded">
          <h3 className="font-semibold text-green-800">Apartments</h3>
          <p className="text-2xl">{building.apartments.length}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded">
          <h3 className="font-semibold text-purple-800">Common Rooms</h3>
          <p className="text-2xl">{building.commonRooms.length}</p>
        </div>
      </div>
    </div>
  );
}
