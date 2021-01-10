export const getTransform = (el: Element): string[] => {
  const thing = /matrix(?:(3d)\(-{0,1}\d+(?:, -{0,1}\d+)*(?:, (-{0,1}\d+))(?:, (-{0,1}\d+))(?:, (-{0,1}\d+)), -{0,1}\d+\)|\(-{0,1}\d+(?:, -{0,1}\d+)*(?:, (-{0,1}\d+))(?:, (-{0,1}\d+))\))/;
  const transform = window.getComputedStyle(el, null).getPropertyValue('-webkit-transform');
  const results = thing.exec(transform); //transform.match(thing);

  if (!results) return ['0', '0', '0'];
  if (results[1] == '3d') return results.slice(2, 5);

  results.push(String(0));
  return results.slice(5, 8); // returns the [X,Y,Z,1] values
};
