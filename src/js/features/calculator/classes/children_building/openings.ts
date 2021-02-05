import Building from '../building';
import { TAX_FACTORY_OPENINGS } from '../../constants/calc-constants-taxes';

class Openings extends Building {
  protected readonly taxes: number;

  constructor() {
    super();
    this.taxes = TAX_FACTORY_OPENINGS;
  }

  get taxesValue(): number {
    return this.taxes;
  }
}

export default Openings;
