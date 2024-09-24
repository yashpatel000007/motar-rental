import { createConnection } from 'typeorm';

export const connectDB = async () => {
  await createConnection({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../models/*.ts'],
    synchronize: true,
  });
  console.log('PostgreSQL connected');
};
