import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unit } from './entities/unit.entity';

@Injectable()
export class UnitService {
  constructor(
    @InjectRepository(Unit)
    private unitRepository: Repository<Unit>,
  ) {}

  async create(createUnitDto: CreateUnitDto) {
    const exists = await this.unitRepository.findOneBy({
      title: createUnitDto.title,
    });
    if (exists == null) {
      const unit = this.unitRepository.create({
        ...createUnitDto,
      });
      await this.unitRepository.save(unit);
      return unit;
    } else
      throw new HttpException('Login Already Exists', HttpStatus.BAD_REQUEST);
  }

  findAll() {
    return this.unitRepository.find({ order: { id: 'ASC' } });
  }

  findOne(id: number) {
    return this.unitRepository.findOneBy({ id });
  }

  update(id: number, updateUnitDto: UpdateUnitDto) {
    return `This action updates a #${id} unit`;
  }

  async remove(id: number) {
    await this.unitRepository.delete(id);
    return { id: id };
  }
}
