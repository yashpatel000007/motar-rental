import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('bookings')
export class Booking extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicleId: number;

  @Column()
  userId: number;

  @Column()
  pickUpDate: Date;

  @Column()
  returnDate: Date;
}
