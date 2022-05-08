import { TypeOrmModule } from '@nestjs/typeorm';

export const DatabaseProvider = [
  TypeOrmModule.forRoot({
    ssl: false,
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: 5432,
    synchronize: true,
    entities: [__dirname + '../modules/**/*.entity{.ts,.js}', __dirname + '../shared/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
  }),
];
