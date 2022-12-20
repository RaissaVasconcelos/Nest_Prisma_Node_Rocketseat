import { Module } from '@nestjs/common';
import { SendNotification } from '../../application/uses-cases/send-notification-uses-cases';
import { DatabaseModule } from '../database/database.module';
import { NotificationController } from './controllers/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [SendNotification],
})
export class HttpModule {}
