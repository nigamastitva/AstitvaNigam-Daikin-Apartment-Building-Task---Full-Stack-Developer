package com.buildingcontrol.model;

public class CommonRoom extends Room {
    public enum CommonRoomType { GYM, LIBRARY, LAUNDRY }
    
    private CommonRoomType type;

    public CommonRoom(String id, CommonRoomType type) {
        super(id);
        this.type = type;
    }

    public CommonRoomType getType() { return type; }
    public void setType(CommonRoomType type) { this.type = type; }
}