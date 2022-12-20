import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { SendNotification } from './send-notification-uses-cases';

describe('Send-Notification', () => {
  it('shold be able to create a notification', async () => {
    const inMemoryNotification = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(inMemoryNotification);

    const { notification } = await sendNotification.execute({
      content: 'Nova solicitação de Amizade',
      category: 'social',
      recipientId: 'example-recipient',
    });

    expect(notification).toBeTruthy();
    expect(inMemoryNotification.notifications).toHaveLength(1);
    expect(inMemoryNotification.notifications[0]).toEqual(notification);
  });
});
