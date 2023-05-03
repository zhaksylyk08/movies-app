import type { Meta, StoryObj } from "@storybook/react";

import MovieDetails from "../components/MovieDetails";
import "../styles/index.scss";

const meta: Meta<typeof MovieDetails> = {
  title: "MovieDetails",
  component: MovieDetails,
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
      rating: 7.7,
      duration: 108,
      description:
        "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
    },
  },
};
