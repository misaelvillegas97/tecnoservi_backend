import { Module }         from '@nestjs/common';
import { ConfigModule }   from '@nestjs/config';
import { DatabaseModule } from '@database/database.module';
import { AppController }  from './app.controller';
import { AppService }     from './app.service';
import configuration      from '../config/configuration';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/environment/env.${process.env.NODE_ENV}`,
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
