import type { Meta, StoryObj } from "@storybook/react";

import MovieTile from "../components/MovieTile";
import "../styles/index.scss";

const meta: Meta<typeof MovieTile> = {
  title: "MovieTile",
  component: MovieTile,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movie: {
      id: 1,
      title: "Zootopia",
      releaseDate: "2016-02-11",
      genres: ["Animation", "Adventure", "Family", "Comedy"],
      imageUrl:
        "https://th.bing.com/th/id/OIP._LO55dYmoKY15WR7l2rDBgHaLH?pid=ImgDet&rs=1",
    },
  },
};
