import type { Meta, StoryObj } from "@storybook/react";

import GenreSelect from "../components/GenreSelect";

const meta: Meta<typeof GenreSelect> = {
  title: "GenreSelect",
  component: GenreSelect,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    genres: ["All", "Documentary", "Comedy", "Horror", "Crime"],
    onSelect: () => {
      console.log("Genre selected");
    },
  },
};
