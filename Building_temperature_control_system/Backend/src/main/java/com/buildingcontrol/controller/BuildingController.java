package com.buildingcontrol.controller;

import com.buildingcontrol.model.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/building")
public class BuildingController {
    private final Building building;

    public BuildingController() {
        this.building = new Building();
    }

    @GetMapping
    public Building getBuilding() {
        return building;
    }

    @PostMapping("/temperature")
    public Building setRequestedTemperature(@RequestBody double temperature) {
        building.setRequestedTemperature(temperature);
        return building;
    }

    @PostMapping("/apartments")
    public Building addApartment(@RequestBody Apartment apartment) {
        building.addApartment(apartment);
        return building;
    }

    @PostMapping("/common-rooms")
    public Building addCommonRoom(@RequestBody CommonRoom commonRoom) {
        building.addCommonRoom(commonRoom);
        return building;
    }

    @DeleteMapping("/apartments/{id}")
    public Building removeApartment(@PathVariable String id) {
        building.removeApartment(id);
        return building;
    }

    @DeleteMapping("/common-rooms/{id}")
    public Building removeCommonRoom(@PathVariable String id) {
        building.removeCommonRoom(id);
        return building;
    }
}