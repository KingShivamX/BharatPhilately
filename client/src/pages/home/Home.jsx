import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const stamps = [
    { id: 1, title: "Ashoka Pillar", description: "Issued in 1950, this stamp features the Ashoka Pillar, a symbol of India's heritage and unity.", imageUrl: "/stamps/stamp1.jpg" },
    { id: 2, title: "Gandhi's Salt March", description: "Released in 1931, this stamp commemorates Mahatma Gandhi's historic Salt March, a pivotal moment in the Indian independence movement.", imageUrl: "/stamps/stamp2.jpg" },
    { id: 3, title: "Indian Parliament", description: "Introduced in 1961, this stamp depicts the Indian Parliament House, a symbol of democratic governance.", imageUrl: "/stamps/stamp3.jpg" },
    { id: 4, title: "Bharat Ratna", description: "This 1966 stamp honors the Bharat Ratna, India's highest civilian award, recognizing exceptional service to the nation.", imageUrl: "/stamps/stamp4.jpg" },
    { id: 5, title: "Lotus Temple", description: "Released in 1986, this stamp features the Lotus Temple in Delhi, an architectural marvel and a symbol of peace and unity.", imageUrl: "/stamps/stamp5.jpg" },
    { id: 6, title: "Taj Mahal", description: "Issued in 1958, this stamp showcases the Taj Mahal, one of the Seven Wonders of the World and an iconic symbol of India.", imageUrl: "/stamps/stamp6.jpg" },
    { id: 7, title: "Indian Wildlife", description: "This 1975 stamp highlights India's rich biodiversity, featuring the Bengal Tiger, one of the country's most majestic animals.", imageUrl: "/stamps/stamp7.jpg" },
    { id: 8, title: "Kailash Mansarovar", description: "Released in 1981, this stamp depicts the sacred Kailash Mansarovar, a revered pilgrimage site in the Himalayas.", imageUrl: "/stamps/stamp8.jpg" },
    { id: 9, title: "First Indian Air Mail", description: "Commemorating the first air mail service in India in 1911, this stamp features a historic aircraft and early postal aviation.", imageUrl: "/stamps/stamp9.jpg" },
    { id: 10, title: "Indian Space Program", description: "Issued in 1984, this stamp celebrates India's advancements in space exploration, featuring the Indian satellite Aryabhata.", imageUrl: "/stamps/stamp10.jpg" },
    { id: 11, title: "Mahatma Gandhi", description: "A 1948 stamp honoring Mahatma Gandhi, the Father of the Nation, released shortly after his assassination.", imageUrl: "/stamps/stamp11.jpg" },
    { id: 12, title: "Indian Culture", description: "Released in 1983, this stamp illustrates various aspects of Indian culture, including traditional dance and music.", imageUrl: "/stamps/stamp12.jpg" }
  ];
  

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
        <h1 className="text-4xl font-bold text-[#41102D]">Welcome to BharatPhilately</h1>
        <p className="mt-4 text-xl text-gray-600">Your one-stop platform for exploring and collecting Indian philatelic materials.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {stamps.map(stamp => (
            <div key={stamp.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={stamp.imageUrl} alt={stamp.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{stamp.title}</h2>
                <p className="mt-2 text-gray-700">{stamp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
