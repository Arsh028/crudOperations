import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Interceptor } from './Interceptor';

@UseInterceptors(Interceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user')
  fetchUser(@Query() request: any): Record<string, string> {
    return this.appService.getUser(request);
  }

  @Post('/user')
  createUser(@Body() request: Record<string, string>): Record<string, string> {
    return this.appService.createUser(request);
  }

  @Patch('/user')
  updateUser(@Body() request: Record<string, string>): Record<string, string> {
    return this.appService.updateUser(request);
  }

  @Delete('/user')
  deleteUser(@Body() request: Record<string, string>): Record<string, string> {
    return this.appService.deleteUser(request);
  }
}
