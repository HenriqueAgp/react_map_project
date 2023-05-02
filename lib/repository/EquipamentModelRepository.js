import DATA from '../data/equipmentModel.json';

export class EquipamentModelRepository {
  getAll() {
    return [...DATA];
  }

  get(id) {
    return {...DATA.find((equipamentModel) => equipamentModel.id === id)};
  }
}