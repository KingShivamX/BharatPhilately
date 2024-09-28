import { Button } from 'antd';
import { useState } from 'react';

const postalCircles = [
  { id: 1, name: "Maharashtra Postal Circle" },
  { id: 2, name: "Gujarat Postal Circle" },
  { id: 3, name: "Karnataka Postal Circle" },
  { id: 4, name: "Delhi Postal Circle" },
  { id: 5, name: "Tamil Nadu Postal Circle" },
  // Add the rest of your postal circles here...
];

const CommunitySection = () => {
  const [visibleCircles, setVisibleCircles] = useState(3);

  const showMore = () => {
    setVisibleCircles(prev => prev + 3);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Join Community</h2>
      <div className="sticky rounded-md space-y-5">
        {postalCircles.slice(0, visibleCircles).map(circle => (
          <div key={circle.id} className="bg-white rounded-lg border p-4 shadow-md">
            <h3 className="text-lg font-semibold">{circle.name}</h3>
            <button className="bg-primary hover:bg-primary/80 text-white py-1 px-3 rounded mt-2">
              Join {circle.name}
            </button>
          </div>
        ))}

        {visibleCircles < postalCircles.length && (
          <Button onClick={showMore} className="px-6 py-3  rounded-lg shadow-md transition duration-300 ease-in-out">
            show more
          </Button>
        )}
      </div>
    </div>
  );
};

export default CommunitySection;
