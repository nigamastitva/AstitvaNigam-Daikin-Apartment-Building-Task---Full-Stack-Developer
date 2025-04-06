"use client";
import { useState, useEffect } from "react";
import BuildingHeader from "../components/BuildingHeader";
import RoomCard from "../components/RoomCard";
import AddRoomModal from "../components/AddRoomModal";
import TemperatureControl from "../components/TemperatureControl";

export default function Home() {
  const [building, setBuilding] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomType, setRoomType] = useState("apartment");

  useEffect(() => {
    fetchBuildingData();
  }, []);

  const fetchBuildingData = async () => {
    const response = await fetch("/api/building");
    const data = await response.json();
    setBuilding(data);
  };

  const updateTemperature = async (newTemp) => {
    const response = await fetch("/api/building/temperature", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTemp),
    });
    const data = await response.json();
    setBuilding(data);
  };

  const addRoom = async (room) => {
    const endpoint = roomType === "apartment" ? "apartments" : "common-rooms";
    const response = await fetch(`/api/building/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(room),
    });
    const data = await response.json();
    setBuilding(data);
    setIsModalOpen(false);
  };

  const removeRoom = async (id, type) => {
    const endpoint = type === "apartment" ? "apartments" : "common-rooms";
    const response = await fetch(`/api/building/${endpoint}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    setBuilding(data);
  };

  if (!building)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <BuildingHeader building={building} />

        <div className="flex justify-between items-center mb-6">
          <TemperatureControl
            currentTemp={building.requestedTemperature}
            onUpdate={updateTemperature}
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Room
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {building.apartments.map((apartment) => (
            <RoomCard
              key={apartment.id}
              room={apartment}
              type="apartment"
              onRemove={removeRoom}
            />
          ))}
          {building.commonRooms.map((commonRoom) => (
            <RoomCard
              key={commonRoom.id}
              room={commonRoom}
              type="common-room"
              onRemove={removeRoom}
            />
          ))}
        </div>
      </div>

      <AddRoomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addRoom}
        roomType={roomType}
        setRoomType={setRoomType}
      />
    </div>
  );
}
