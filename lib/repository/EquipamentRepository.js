import DATA from '../data/equipment.json';

export class EquipamentRepository {
  getAll() {
    return [...DATA];
  }

  get(id) {
    return {...DATA.find((equipament) => equipament.id === id)};
  }
}