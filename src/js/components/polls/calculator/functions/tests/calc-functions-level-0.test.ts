import { CALC_ARCHITECTURAL_TYPES, CALC_FENSES } from '../../constants/calc-constants-general';
import {
  getBuildingRoofArea,
  getSkeletonWeight,
  getSteelPileCount,
  getTotalWallAreaBrutto,
  getTotalWallAreaNetto,
} from '../calc-functions-level-0';

describe('CalcLevel0Functions', () => {
  describe('SteelPileCount', () => {
    test('pile count, 10x15x4, tent, region-0 equal 10+2=12', () => {
      expect(getSteelPileCount(10, 15, 4, CALC_FENSES[0].id, 1)).toBe(12);
    });
    test('pile count, 10x15x4, tent, region-2 equal 10+2=12', () => {
      expect(getSteelPileCount(10, 15, 4, CALC_FENSES[0].id, 3)).toBe(12);
    });
    test('pile count, 24x57x6, tent, region-2 equal 32+8=40', () => {
      expect(getSteelPileCount(24, 57, 6, CALC_FENSES[0].id, 3)).toBe(40);
    });
    test('pile count, 10x15x8, profnastil, region-0 8+2=10', () => {
      expect(getSteelPileCount(10, 15, 8, CALC_FENSES[1].id, 1)).toBe(10);
    });
    test('pile count, 24x57x5, sandwich, region-0 equal 22+8=30', () => {
      expect(getSteelPileCount(24, 57, 5, CALC_FENSES[2].id, 1)).toBe(30);
    });
    test('pile count, 32x57x5, sandwich, region-2 equal by weight - 52', () => {
      expect(getSteelPileCount(32, 57, 5, CALC_FENSES[2].id, 3)).toBe(52);
    });
  });
  describe('SkeletonWeight', () => {
    test('skeleton weight, 20x50x3, tent, region-0', () => {
      expect(getSkeletonWeight(20, 50, 3, CALC_FENSES[0].id, 1)).toBe(19030);
    });
    test('skeleton weight, 20x50x5, tent, region-0', () => {
      expect(getSkeletonWeight(20, 50, 5, CALC_FENSES[0].id, 1)).toBe(21010);
    });
    test('skeleton weight, 20x50x6, tent, region-0 || consumption=22', () => {
      expect(getSkeletonWeight(20, 50, 6, CALC_FENSES[0].id, 1)).toBe(22000);
    });
    test('skeleton weight, 20x50x8, tent, region-0', () => {
      expect(getSkeletonWeight(20, 50, 9, CALC_FENSES[0].id, 1)).toBe(24970);
    });
    test('skeleton weight, 30x50x6, tent, region-0 || consumption=23.1', () => {
      expect(getSkeletonWeight(30, 50, 6, CALC_FENSES[0].id, 1)).toBe(34650);
    });
    test('skeleton weight, 10x50x6, tent, region-0 || consumption=25.3', () => {
      expect(getSkeletonWeight(10, 50, 6, CALC_FENSES[0].id, 1)).toBe(12650);
    });
    test('skeleton weight, 15x50x4, tent, region-0 || consumption=21.52', () => {
      expect(getSkeletonWeight(15, 50, 4, CALC_FENSES[0].id, 1)).toBe(16141);
    });
  });
  describe('BuildingRoofArea', () => {
    test('roof area, 10x15x4, 10, tent,       single  = 10.154*15=', () => {
      expect(getBuildingRoofArea(10, 15, 10, CALC_FENSES[0].id, CALC_ARCHITECTURAL_TYPES[0].id)).toBe(152.31);
    });
    test('roof area, 10x15x4, 10, profnastil, single  = 10.454*15=', () => {
      expect(getBuildingRoofArea(10, 15, 10, CALC_FENSES[1].id, CALC_ARCHITECTURAL_TYPES[0].id)).toBe(156.81);
    });
    test('roof area, 24x57x6, 13, sandwich,   double  = 12.616*57*2=', () => {
      expect(getBuildingRoofArea(24, 57, 13, CALC_FENSES[2].id, CALC_ARCHITECTURAL_TYPES[1].id)).toBe(1438.224);
    });
    test('roof area, 10x15x8,  8, profnastil, double  = 5.349*15*2=', () => {
      expect(getBuildingRoofArea(10, 15, 8, CALC_FENSES[1].id, CALC_ARCHITECTURAL_TYPES[1].id)).toBe(160.47);
    });
    test('roof area, 39x57x5, 25, tent,       doublex2  = (10.758*4)*57=', () => {
      expect(getBuildingRoofArea(39, 57, 25, CALC_FENSES[0].id, CALC_ARCHITECTURAL_TYPES[2].id)).toBe(2452.824);
    });
    test('roof area, 48x57x5, 17, sandwich,   doublex2  = (12.848*2 + 12.548*2)*57=', () => {
      expect(getBuildingRoofArea(48, 57, 17, CALC_FENSES[2].id, CALC_ARCHITECTURAL_TYPES[2].id)).toBe(2895.144);
    });
  });
  describe('TotalWallAreaBrutto', () => {
    test('TotalWallAreaBrutto, 10x15x4, 10, single', () => {
      expect(getTotalWallAreaBrutto(10, 15, 4, 10, CALC_ARCHITECTURAL_TYPES[0].id)).toBe(244);
    });
    test('TotalWallAreaBrutto, 10x15x4, 10, double', () => {
      expect(getTotalWallAreaBrutto(10, 15, 4, 10, CALC_ARCHITECTURAL_TYPES[1].id)).toBe(209);
    });
    test('TotalWallAreaBrutto, 40x80x4, 10, double_2x', () => {
      expect(getTotalWallAreaBrutto(10, 15, 4, 10, CALC_ARCHITECTURAL_TYPES[2].id)).toBe(204);
    });
  });
  describe('TotalWallAreaNetto', () => {
    test('TotalWallAreaNetto, 10x15x4, 10, single', () => {
      expect(getTotalWallAreaNetto(10, 15, 4, 10, CALC_ARCHITECTURAL_TYPES[0].id, 20, 0)).toBe(224);
    });
    test('TotalWallAreaNetto, 10x15x4, 10, double', () => {
      expect(getTotalWallAreaNetto(10, 15, 4, 10, CALC_ARCHITECTURAL_TYPES[1].id, 10, 50)).toBe(149);
    });
    test('TotalWallAreaNetto, 40x80x4, 10, double_2x', () => {
      expect(getTotalWallAreaNetto(10, 15, 4, 10, CALC_ARCHITECTURAL_TYPES[2].id, 0, 0)).toBe(204);
    });
  });
});
