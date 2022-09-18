import React from 'react';
import { Table } from '../components/table/table';
import * as storyData from '../components/table/table-data';

export default {
  title: 'Basic/Table',
  component: Table,
  args: {
    table: {
      ...storyData.table,
    },
  },
};

const Template = (args) => {
  return (
    <Table
      {...args}
    />
  );
};
export const Default = Template.bind({});

export const MinimumColumnWidths = Template.bind({});
MinimumColumnWidths.args = {
  table: storyData.tableColumnWidths,
};
MinimumColumnWidths.parameters = {
  docs: {
    description: {
      story:
        'Use sparingly when certain columns cannot be below a certain width. Make sure at least one column is set to `auto` to use remaining space.',
    },
  },
};

export const Colspan = Template.bind({});
Colspan.args = {
  table: storyData.tableColspan,
};

export const ColumnAlignment = Template.bind({});
ColumnAlignment.args = {
  table: storyData.tableAlignment,
};


export const Title = Template.bind({});
Title.args = {
  table: storyData.tableTitle,
};


export const NotStriped = Template.bind({});
NotStriped.args = {
  table: {
    ...storyData.table,
    striped: false,
  },
};
NotStriped.parameters = {
  docs: {
    description: {
      story: '`striped: false` removes tinted background on alternative rows.',
    },
  },
};
