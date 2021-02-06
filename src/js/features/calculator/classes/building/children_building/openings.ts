import Building from '../building';

class Openings extends Building {
  get taxesValue(): number {
    return this.datas.openingsTax;
  }
}

export default Openings;
