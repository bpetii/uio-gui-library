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

export const itemsWithMeta = [
  {
    id: 1,
    name: 'Aardvark',
    metadata: 'Metadata 1'
  },
  {
    id: 2,
    name: 'Kangaroo',
    metadata: 'Metadata 2'
  },
  {
    id: 3,
    name: 'Jaguar',
    metadata: 'Metadata 3'
  },
];

export const listWithMeta = {
  items: itemsWithMeta
}


export const listCounts = {
  items: items.map((item) => ({
    ...item,
  })),
};

export const listLong = {
  name: 'Animals',
  items: [...Array(50)].map((item, index) => ({
    id: index,
    name: `Aardvark #${index + 1}`,
  })),
};
