interface ICalculatorProps {
  width: number;
  length: number;
  height: number;
  fences: number;
  region: number;
  angle: number;
  gatesCount: number;
  gatesWidth: number;
  gatesHeight: number;
  doorCount: number;
  doorType: number;
  windowsType: number;
  archType: number;
  foundation: number;
}

interface ICalculatorProps {
  priceWallFenses: number;
  priceRoofFenses: number;
  priceSkeletonMetal: number;
  priceSkeletonMounting: number;
  priceFensesMounting: number;
}

export type ICalculator = ICalculatorProps;
