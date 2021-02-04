import Skeleton from './skeleton';
import Roof from './roof';
import Walls from './walls';
import Gates from './gates';
import Doors from './doors';
import Windows from './windows';
import Floor from './floor';
import Foundation from './foundation';

class PriceListAbstract {
  protected skeleton: Skeleton;

  protected roof: Roof;

  protected walls: Walls;

  protected gates: Gates;

  protected doors: Doors;

  protected windows: Windows;

  protected floor: Floor;

  protected foundation: Foundation;

  constructor() {
    this.foundation = new Foundation();
    this.skeleton = new Skeleton();
    this.roof = new Roof();
    this.walls = new Walls();
    this.gates = new Gates();
    this.doors = new Doors();
    this.windows = new Windows();
    this.roof = new Roof();
    this.floor = new Floor();
  }
}

export default PriceListAbstract;
