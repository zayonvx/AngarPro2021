import { CALC_FOUNDATION } from '../../constants/calc-constants-general';
import {
  getGateArea,
  getButtArea,
  getWindowArea,
  getBuildingWallsArea,
  getFoundationConcreteVolume,
  getFloorArea,
} from '../calc-functions-level-1';

describe('CalcLevel1Functions', () => {
  describe('WallsArea', () => {
    test('wall area 10x15x4, 10, single', () => {
      expect(getBuildingWallsArea(10, 15, 4, 10, 1)).toBe(146.445);
    });
    test('wall area 24x48x6, 15, double', () => {
      expect(getBuildingWallsArea(24, 48, 6, 15, 2)).toBe(576);
    });
    test('wall area 36x66x8, 10, doublex2', () => {
      expect(getBuildingWallsArea(36, 66, 8, 10, 3)).toBe(1056);
    });
  });
  describe('FloorArea', () => {
    test('floor area 10x15', () => {
      expect(getFloorArea(10, 15)).toBe(150);
    });
    test('floor area 24x48', () => {
      expect(getFloorArea(24, 48)).toBe(1152);
    });
    test('floor area 36x66', () => {
      expect(getFloorArea(36, 66)).toBe(2376);
    });
  });
  describe('GatesArea', () => {
    test('gates area 3 x 3.5, count 2 equal 21', () => {
      expect(getGateArea(3, 3.5, 2)).toBe(21);
    });
    test('gates area 4 x 4.5, count 3 equal 54', () => {
      expect(getGateArea(4, 4.5, 3)).toBe(54);
    });
    test('gates area 15 x 6, count 1 equal 90', () => {
      expect(getGateArea(15, 6, 1)).toBe(90);
    });
    test('gates area 12 x 6, count 0 equal 0', () => {
      expect(getGateArea(12, 6, 0)).toBe(0);
    });
  });
  describe('ButtArea', () => {
    test('butt area SINGLE, 10m 3m 10deg', () => {
      expect(getButtArea(10, 3, 10, 1)).toBe(38.815);
    });
    test('butt area SINGLE, 5m 7m 15deg equal', () => {
      expect(getButtArea(5, 7, 15, 1)).toBe(38.35);
    });
    test('butt area DOUBLE, 10m 3m 10deg equal', () => {
      expect(getButtArea(10, 3, 10, 2)).toBe(34.41);
    });
    test('butt area DOUBLE, 15m 5.2m 11deg equal', () => {
      expect(getButtArea(15, 5.2, 11, 2)).toBe(88.935);
    });
    test('butt area DOUBLE, 24m 6.5m 8deg equal', () => {
      expect(getButtArea(24, 6.5, 8, 2)).toBe(176.232);
    });
    test('butt area DOUBLE, 36m 4.8m 9deg equal', () => {
      expect(getButtArea(36, 4.8, 9, 2)).toBe(224.118);
    });
    test('butt area DOUBLE_2X, 40m 3m 10deg equal', () => {
      expect(getButtArea(40, 3, 10, 3)).toBe(155.26);
    });
    test('butt area DOUBLE_2X, 46m 5m 15deg equal', () => {
      expect(getButtArea(46, 5, 15, 3)).toBe(300.863);
    });
  });
  describe('WindowArea', () => {
    test('window area, 10x15 equal 0', () => {
      expect(getWindowArea(10, 15, 0, 0)).toBe(0);
    });
    test('window area, 10x15 equal 38.4', () => {
      expect(getWindowArea(10, 15, 0, 2)).toBe(38.4);
    });
    test('window area, 15x40 equal 91.2m', () => {
      expect(getWindowArea(15, 40, 1, 0)).toBe(91.2);
    });
    test('window area, 24x48 equal 273.6m', () => {
      expect(getWindowArea(24, 48, 2, 1)).toBe(273.6);
    });
    test('window area, 36x64 equal 312m', () => {
      expect(getWindowArea(36, 64, 1, 2)).toBe(312);
    });
  });
  describe('FoundationConcreteVolume', () => {
    test('pile count, 10x15 no foundation', () => {
      expect(getFoundationConcreteVolume(10, 15, CALC_FOUNDATION[0].id)).toBe(0);
    });
    test('pile count, 10x15 only piles grillage', () => {
      expect(getFoundationConcreteVolume(10, 15, CALC_FOUNDATION[1].id)).toBe(0);
    });
    test('pile count, 10x15 pile with grillage', () => {
      expect(getFoundationConcreteVolume(10, 15, CALC_FOUNDATION[2].id)).toBe(8.75);
    });
    test('pile count, 10x15 line', () => {
      expect(getFoundationConcreteVolume(10, 15, CALC_FOUNDATION[3].id)).toBe(10);
    });
    test('pile count, 10x15 plate equal 11', () => {
      expect(getFoundationConcreteVolume(10, 15, CALC_FOUNDATION[4].id)).toBe(35.2);
    });
  });
});
