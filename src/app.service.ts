import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  strategyLogin(req, strategy) {
    if (!req.user) {
      return `No user from ${strategy}`;
    }

    return {
      message: `User information from ${strategy}`,
      user: req.user
    }
  }
  
  getHello(): string {
    return 'Hello World!';
  }
}
