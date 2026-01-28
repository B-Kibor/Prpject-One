import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findById(id: string): Promise<User> {
    return this.usersRepository.findOne({ 
      where: { id },
      relations: ['organization']
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ 
      where: { email },
      relations: ['organization']
    });
  }

  async findByOrganization(organizationId: string): Promise<User[]> {
    return this.usersRepository.find({
      where: { organizationId },
      relations: ['organization']
    });
  }

  async create(userData: Partial<User>): Promise<User> {
    const user = this.usersRepository.create(userData);
    return this.usersRepository.save(user);
  }

  async update(id: string, userData: Partial<User>): Promise<User> {
    await this.usersRepository.update(id, userData);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}