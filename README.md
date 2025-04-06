Apartment Building Control System - Assumptions & Design Decisions
Key Assumptions
Backend Implementation

    Room Temperature Initialization

        Assumed random temperature between 10-40°C should be a double/float value

        Implemented using 10 + Math.random() * 30 which gives a range of 10.0-40.0

    Building Requested Temperature

        Default set to 20.0°C as specified

        Initial override to 25.0°C implemented in the Building constructor

    Heating/Cooling Logic

        Interpreted "below requested temperature" as strictly less than (<)

        Interpreted "above requested temperature" as strictly greater than (>)

        At exactly the requested temperature, both heating and cooling remain off

    Room Identification

        Used simple String IDs for rooms (e.g., "101", "Gym1")

        Assumed these would be unique within a building

Frontend Implementation

    Room Display

        Assumed all rooms should be visible in a grid layout

        Used card components for each room type with color-coded status indicators

    Temperature Control

        Limited input range to 10-40°C to match backend temperature constraints

        Used 0.5°C increments for temperature adjustments

    Form Validation

        Assumed all fields should be required when adding new rooms

        Basic client-side validation implemented

Ambiguous Requirements & Interpretations

    "Initially a rooms temperature should be a random value between 10 degrees and 40 degrees"

        Could be interpreted as:
        a) Random integer values only
        b) Floating point values (implemented this way)

        Chose floating point for more realistic temperature simulation

    "If the room temperature is below the requested building temperature, heating should be enabled"

        Could be interpreted as:
        a) Below or equal to (<=)
        b) Strictly below (<) (chose this implementation)

        More energy-efficient approach with strict comparison

    Building Composition

        Requirement states "can have 0 or more Apartments and/or 0 or more Common Rooms"

        Interpreted this to mean a building must have at least one type of room

        Initialized with 2 apartments and 2 common rooms as specified

    Common Room Types

        "Gym", "Library", and "Laundry" implemented as an enum

        Could alternatively have been free-form strings

        Chose enum for type safety and validation

    Frontend Architecture

        Requirement mentioned NextJS but didn't specify:

            Page routing structure

            State management approach

            API handling strategy

        Implemented with:

            Single page application approach

            React hooks for state management

            Direct fetch calls to backend API

Additional Implementation Notes

    Error Handling

        Added basic error handling where requirements were silent

        Frontend shows simple alerts for API failures

        Backend returns appropriate HTTP status codes

    Styling Approach

        Used Tailwind CSS as specified

        Made responsive design assumptions for mobile/desktop

    Testing Coverage

        Added tests beyond requirements where logical

        Included both unit and integration tests

    Data Persistence

        Assumed in-memory storage was sufficient for this demo

        No database integration implemented

These interpretations were made to create a functional system while maintaining flexibility for future modifications based on clarified requirements.
