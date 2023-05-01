import type { Meta, StoryObj } from "@storybook/react";

import SearchForm from "../components/SearchForm";

const meta: Meta<typeof SearchForm> = {
  title: "SearchForm",
  component: SearchForm,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputValue: "",
    onSearch: () => {
      console.log("Search a movie");
    },
  },
};
