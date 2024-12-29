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
    imageUrl: "/article-1.jpg",
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
    imageUrl: "/article-2.jpg",
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
    imageUrl: "/article-3.jpg",
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
    imageUrl: "/article-1.jpg",
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
    imageUrl: "/article-2.jpg",
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
    imageUrl: "/article-3.jpg",
    interactions: {
      likes: 3421,
      shares: 45,
    },
  },
];

export interface BlogPostTwo {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: 'popular' | 'latest';
  interactions: any;
}

export const blogPostTwos: BlogPostTwo[] = [
  {
    id: 1,
    title: "Best Strategy to Achieve Profitable Harvest",
    excerpt: "Optimal strategies for achieving profitable harvests involve a comprehensive approach to farm management, utilization of appropriate crop varieties...",
    date: "October 15, 2023",
    imageUrl: require("../assets/images/img-1.jpg"),
    category: 'popular',
    interactions: {
      likes: 3421,
      shares: 45,
    },
  },
  {
    id: 2,
    title: "Abundant Harvest from Agricultural Farm Land Shows Success",
    excerpt: "Recent agricultural innovations have led to significant improvements in crop yields...",
    date: "October 12, 2023",
    imageUrl: require("../assets/images/img-1.jpg"),
    category: 'popular',
    interactions: {
      likes: 3421,
      shares: 45,
    },
  },
  {
    id: 3,
    title: "Latest Innovations Increasing Milk Production and Quality",
    excerpt: "New technological advancements in dairy farming have revolutionized...",
    date: "October 10, 2023",
    imageUrl: require("../assets/images/img-1.jpg"),
    category: 'popular',
    interactions: {
      likes: 3421,
      shares: 45,
    },
  },
  {
    id: 4,
    title: "Exploring Potential and Challenges in Robot Agriculture",
    excerpt: "Discover the latest developments and challenges in the realm of Digital Agriculture...",
    date: "October 23, 2023",
    imageUrl: require("../assets/images/img-1.jpg"),
    category: 'latest',
    interactions: {
      likes: 3421,
      shares: 45,
    },
  },
  {
    id: 5,
    title: "Bringing Change in the Livestock Industry",
    excerpt: "Innovative approaches to sustainable transformation practices that bring positive...",
    date: "October 22, 2023",
    imageUrl: require("../assets/images/img-1.jpg"),
    category: 'latest',
    interactions: {
      likes: 3421,
      shares: 45,
    },
  },
  {
    id: 6,
    title: "Potential and Constraints Faced in Production Quality",
    excerpt: "Understanding the challenges that impact modern day harvesting...",
    date: "October 21, 2023",
    imageUrl: require("../assets/images/img-1.jpg"),
    category: 'latest',
    interactions: {
      likes: 3421,
      shares: 45,
    },
  },
  {
    id: 7,
    title: "Achieving High Productivity from Your Own Home Garden",
    excerpt: "A Practical Guide to Achieve Satisfactory Results from Your Home Garden...",
    date: "October 20, 2023",
    imageUrl: require("../assets/images/img-1.jpg"),
    category: 'latest',
    interactions: {
      likes: 3421,
      shares: 45,
    },
  },
  {
    id: 8,
    title: "The Best Guide to Planting Seeds with Optimal Results",
    excerpt: "Effective Strategies and Techniques to Achieve Quality and Productive Plant Growth...",
    date: "October 19, 2023",
    imageUrl: require("../assets/images/img-1.jpg"),
    category: 'latest',
    interactions: {
      likes: 3421,
      shares: 45,
    },
  },
  {
    id: 9,
    title: "Strategies for Caring for Your Garden More Efficiently and Productively",
    excerpt: "An approach that improves plant performance and makes garden management easier...",
    date: "October 18, 2023",
    imageUrl: require("../assets/images/img-1.jpg"),
    category: 'latest',
    interactions: {
      likes: 3421,
      shares: 45,
    },
  }
];


