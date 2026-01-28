import { Controller, Get, Put, Body, Param, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
@UseGuards(JwtAuthGuard)
export class OrganizationsController {
  constructor(private organizationsService: OrganizationsService) {}

  @Get(':id')
  async getOrganization(@Param('id') id: string, @Request() req) {
    if (id !== req.user.organizationId) {
      throw new Error('Unauthorized');
    }
    return this.organizationsService.findById(id);
  }

  @Put(':id')
  async updateOrganization(@Param('id') id: string, @Body() orgData: any, @Request() req) {
    if (id !== req.user.organizationId) {
      throw new Error('Unauthorized');
    }
    return this.organizationsService.update(id, orgData);
  }
}