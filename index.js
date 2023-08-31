const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const PORT = 5000;

app.use(bodyParser.json());


let create_room = [
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
];

app.get('/create_room', (req, res) => {
    const { seats } = req.query;

    let filterSeats = create_room;
    if (seats) {
        filterSeats = create_room.filter((room) => room.seats == seats);
    }
    res.send(filterSeats);
});

app.post('/create_room', (req, res) => {
    console.log(req.body);

    create_room.push(req.body);
    res.status(201).json(create_room); // Respond with the updated room array
});



app.put('/create_room', (req, res) => {
    const { id } = req.params;
    const newRoomData = req.body;

    create_room = create_room.map((room) => {
        if (room.id === parseInt(id)) {
            return {
                ...room,
                ...newRoomData
            };
        }
        return room;
    });

    res.send(create_room);
});

app.delete('/create_room/:id', (req, res) => {
    const { id } = req.params;

    create_room = create_room.filter((room) => room.id !== parseInt(id));

    res.send(create_room);
});




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
{/**Booking room data */}
app.get('/book_room/:roomId', (req, res) => {
    const { roomId } = req.query;
    console.log(req.query, roomId);

        let filterRooms = book_room;    /**Room id filter method */
        if (roomId) {
            filterRooms = book_room.filter((room) => room.roomId == roomId);
        }
        res.send(filterRooms);
    });

    app.post('/book_room/:roomId', (req, res) => {
        console.log(req.body);
    
        book_room.push(req.body);
        res.status(201).json(book_room);
    });


app.put('/book_room/:id', (req, res) => {
    const { id } = req.params;
    const newRoomData = req.body;

    book_room = book_room.map((room) => {
        if (room.id === parseInt(id)) {
            return {
                ...room,
                ...newRoomData
            };
        }
        return room;
    });

    res.send(book_room);
});

app.delete('/book_room/:id', (req, res) => {
    const { id } = req.params;

    book_room= book_room.filter((room) => room.id !== parseInt(id));

    res.send(book_room);
});


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
{/**No of Rooms booking data */}
    app.get('/list_rooms_booking/:roomName', (req, res) => {
        const { roomName } = req.query;
        console.log(req.query, roomName);

        /**List of Booking rooms Array object data */


        let filterRoomName = list_rooms_booking;    /**Room name filter method */
        if (roomName) {
            filterRoomName = list_rooms_booking.find((room) => room.roomName === roomName);
        }
    
        res.send(filterRoomName);
    });

    app.post('/list_rooms_booking/:roomName', (req, res) => {
        console.log(req.body);
    
        list_rooms_booking.push(req.body);
        res.status(201).json(list_rooms_booking);
    });

    app.put('/list_rooms_booking/:roomName', (req, res) => {
        const { roomName } = req.params;
        const newRoomData = req.body;
    
        list_rooms_booking = list_rooms_booking.map((room) => {
            if (room.roomName === roomName) {
                return {
                    ...room,
                    ...newRoomData
                };
            }
            return room;
        });
    
        res.send(list_rooms_booking);
    });

    app.delete('/list_rooms_booking/:roomName', (req, res) => {
        const { id } = req.params;
    
        list_rooms_booking= list_rooms_booking.filter((room) => room.id !== parseInt(id));
    
        res.send(list_rooms_booking);
    });

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
{/**No of customers booking room data */}
app.get ('/list_customers_booking_rooms/:customerName', (req, res)=>{
const { customerName } = req.query;
console.log(req.query, customerName);


        let filterCustomerName = list_customers_booking_rooms;  /**Customer name filter method */
        if(customerName){
            filterCustomerName = list_customers_booking_rooms.filter((customer)=>customer.customerName==customerName)
        }
        res.send(filterCustomerName);     
})

app.post('/list_customers_booking_rooms/:customerName', (req, res) => {
    console.log(req.body);

    list_customers_booking_rooms.push(req.body);
    res.status(201).json(list_customers_booking_rooms);
});

app.put('/list_customers_booking_rooms/:customerName', (req, res) => {
    const { customerName } = req.params;
    const newBooking = req.body;

    list_customers_booking_rooms = list_customers_booking_rooms.map((customer) => {
        if (customer.customerName === customerName) {
            customer.bookings.push(newBooking);
        }
        return customer;
    });

    res.send(list_customers_booking_rooms);
});

app.delete('/list_customers_booking_rooms/:customerName', (req, res) => {
    const { id } = req.params;

    list_customers_booking_rooms= list_customers_booking_rooms.filter((room) => room.id !== parseInt(id));

    res.send(list_customers_booking_rooms);
});


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
    
{/**Customer booking histry data  */}
app.get("/customer_booking_history/:customerId", (req, res) =>{
    const { customerId } = req.query;
    console.log(req.query, customerId);


        let filterCustomerId =  customer_booking_history;   /**Customer id filter method */
        if(customerId){
            filterCustomerId = customer_booking_history.filter((customer)=>customer.customerId==customerId)
        }
        res.send(filterCustomerId)      
})

app.post('/customer_booking_history/:customerId', (req, res) => {
    console.log(req.body);

    customer_booking_history.push(req.body);
    res.status(201).json(customer_booking_history);
});

app.put('/customer_booking_history/:customerId', (req, res) => {
    const { customerId } = req.params;
    const newBooking = req.body;

    customer_booking_history = customer_booking_history.map((customer) => {
        if (customer.customerId === parseInt(customerId)) {
            customer.bookings.push(newBooking);
        }
        return customer;
    });

    res.send(customer_booking_history);
});

app.delete('/customer_booking_history/:customerId', (req, res) => {
    const { id } = req.params;

    customer_booking_history= customer_booking_history.filter((room) => room.id !== parseInt(id));

    res.send(customer_booking_history);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});