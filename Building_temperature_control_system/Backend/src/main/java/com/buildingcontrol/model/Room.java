package com.buildingcontrol.model;

public abstract class Room {
    private String id;
    private double currentTemperature;
    private boolean heatingEnabled;
    private boolean coolingEnabled;

    public Room(String id) {
        this.id = id;
        this.currentTemperature = 10 + Math.random() * 30; // Random between 10-40
    }

    // Getters and setters
    public String getId() { return id; }
    public double getCurrentTemperature() { return currentTemperature; }
    public void setCurrentTemperature(double temp) { this.currentTemperature = temp; }
    public boolean isHeatingEnabled() { return heatingEnabled; }
    public void setHeatingEnabled(boolean heatingEnabled) { this.heatingEnabled = heatingEnabled; }
    public boolean isCoolingEnabled() { return coolingEnabled; }
    public void setCoolingEnabled(boolean coolingEnabled) { this.coolingEnabled = coolingEnabled; }
}