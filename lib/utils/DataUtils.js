import { EquipamentRepository } from "../repository/EquipamentRepository";
import { EquipamentModelRepository } from "../repository/EquipamentModelRepository";
import { EquipamentStateRepository } from "../repository/EquipamentStateRepository";

export class DataUtils {
  constructor() {
    this.equipamentRepo = new EquipamentRepository();
    this.equipamentModelRepo = new EquipamentModelRepository();
    this.equipamentStateRepo = new EquipamentStateRepository();
  }

  getEquipament(id) {
    const equipament = this.equipamentRepo.get(id);
    const model = this.equipamentModelRepo.get(equipament.equipmentModelId);
    
    model.hourlyEarnings.forEach((he, index) => {
      model.hourlyEarnings[index].state = this.equipamentStateRepo.get(he.equipmentStateId);
    });

    return {...equipament, equipamentModel: {...model}};
  }
}