import Building from './building';
import { taxFactoryOpenings } from '../constants/calc-constants-taxes';

class Openings extends Building {
  protected readonly taxes: number;

  constructor() {
    super();
    this.taxes = taxFactoryOpenings;
  }

  get taxesValue():number {
    return this.taxes;
  }
}

export default Openings;
