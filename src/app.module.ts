import { Module }               from '@nestjs/common';
import { ConfigModule }         from '@nestjs/config';
import { TypeOrmModule }        from '@nestjs/typeorm';
import { TypeOrmConfigService } from '@database/typeorm.service';
import { AppController }        from './app.controller';
import { AppService }           from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
