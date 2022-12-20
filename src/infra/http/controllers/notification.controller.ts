import { Controller, Post, Body } from '@nestjs/common';
import { SendNotification } from '../../../application/uses-cases/send-notification-uses-cases';
import { CreateNotificationBody } from '../dtos/create-notification';

@Controller('notification')
export class NotificationController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });
    return { notification };
  }
}
