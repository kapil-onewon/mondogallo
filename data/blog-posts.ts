export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: {
    day: number;
    month: string;
  };
  imageUrl: string;
  interactions: {
    likes: number;
    shares: number;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "THE WORLD ENDED YESTERDAY",
    excerpt:
      "I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway",
    date: {
      day: 28,
      month: "OCT",
    },
    imageUrl: "https://placehold.co/600x400/000000/FFF",
    interactions: {
      likes: 2697,
      shares: 23,
    },
  },
  {
    id: 2,
    title: "THE FUTURE IS NOW",
    excerpt:
      "Exploring the boundaries between reality and imagination in our modern digital landscape",
    date: {
      day: 27,
      month: "OCT",
    },
    imageUrl: "https://placehold.co/600x400/000000/FFF",
    interactions: {
      likes: 1854,
      shares: 15,
    },
  },
  {
    id: 3,
    title: "DREAMS OF TOMORROW",
    excerpt:
      "Understanding the complex relationship between technology and human consciousness",
    date: {
      day: 26,
      month: "OCT",
    },
    imageUrl: "https://placehold.co/600x400/000000/FFF",
    interactions: {
      likes: 3421,
      shares: 45,
    },
  },
  {
    id: 4,
    title: "THE WORLD ENDED YESTERDAY",
    excerpt:
      "I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway",
    date: {
      day: 28,
      month: "OCT",
    },
    imageUrl: "https://placehold.co/600x400/000000/FFF",
    interactions: {
      likes: 2697,
      shares: 23,
    },
  },
  {
    id: 5,
    title: "THE FUTURE IS NOW",
    excerpt:
      "Exploring the boundaries between reality and imagination in our modern digital landscape",
    date: {
      day: 27,
      month: "OCT",
    },
    imageUrl: "https://placehold.co/600x400/000000/FFF",
    interactions: {
      likes: 1854,
      shares: 15,
    },
  },
  {
    id: 6,
    title: "DREAMS OF TOMORROW",
    excerpt:
      "Understanding the complex relationship between technology and human consciousness",
    date: {
      day: 26,
      month: "OCT",
    },
    imageUrl: "https://placehold.co/600x400/000000/FFF",
    interactions: {
      likes: 3421,
      shares: 45,
    },
  },
];
