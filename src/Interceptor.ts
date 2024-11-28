import { Injectable } from '@nestjs/common';

@Injectable()
export class Interceptor {
  constructor() {
    console.log('first');
  }
  authenticate() {
    console.log('interceptor reached');
    return true;
  }
}
