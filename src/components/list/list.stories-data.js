export const items = [
  {
    id: 1,
    name: 'Aardvark',
  },
  {
    id: 2,
    name: 'Kangaroo',
  },
  {
    id: 3,
    name: 'Jaguar',
  },
];

export const list = {
  items,
};


export const listCounts = {
  items: items.map((item) => ({
    ...item,
    metaCount: 3,
  })),
};

export const listLong = {
  name: 'Animals',
  items: [...Array(50)].map((item, index) => ({
    id: index,
    name: `Aardvark #${index + 1}`,
  })),
};
