import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './organization.entity';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private organizationsRepository: Repository<Organization>,
  ) {}

  async findById(id: string): Promise<Organization> {
    return this.organizationsRepository.findOne({
      where: { id },
      relations: ['users'],
    });
  }

  async findBySlug(slug: string): Promise<Organization> {
    return this.organizationsRepository.findOne({
      where: { slug },
      relations: ['users'],
    });
  }

  async create(orgData: Partial<Organization>): Promise<Organization> {
    const organization = this.organizationsRepository.create(orgData);
    return this.organizationsRepository.save(organization);
  }

  async update(id: string, orgData: Partial<Organization>): Promise<Organization> {
    await this.organizationsRepository.update(id, orgData);
    return this.findById(id);
  }
}