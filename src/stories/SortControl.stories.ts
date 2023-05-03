import type { Meta, StoryObj } from "@storybook/react";

import SortControl from "../components/SortControl";
import "../styles/index.scss";
import { SortOptions } from "../types/SortOptions";

const meta: Meta<typeof SortControl> = {
  title: "SortControl",
  component: SortControl,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedOption: SortOptions.Title,
  },
};
