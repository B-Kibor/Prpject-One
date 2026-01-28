import { Controller, Get, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('profile')
  async getProfile(@Request() req) {
    return this.usersService.findById(req.user.id);
  }

  @Get()
  async getUsers(@Request() req) {
    return this.usersService.findByOrganization(req.user.organizationId);
  }

  @Get(':id')
  async getUser(@Param('id') id: string, @Request() req) {
    const user = await this.usersService.findById(id);
    if (user.organizationId !== req.user.organizationId) {
      throw new Error('Unauthorized');
    }
    return user;
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() userData: any, @Request() req) {
    const user = await this.usersService.findById(id);
    if (user.organizationId !== req.user.organizationId) {
      throw new Error('Unauthorized');
    }
    return this.usersService.update(id, userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string, @Request() req) {
    const user = await this.usersService.findById(id);
    if (user.organizationId !== req.user.organizationId) {
      throw new Error('Unauthorized');
    }
    return this.usersService.delete(id);
  }
}