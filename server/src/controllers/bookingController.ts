import { Request, Response } from 'express';
import { Booking } from '../models/Booking';

export const createBooking = async (req: Request, res: Response) => {
  const { vehicleId, userId, pickUpDate, returnDate } = req.body;

  try {
    const booking = new Booking();
    booking.vehicleId = vehicleId;
    booking.userId = userId;
    booking.pickUpDate = pickUpDate;
    booking.returnDate = returnDate;

    await booking.save();
    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
