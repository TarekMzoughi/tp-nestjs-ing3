import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Injectable()
export class TravelService {
  create(createTravelDto: CreateTravelDto) {
    return 'Planifier un nouveau voyage ici';
  }

  findAll() {
    const trips = this.trips.map((t) => ({ id: t.id, name: t.name, price: t.price }));
    return trips;
  }

  findOne(id: number) {
    const trip = this.trips.find((t) => t.id === id);
    return trip || `Travel with ID #${id} not found`;
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
  private trips = [
    { id: 1, name: 'To China', price: 9000 },
    { id: 2, name: 'To Morocco', price: 4000 },
  ];
}
