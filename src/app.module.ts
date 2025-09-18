import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppUser } from './entities/app-user.entity';
import { PrereleasePremium } from './entities/prerelease-premium.entity';
import { PrereleaseUsers } from './entities/prerelease-users.entity';
import { Skin } from './entities/skin.entity';
import { UserXSkin } from './entities/user-x-skin.entity';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [
    StripeModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      password: 'password',
      username: 'user',
      entities: [AppUser, PrereleasePremium, PrereleaseUsers, UserXSkin, Skin],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
