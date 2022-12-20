// metodos e contratos que devem existir no repository
import Notification from '../entities/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
