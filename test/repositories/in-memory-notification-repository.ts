import { NotificationRepository } from '../../src/application/repositories/notification-repository';
import Notification from '../../src/application/entities/notification';

// inMemory simula o banco de dados
// implementa o contrato
export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
