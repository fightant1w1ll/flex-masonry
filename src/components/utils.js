export const items = [
  {
    width: 50,
    height: 200,
    // order: 3,
    sizes: "small-100 medium-50 large-33"
  },
  {
    width: 60,
    height: 40,
    // order: 2,
    sizes: "small-100 medium-50 large-33"
  },
  {
    width: 70,
    height: 160,
    // order: 1,
    sizes: "small-100 medium-50 large-33"
  },
  {
    width: 80,
    height: 60,
    sizes: "small-100 medium-50 large-33"
  },
  {
    width: 90,
    height: 120,
    sizes: "small-100 medium-50 large-33"
  },
  {
    width: 100,
    height: 100,
    sizes: "small-100 medium-50 large-33"
  },
  {
    width: 110,
    height: 100,
    sizes: "small-100 medium-50 large-33"
  },
  {
    width: 120,
    height: 120,
    sizes: "small-100 medium-50 large-33"
  },
  {
    width: 130,
    height: 80,
    sizes: "small-100 medium-50 large-33"
  }
];

export function getColumnCountFromViewport(viewport) {
  const mapper = {
    small: 1,
    medium: 2,
    large: 3
  };
  return mapper[viewport] || 3;
}

export function getCurrentSize(sizes, viewport) {
  if (!sizes) return 0;
  return sizes
    .split(" ")
    .filter((size) => size.indexOf(viewport) > -1)[0]
    .split("-")[1];
}
