import DATA from '../data/equipmentState.json';

export class EquipamentStateRepository {
  getAll() {
    return [...DATA];
  }

  get(id) {
    return {...DATA.find((equipament) => equipament.id == id)};
  }
}