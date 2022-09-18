
export const table = {
  headers: [
    {
      cells: [
        { value: 'Name' },
        { value: 'Calories' },
        { value: 'Fat' },
        { value: 'Protein' },
        { value: 'Carbohydrate' },
        { value: 'Sugar' },
      ],
    },
  ],
  rows: [
    {
      cells: [
        { value: 'Banana'},
        { value: 110 },
        { value: 0 },
        { value: 1 },
        { value: 28 },
        { value: 15 },
      ],
    },
    {
        cells: [
            { value: 'Apple'},
            { value: 95 },
            { value: 0 },
            { value: 1 },
            { value: 25 },
            { value: 19 },
          ],
    },
    {
        cells: [
            { value: 'Grape'},
            { value: 66 },
            { value: 0.4 },
            { value: 0.6 },
            { value: 17 },
            { value: 12 },
          ],
    },
  ],
};

export const tableColumnWidths = {
  ...table,
  columnWidths: ['200px', '20%', '100px', 'auto'],
};


export const tableTitle = {
  ...table,
  name: 'Fruit nutritions',
};


export const tableColspan = {
  ...table,
  headers: [
    {
      cells: [{ value: '' }, { value: 'Stats', colSpan: 2 }, { value: '' }, { value: '' }, { value: '' }],
    },
    ...table.headers,
  ],
  rows: [
    ...table.rows,
    {
      cells: [{ value: 'Total', colSpan: 6 }],
    },
  ],
};

export const tableAlignment = {
  ...tableColspan,
  columnAlignment: ['left', 'right', 'right', 'left', 'right'],
  columnHeaderAlignments: [
    ['', 'center', ''],
    ['', 'right', 'right', ''],
    ['', 'right', 'right', ''],
  ],
};
