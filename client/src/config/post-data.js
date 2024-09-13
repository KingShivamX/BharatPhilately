const Posts = [
  {
    id: 1,
    timeAgo: "2h ago",
    author: "John Doe",
    description: "Stamp collecting is not only a hobby but also a gateway to history, art, and culture. Learn why it continues to be significant today.",
    content: "In the digital age, it might seem like stamp collecting is a forgotten hobby. However, this pastime offers a unique connection to the past, providing insights into history, culture, and art...",
    imageUrl: "https://i.pinimg.com/564x/d4/d0/73/d4d073a3270ebea84a620b3be8fa758b.jpg",
    tags: ["Stamp Collecting", "History", "Hobby"],
    likes: 150,
    comments: [
      { id: 1, user: "Alice", text: "This is fascinating! I never knew stamps had such cultural significance." },
      { id: 2, user: "Bob", text: "Great read, I’ve been collecting stamps for years." }
    ],
    shares: 30,
    link: "https://example.com/posts/stamp-collecting-modern-times"
  },
  {
    id: 2,
    timeAgo: "1d ago",
    author: "Jane Smith",
    description: "Proper care and storage can make a significant difference in the preservation of your stamp collection. Here's how to do it.",
    content: "Stamps are fragile pieces of history, and proper care is essential for preserving their beauty and value. It's important to store them in a cool, dry place...",
    imageUrl: "https://i.pinimg.com/564x/6e/b2/36/6eb236f36d08b8c3d34f0c7ddf99f36c.jpg",
    tags: ["Stamp Collecting", "Care", "Preservation"],
    likes: 95,
    comments: [
      { id: 1, user: "Charlie", text: "Thanks for the tips! My collection was starting to wear down." },
      { id: 2, user: "Diana", text: "Very helpful, especially for new collectors!" }
    ],
    shares: 12,
    link: "https://example.com/posts/how-to-care-for-your-stamp-collection"
  },
  {
    id: 3,
    timeAgo: "2w ago",
    author: "Philatelic Expert",
    description: "Discover the rarest and most valuable stamps in the world, from the British Guiana to the Inverted Jenny.",
    content: "Among the millions of stamps that have been issued, a select few stand out for their rarity and value. The British Guiana 1c magenta...",
    imageUrl: "https://i.pinimg.com/564x/0f/48/52/0f4852aab7449dc2d2ae725a60ab3b59.jpg",
    tags: ["Stamp Collecting", "Rare Stamps", "Top 10"],
    likes: 200,
    comments: [
      { id: 1, user: "Emily", text: "I would love to own even one of these rare stamps!" },
      { id: 2, user: "Frank", text: "The Inverted Jenny is my favorite. Such a cool story behind it." }
    ],
    shares: 50,
    link: "https://example.com/posts/rare-stamps-every-collector-should-know"
  },
  {
    id: 4,
    timeAgo: "3d ago",
    author: "Events Team",
    description: "Don't miss the top philatelic exhibitions and events happening in 2024. Here's a list of the major ones around the globe.",
    content: "From regional stamp exhibitions to international philatelic expos, 2024 is packed with exciting events for stamp enthusiasts...",
    imageUrl: "https://i.pinimg.com/564x/69/9e/40/699e40aa78efebeb812df897df520c19.jpg",
    tags: ["Events", "Exhibitions", "Philately"],
    likes: 180,
    comments: [
      { id: 1, user: "Grace", text: "Looking forward to attending these events!" },
      { id: 1, user: "Harry", text: "The list is great, I'll be sure to make some of these!" }
    ],
    shares: 45,
    link: "https://example.com/posts/philatelic-exhibitions-2024"
  }
];

export default Posts;
