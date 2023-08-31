const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const PORT = 5000;


{/**Create a room data */}
app.get('/create_room', (req, res) => {
    const { seats } = req.query;
    console.log(req.query, seats);

    /**Create room Array object data */
    let create_room=[
        {
        "id": 1,
        "seats": 100,
        "amenities": ["projector", "whiteboard", "WiFi"],
        "pricePerHour": 50
        },
        {
        "id": 2,
        "seats": 50,
        "amenities": ["projector", "AC"],
        "pricePerHour": 40
        },
        {
        "id": 3,
        "seats": 200,
        "amenities": ["stage", "sound system", "lighting"],
        "pricePerHour": 100
        }
    ]

    let filterSeats = create_room;  /**Seats filter method */
    if (seats) {
        filterSeats = create_room.filter((room) => room.seats == seats);
    }
    res.send(filterSeats);
});


{/**Booking room data */}
app.get('/book_room/:roomId', (req, res) => {
    const { roomId } = req.query;
    console.log(req.query, roomId);

    /**Booking room Array object data */
    let book_room=
        [
            {
            "id": 1,
            "customerName": "John Doe",
            "date": "2023-09-15",
            "startTime": "10:00 AM",
            "endTime": "12:00 PM",
            "roomId": 1
            },
            {
            "id": 2,
            "customerName": "Jane Smith",
            "date": "2023-09-16",
            "startTime": "02:00 PM",
            "endTime": "04:00 PM",
            "roomId": 2
            },
            {
            "id": 3,
            "customerName": "Alice Johnson",
            "date": "2023-09-17",
            "startTime": "09:00 AM",
            "endTime": "11:00 AM",
            "roomId": 3
            }
        ]

        let filterRooms = book_room;    /**Room id filter method */
        if (roomId) {
            filterRooms = book_room.filter((room) => room.roomId == roomId);
        }
        res.send(filterRooms);
    });


{/**No of Rooms booking data */}
    app.get('/list_rooms_booking/:roomName', (req, res) => {
        const { roomName } = req.query;
        console.log(req.query, roomName);

        /**List of Booking rooms Array object data */
    let list_rooms_booking =
        [
            {
            "roomName": "Room 1",
            "bookedStatus": true,
            "bookings": [
                {
                "customerName": "John Doe",
                "date": "2023-09-15",
                "startTime": "10:00 AM",
                "endTime": "12:00 PM"
                },
                {
                "customerName": "Alice Johnson",
                "date": "2023-09-17",
                "startTime": "09:00 AM",
                "endTime": "11:00 AM"
                }
            ]
            },
            {
            "roomName": "Room 2",
            "bookedStatus": true,
            "bookings": [
                {
                "customerName": "Jane Smith",
                "date": "2023-09-16",
                "startTime": "02:00 PM",
                "endTime": "04:00 PM"
                }
            ]
            },
            {
            "roomName": "Room 3",
            "bookedStatus": false,
            "bookings": []
            }
        ]

        let filterRoomName = list_rooms_booking;    /**Room name filter method */
        if (roomName) {
            filterRoomName = list_rooms_booking.find((room) => room.roomName === roomName);
        }
    
        res.send(filterRoomName);
    });


{/**No of customers booking room data */}
app.get ('/list_customers_booking_rooms/:customerName', (req, res)=>{
const { customerName } = req.query;
console.log(req.query, customerName);

 /**List of customers Booking rooms Array object data */
    let list_customers_booking_rooms =
    [
            {
            "customerName": "John Doe",
            "bookings": [
                {
                "roomName": "Room 1",
                "date": "2023-09-15",
                "startTime": "10:00 AM",
                "endTime": "12:00 PM"
                }
            ]
            },
            {
            "customerName": "Jane Smith",
            "bookings": [
                {
                "roomName": "Room 2",
                "date": "2023-09-16",
                "startTime": "02:00 PM",
                "endTime": "04:00 PM"
                }
            ]
            },
            {
            "customerName": "Alice Johnson",
            "bookings": [
                {
                "roomName": "Room 3",
                "date": "2023-09-17",
                "startTime": "09:00 AM",
                "endTime": "11:00 AM"
                }
            ]
            }
        ]

        let filterCustomerName = list_customers_booking_rooms;  /**Customer name filter method */
        if(customerName){
            filterCustomerName = list_customers_booking_rooms.filter((customer)=>customer.customerName==customerName)
        }
        res.send(filterCustomerName);     
})


{/**Customer booking histry data  */}
app.get("/customer_booking_history/:customerId", (req, res) =>{
    const { customerId } = req.query;
    console.log(req.query, customerId);

    /** customers Booking histry Array object data */
    let customer_booking_history=
    [
        {
            "customerId": 1,
            "bookings": [
                {
                    "bookingId": 101,
                    "roomName": "Room 1",
                    "customerName": "John Doe",
                    "date": "2023-09-15",
                    "startTime": "10:00 AM",
                    "endTime": "12:00 PM"
                },
                {
                    "bookingId": 102,
                    "roomName": "Room 3",
                    "customerName": "Alice Johnson",
                    "date": "2023-09-18",
                    "startTime": "01:00 PM",
                    "endTime": "03:00 PM"
                }
            ]
        },
        {
            "customerId": 2,
            "bookings": [
                {
                    "bookingId": 103,
                    "roomName": "Room 2",
                    "customerName": "Jane Smith",
                    "date": "2023-09-16",
                    "startTime": "02:00 PM",
                    "endTime": "04:00 PM"
                }
            ]
        },
        {
            "customerId": 3,
            "bookings": []
        }
    ]
    
        let filterCustomerId =  customer_booking_history;   /**Customer id filter method */
        if(customerId){
            filterCustomerId = customer_booking_history.filter((customer)=>customer.customerId==customerId)
        }
        res.send(filterCustomerId)      
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});