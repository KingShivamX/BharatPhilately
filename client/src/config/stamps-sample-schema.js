const stamps = [
    {
      id: 1,
      title: "Mahatma Gandhi",
      description: "A commemorative stamp featuring Mahatma Gandhi, issued to honor his contributions to India’s independence.",
      imageUrl: "/img/stamp1.jpg",
      category: "Featured",
      releaseDate: "2024-01-01",
      PostalCircle: "India",
      value: 10
    },
    {
      id: 2,
      title: "Taj Mahal",
      description: "A beautiful stamp showcasing the Taj Mahal, one of the Seven Wonders of the World.",
      imageUrl: "/img/stamp12.jpg",
      category: "Popular",
      releaseDate: "2024-02-15",
      PostalCircle: "India",
      value: 15
    },
    {
      id: 3,
      title: "Indian Peacock",
      description: "A stamp depicting the Indian Peacock, known for its vibrant feathers and national significance.",
      imageUrl: "/img/image1.jpg",
      category: "Rare",
      releaseDate: "2024-03-10",
      PostalCircle: "India",
      value: 25
    },
    {
      id: 4,
      title: "Ganges River",
      description: "A stamp representing the sacred Ganges River, a vital river for the people of India.",
      imageUrl: "/img/stamp1.jpg",
      category: "Latest Release",
      releaseDate: "2024-04-20",
      PostalCircle: "India",
      value: 20
    },
    {
      id: 5,
      title: "Lotus Temple",
      description: "A stamp featuring the iconic Lotus Temple in New Delhi.",
      imageUrl: "/img/stamp10.jpg",
      category: "Featured",
      releaseDate: "2024-05-05",
      PostalCircle: "India",
      value: 12
    },
    {
      id: 6,
      title: "Qutub Minar",
      description: "A stamp depicting the famous Qutub Minar, a UNESCO World Heritage Site.",
      imageUrl: "/img/stamp11.jpg",
      category: "Popular",
      releaseDate: "2024-06-10",
      PostalCircle: "India",
      value: 15
    },
    {
      id: 7,
      title: "Ashoka Chakra",
      description: "A commemorative stamp displaying the Ashoka Chakra, a symbol of India's sovereignty.",
      imageUrl: "/img/image2.jpg",
      category: "Rare",
      releaseDate: "2024-07-01",
      PostalCircle: "India",
      value: 18
    },
    {
      id: 8,
      title: "Golden Temple",
      description: "A stamp highlighting the Golden Temple, an important pilgrimage site.",
      imageUrl: "/img/image3.jpg",
      category: "Featured",
      releaseDate: "2024-08-12",
      PostalCircle: "India",
      value: 20
    },
    {
      id: 9,
      title: "Konark Sun Temple",
      description: "A stamp featuring the ancient Konark Sun Temple in Odisha.",
      imageUrl: "/img/image3.jpg",
      category: "Rare",
      releaseDate: "2024-09-05",
      PostalCircle: "India",
      value: 22
    },
    {
      id: 10,
      title: "Victoria Memorial",
      description: "A commemorative stamp showcasing the Victoria Memorial in Kolkata.",
      imageUrl: "/img/stamp10.jpg",
      category: "Popular",
      releaseDate: "2024-10-01",
      PostalCircle: "India",
      value: 14
    },
    {
      id: 11,
      title: "Brihadeeswara Temple",
      description: "A beautiful stamp showcasing the Brihadeeswara Temple in Tamil Nadu.",
      imageUrl: "/img/stamp2.jpg",
      category: "Latest Release",
      releaseDate: "2024-11-15",
      PostalCircle: "India",
      value: 25
    },
    {
      id: 12,
      title: "Charminar",
      description: "A stamp featuring the famous Charminar monument in Hyderabad.",
      imageUrl: "/img/stamp9.jpg",
      category: "Popular",
      releaseDate: "2024-12-01",
      PostalCircle: "India",
      value: 10
    },
    {
      id: 13,
      title: "Kaziranga National Park",
      description: "A stamp dedicated to the wildlife of Kaziranga National Park, home to the Indian rhinoceros.",
      imageUrl: "/img/image4.jpg",
      category: "Rare",
      releaseDate: "2025-01-10",
      PostalCircle: "India",
      value: 18
    },
    {
      id: 14,
      title: "Meenakshi Temple",
      description: "A stunning stamp showing the Meenakshi Temple in Madurai, Tamil Nadu.",
      imageUrl: "/img/stamp4.jpg",
      category: "Featured",
      releaseDate: "2025-02-05",
      PostalCircle: "India",
      value: 15
    },
    {
      id: 15,
      title: "Jantar Mantar",
      description: "A stamp showcasing the astronomical observatory, Jantar Mantar, in Jaipur.",
      imageUrl: "/img/stamp8.jpg",
      category: "Popular",
      releaseDate: "2025-03-15",
      PostalCircle: "India",
      value: 20
    },
    {
      id: 16,
      title: "Gateway of India",
      description: "A commemorative stamp of the Gateway of India in Mumbai.",
      imageUrl: "/img/stamp3.jpg",
      category: "Latest Release",
      releaseDate: "2025-04-12",
      PostalCircle: "India",
      value: 12
    },
    {
      id: 17,
      title: "Nalanda University",
      description: "A rare stamp highlighting the ancient Nalanda University, a historic center of learning.",
      imageUrl: "/img/image4.jpg",
      category: "Rare",
      releaseDate: "2025-05-20",
      PostalCircle: "India",
      value: 28
    },
    {
      id: 18,
      title: "Elephanta Caves",
      description: "A stamp dedicated to the famous Elephanta Caves near Mumbai.",
      imageUrl: "/img/stamp7.jpg",
      category: "Popular",
      releaseDate: "2025-06-01",
      PostalCircle: "India",
      value: 14
    },
    {
      id: 19,
      title: "Sanchi Stupa",
      description: "A commemorative stamp featuring the Sanchi Stupa, one of India's oldest Buddhist monuments.",
      imageUrl: "/img/stamp5.jpg",
      category: "Featured",
      releaseDate: "2025-07-10",
      PostalCircle: "India",
      value: 22
    },
    {
      id: 20,
      title: "Ajanta Caves",
      description: "A rare stamp showcasing the intricate artwork of Ajanta Caves.",
      imageUrl: "/img/image3.jpg",
      category: "Rare",
      releaseDate: "2025-08-05",
      PostalCircle: "India",
      value: 30
    },
    {
      id: 21,
      title: "Red Fort",
      description: "A commemorative stamp showing the Red Fort, a symbol of India's independence.",
      imageUrl: "/img/stamp6.jpg",
      category: "Popular",
      releaseDate: "2025-09-01",
      PostalCircle: "India",
      value: 10
    },
    {
      id: 22,
      title: "Bangalore Palace",
      description: "A stamp showing the beautiful architecture of Bangalore Palace.",
      imageUrl: "/img/stamp6.jpg",
      category: "Featured",
      releaseDate: "2025-10-15",
      PostalCircle: "India",
      value: 12
    },
    {
      id: 23,
      title: "Humayun's Tomb",
      description: "A beautiful stamp featuring Humayun's Tomb in Delhi.",
      imageUrl: "/img/image2.jpg",
      category: "Rare",
      releaseDate: "2025-11-01",
      PostalCircle: "India",
      value: 15
    },
    {
      id: 24,
      title: "Victoria Terminus",
      description: "A commemorative stamp showcasing the Victorian Gothic architecture of Mumbai's CST station.",
      imageUrl: "/img/stamp4.jpg",
      category: "Latest Release",
      releaseDate: "2025-12-01",
      PostalCircle: "India",
      value: 18
    },
    {
      id: 25,
      title: "Vivekananda Rock",
      description: "A commemorative stamp of Vivekananda Rock, a famous pilgrimage site.",
      imageUrl: "/img/stamp12.jpg",
      category: "Popular",
      releaseDate: "2026-01-10",
      PostalCircle: "India",
      value: 10
    },
    {
      id: 26,
      title: "India Gate",
      description: "A stamp commemorating the India Gate, a war memorial in New Delhi.",
      imageUrl: "/img/image1.jpg",
      category: "Rare",
      releaseDate: "2026-02-15",
      PostalCircle: "India",
      value: 20
    },
    {
      id: 27,
      title: "Khajuraho Temples",
      description: "A rare stamp featuring the stunning Khajuraho Temples in Madhya Pradesh.",
      imageUrl: "/images/khajuraho-temples.jpg",
      category: "Rare",
      releaseDate: "2026-03-12",
      PostalCircle: "India",
      value: 30
    },
    {
      id: 28,
      title: "Statue of Unity",
      description: "A stamp celebrating the Statue of Unity, the tallest statue in the world.",
      imageUrl: "/images/statue-of-unity.jpg",
      category: "Popular",
      releaseDate: "2026-04-20",
      PostalCircle: "India",
      value: 25
    },
    {
      id: 29,
      title: "Rashtrapati Bhavan",
      description: "A commemorative stamp showing the Rashtrapati Bhavan, the residence of the President of India.",
      imageUrl: "/img/stamp7.jpg",
      category: "Featured",
      releaseDate: "2026-05-05",
      PostalCircle: "India",
      value: 15
    },
    {
      id: 30,
      title: "Hawa Mahal",
      description: "A stunning stamp showcasing the Hawa Mahal in Jaipur, Rajasthan.",
      imageUrl: "/img/stamp8.jpg",
      category: "Featured",
      releaseDate: "2026-06-10",
      PostalCircle: "India",
      value: 12
    }
  ];
  
  export default stamps;