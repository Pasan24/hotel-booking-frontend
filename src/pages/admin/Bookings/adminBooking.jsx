
const bookings =[
    {
      "bookingId": 1,
      "roomId": 101,
      "email": "john.doe@example.com",
      "status": "Confirmed",
      "reason": "Business Meeting",
      "start": "2024-11-01",
      "end": "2024-11-03",
      "notes": "Requires projector setup",
      "timestamp": "2024-10-28T15:30:00Z"
    },
    {
      "bookingId": 2,
      "roomId": 102,
      "email": "jane.smith@example.com",
      "status": "Pending",
      "reason": "Team Workshop",
      "start": "2024-11-05",
      "end": "2024-11-06",
      "notes": "Need whiteboard markers",
      "timestamp": "2024-10-28T16:45:00Z"
    },
    {
      "bookingId": 3,
      "roomId": 103,
      "email": "alex.jones@example.com",
      "status": "Cancelled",
      "reason": "Personal",
      "start": "2024-11-10",
      "end": "2024-11-12",
      "notes": "N/A",
      "timestamp": "2024-10-28T17:00:00Z"
    }
  ]
  

export default function AdminBooking() {
    return (
        <div className="w-full bg-red-600 p-4">
            <table className="table-auto w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Booking ID</th>
                        <th className="px-4 py-2 border">Room ID</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Reason</th>
                        <th className="px-4 py-2 border">Start Date</th>
                        <th className="px-4 py-2 border">End Date</th>
                        <th className="px-4 py-2 border">Notes</th>
                        <th className="px-4 py-2 border">Timestamp</th>
                    </tr>
                </thead>
                  
                <tbody>
                    {
                        bookings.map(
                            (booking)=>{

                                return(
                                <tr>
                                    <td>
                                        {booking.bookingId}
                                    </td>
                                    <td>
                                        {booking.roomId}
                                    </td>
                                    <td>
                                        {booking.email}
                                    </td>
                                    <td>
                                        {booking.status}
                                    </td>
                                    <td>
                                        {booking.reason}
                                    </td>
                                    <td>
                                      
                                        {booking.start}
                                    </td>
                                    <td>
                                        {booking.end}
                                    </td>
                                    <td>
                                        {booking.notes}
                                    </td>
                                    <td>
                                        {booking.timestamp}
                                    </td>

                                </tr>
                            ) 

                            }
                        )
                    }

                    
                </tbody>

            </table>
        </div>
    );
}
