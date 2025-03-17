import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from "typeorm";
import { UserInfo } from "./entities/user-info.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UserContact } from "./entities/user-contact.entity";
import { UserAddress } from "./entities/user-address.entity";
import { UserAcademics } from "./entities/user-academics.entity";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(UserInfo) private readonly userInfoRepository: Repository<UserInfo>,
      @InjectRepository(UserContact) private readonly userContactRepository: Repository<UserContact>,
      @InjectRepository(UserAddress) private readonly userAddressRepository: Repository<UserAddress>,
      @InjectRepository(UserAcademics) private readonly userAcademicsRepository: Repository<UserAcademics>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<{ message: string; data: UserInfo }> {
    try {
      const { contact, address, academics, ...userData } = createUserDto;


      const user = this.userInfoRepository.create(userData);
      await this.userInfoRepository.save(user);


      if (contact) {
        const userContact = this.userContactRepository.create({ ...contact, user: { id: user.id } });
        await this.userContactRepository.save(userContact);
      }

      if (address) {
        const userAddress = this.userAddressRepository.create({ ...address, user: { id: user.id } });
        await this.userAddressRepository.save(userAddress);
      }

      if (academics?.schools) {
        const userAcademics = this.userAcademicsRepository.create({
          schools: academics.schools,
          user: { id: user.id },
        });
        await this.userAcademicsRepository.save(userAcademics);
      }

      const fullUser = await this.userInfoRepository.findOne({
        where: { id: user.id },
        relations: ['contact', 'address', 'academics'],
      });

      return { message: 'User Successfully Created', data: fullUser };
    } catch (error) {
      throw new InternalServerErrorException({
        message: 'Error creating user',
        error: error.message,
      });
    }
  }


  async getAllUsers(): Promise<UserInfo[]> {
    return this.userInfoRepository.find({
      relations: ['contact', 'address', 'academics'],
    });
  }

  async getUserById(id: string): Promise<UserInfo> {
    const user = await this.userInfoRepository.findOne({
      where: { id },
      relations: ['contact', 'address', 'academics'],
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<{ message: string; data: UpdateUserDto }> {
    const user = await this.userInfoRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const { contact, address, academics, ...userData } = updateUserDto;

    await this.userInfoRepository.update(id, userData);

    if (contact) {
      await this.userContactRepository.update({ user: { id } }, contact);
    }

    if (address) {
      await this.userAddressRepository.update({ user: { id } }, address);
    }

    if (academics?.schools) {
      let existingAcademics = await this.userAcademicsRepository.findOne({ where: { user: { id } } });

      if (existingAcademics) {
        existingAcademics.schools = academics.schools;
        await this.userAcademicsRepository.save(existingAcademics);
      } else {
        const newAcademicRecord = this.userAcademicsRepository.create({
          schools: academics.schools,
          user,
        });
        await this.userAcademicsRepository.save(newAcademicRecord);
      }
    }

    return { message: 'User updated successfully!', data: updateUserDto };
  }

  async remove(id: string): Promise<{ message: string }> {
    const user = await this.userInfoRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await this.userInfoRepository.delete(id);

    return { message: 'User deleted successfully' };
  }
}
