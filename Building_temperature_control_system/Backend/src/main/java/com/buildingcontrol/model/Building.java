package com.buildingcontrol.model;

import java.util.ArrayList;
import java.util.List;

public class Building {
    private List<Apartment> apartments = new ArrayList<>();
    private List<CommonRoom> commonRooms = new ArrayList<>();
    private double requestedTemperature = 20.0;

    public Building() {
        // Initial setup as per requirements
        apartments.add(new Apartment("101", "Owner 101"));
        apartments.add(new Apartment("102", "Owner 102"));
        commonRooms.add(new CommonRoom("Gym1", CommonRoom.CommonRoomType.GYM));
        commonRooms.add(new CommonRoom("Library1", CommonRoom.CommonRoomType.LIBRARY));
        this.requestedTemperature = 25.0;
        updateRoomStatuses();
    }

    public void updateRoomStatuses() {
        for (Room room : getAllRooms()) {
            room.setHeatingEnabled(room.getCurrentTemperature() < requestedTemperature);
            room.setCoolingEnabled(room.getCurrentTemperature() > requestedTemperature);
        }
    }

    public List<Room> getAllRooms() {
        List<Room> allRooms = new ArrayList<>();
        allRooms.addAll(apartments);
        allRooms.addAll(commonRooms);
        return allRooms;
    }

    // Getters and setters
    public List<Apartment> getApartments() { return apartments; }
    public List<CommonRoom> getCommonRooms() { return commonRooms; }
    public double getRequestedTemperature() { return requestedTemperature; }
    
    public void setRequestedTemperature(double temp) {
        this.requestedTemperature = temp;
        updateRoomStatuses();
    }

    public void addApartment(Apartment apartment) {
        apartments.add(apartment);
        updateRoomStatuses();
    }

    public void addCommonRoom(CommonRoom commonRoom) {
        commonRooms.add(commonRoom);
        updateRoomStatuses();
    }

    public void removeApartment(String id) {
        apartments.removeIf(apt -> apt.getId().equals(id));
    }

    public void removeCommonRoom(String id) {
        commonRooms.removeIf(cr -> cr.getId().equals(id));
    }
}