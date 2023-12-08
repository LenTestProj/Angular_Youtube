export interface Room {
  availableRooms?: number;
  bookedRooms?: number;
  totalRooms?: number;
}

export interface RoomList {
  roomNumber?: string;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
  rating: number;
}
