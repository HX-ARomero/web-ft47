import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from "typeorm";
import { Platform } from "../entity/Platform";

@EventSubscriber()
export class PlatformSubscriber
  implements EntitySubscriberInterface<Platform>
  {
    listenTo() {
      return Platform;
    }

    beforeInsert(event: InsertEvent<Platform>) {
      console.log(`BEFORE INSERT: `, event.entity);
    }

    afterInsert(event: InsertEvent<Platform>) {
      //* => ENVIAR MAIL
      console.log(`AFTER INSERT: `, event.entity);
    }
  }