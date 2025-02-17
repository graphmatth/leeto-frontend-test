import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs"; // Assure-toi du bon chemin d'import

const meta: Meta<typeof Tabs> = {
  title: "Common/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    defaultValue: "tab1",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List className="grid grid-cols-2 md:flex">
        <Tabs.Tab value="tab1">Actives (4)</Tabs.Tab>
        <Tabs.Tab value="tab2">Clôturées (2)</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="tab1" className="py-4">Tab 1</Tabs.Panel>
      <Tabs.Panel value="tab2" className="py-4">Tab 2</Tabs.Panel>
    </Tabs>
  ),
};