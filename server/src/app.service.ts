import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
const serverId = v4();

@Injectable()
export class AppService {
  getHello(): string {
    return serverId;
  }
}
