import { CALC_FENSES, CALC_REGIONS } from '../../constants/calc-constants-general';
import {
  getSlopeLenght,
  getSpanStep,
  getSnowZone,
  getGableHeight,
  getAtticArea,
  getBuildingArea,
  getBuildingPerimeter,
  getSnowWeight,
} from '../calc-functions-level-2';

describe('CalcLevel2Functions', () => {
  describe('BuildingArea', () => {
    test('area 10 x 15 equal 150', () => {
      expect(getBuildingArea(10, 15)).toBe(150);
    });
    test('area 24 x 48 equal 1152', () => {
      expect(getBuildingArea(24, 48)).toBe(1152);
    });
    test('area 36 x 66 equal 2376', () => {
      expect(getBuildingArea(36, 66)).toBe(2376);
    });
  });
  describe('BuildingPerimeter', () => {
    test('perimeter 10 x 15 equal 50', () => {
      expect(getBuildingPerimeter(10, 15)).toBe(50);
    });
    test('perimeter 24 x 48 equal 144', () => {
      expect(getBuildingPerimeter(24, 48)).toBe(144);
    });
    test('perimeter 36 x 66 equal 204', () => {
      expect(getBuildingPerimeter(36, 66)).toBe(204);
    });
  });
  describe('SlopeLenght', () => {
    test('slope length SINGLE, 10m 10deg equal 10.154', () => {
      expect(getSlopeLenght(10, 10, 1)).toBe(10.154);
    });
    test('slope length SINGLE, 15m 9deg equal 15.187', () => {
      expect(getSlopeLenght(15, 9, 1)).toBe(15.187);
    });
    test('slope length SINGLE, 5m 12deg equal 5.112', () => {
      expect(getSlopeLenght(5, 12, 1)).toBe(5.112);
    });
    test('slope length DOUBLE, 10m 10deg equal 5.077m', () => {
      expect(getSlopeLenght(10, 10, 2)).toBe(5.077);
    });
    test('slope length DOUBLE, 15m 11deg equal 7.64m', () => {
      expect(getSlopeLenght(15, 11, 2)).toBe(7.64);
    });
    test('slope length DOUBLE, 24m 8deg equal 12.118m', () => {
      expect(getSlopeLenght(24, 8, 2)).toBe(12.118);
    });
    test('slope length DOUBLE, 36m 9deg equal 18.224m', () => {
      expect(getSlopeLenght(36, 9, 2)).toBe(18.224);
    });
    test('slope length DOUBLE, 27m 36deg equal 16.687m', () => {
      expect(getSlopeLenght(27, 36, 2)).toBe(16.687);
    });
    test('slope length DOUBLE_2X, 35m 10deg equal 8.885m', () => {
      expect(getSlopeLenght(35, 10, 3)).toBe(8.885);
    });
    test('slope length DOUBLE_2X, 42m 17deg equal 10.98m', () => {
      expect(getSlopeLenght(42, 17, 3)).toBe(10.98);
    });
    test('slope length DOUBLE_2X, 49m 8deg equal 12.37m', () => {
      expect(getSlopeLenght(49, 8, 3)).toBe(12.37);
    });
  });
  describe('GableHeight', () => {
    test('gableHeinght 5-45-undef', () => {
      expect(getGableHeight(5, 45, undefined)).toBe(0);
    });
    test('gableHeinght 15-8-single', () => {
      expect(getGableHeight(15, 8, 1)).toBe(2.108);
    });
    test('gableHeinght 10-12-single', () => {
      expect(getGableHeight(10, 12, 1)).toBe(2.126);
    });
    test('gableHeinght 24-10-double', () => {
      expect(getGableHeight(24, 10, 2)).toBe(2.116);
    });
    test('gableHeinght 34-8-double', () => {
      expect(getGableHeight(34, 8, 2)).toBe(2.389);
    });
    test('gableHeinght 39-10-double_2x', () => {
      expect(getGableHeight(39, 10, 3)).toBe(1.719);
    });
    test('gableHeinght 49-15-double_2x', () => {
      expect(getGableHeight(49, 15, 3)).toBe(3.282);
    });
  });
  describe('AtticArea', () => {
    test('AtticArea 5-45-undef', () => {
      expect(getAtticArea(5, 45, undefined)).toBe(0);
    });
    test('AtticArea 15-8-single', () => {
      expect(getAtticArea(15, 8, 1)).toBe(15.81);
    });
    test('AtticArea 10-12-single', () => {
      expect(getAtticArea(10, 12, 1)).toBe(10.63);
    });
    test('AtticArea 24-10-double', () => {
      expect(getAtticArea(24, 10, 2)).toBe(25.392);
    });
    test('AtticArea 34-8-double', () => {
      expect(getAtticArea(34, 8, 2)).toBe(40.613);
    });
    test('AtticArea 39-10-double_2x', () => {
      expect(getAtticArea(39, 10, 3)).toBe(33.52);
    });
    test('AtticArea 49-15-double_2x', () => {
      expect(getAtticArea(49, 15, 3)).toBe(80.409);
    });
  });
  describe('SpanStep', () => {
    test('span step tent, 15m equal 3.750m', () => {
      expect(getSpanStep(15, CALC_FENSES[0].id)).toBe(3.75);
    });
    test('span step tent, 68m equal 4m', () => {
      expect(getSpanStep(68, CALC_FENSES[0].id)).toBe(4);
    });
    test('span step profnastil, 42m equal 6m', () => {
      expect(getSpanStep(42, CALC_FENSES[1].id)).toBe(6);
    });
    test('span step sandwich, 57m equal 5.7m', () => {
      expect(getSpanStep(57, CALC_FENSES[2].id)).toBe(5.7);
    });
  });
  describe('SnowZone', () => {
    test('SnowZone 1', () => {
      expect(getSnowZone(CALC_REGIONS[0].id)).toBe(3);
    });
    test('SnowZone 2', () => {
      expect(getSnowZone(CALC_REGIONS[1].id)).toBe(3);
    });
    test('SnowZone 3', () => {
      expect(getSnowZone(CALC_REGIONS[2].id)).toBe(4);
    });
  });
  describe('SnowWeight', () => {
    test('SnowWeight 15, 50, 0 = 112500', () => {
      expect(getSnowWeight(15, 50, CALC_REGIONS[0].id)).toBe(112500);
    });
    test('SnowWeight 36, 120, 1 = 112500', () => {
      expect(getSnowWeight(36, 120, CALC_REGIONS[1].id)).toBe(648000);
    });
    test('SnowWeight 24, 66, 2 = 112500', () => {
      expect(getSnowWeight(24, 66, CALC_REGIONS[2].id)).toBe(316800);
    });
  });
});
