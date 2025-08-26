import React from 'react';

interface GenreCardProps {
  number: string;
  title: string;
  bgColor: string;
  onExplore: () => void;
}

const GenreCard: React.FC<GenreCardProps> = ({ number, title, bgColor, onExplore }) => {
  return (
    <div className={`${bgColor} rounded-3xl p-8 flex flex-col items-start justify-between h-80 w-64 transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}>
      <div className="text-white text-6xl font-bold opacity-90">
        {number}
      </div>
      
      <div className="flex flex-col items-start w-full">
        <h2 className="text-white text-3xl font-bold mb-6 tracking-wider">
          {title}
        </h2>
        
        <button
          onClick={onExplore}
          className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm tracking-wider hover:bg-gray-100 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          EXPLORE
        </button>
      </div>
    </div>
  );
};

function App() {
  const genres = [
    {
      number: "01",
      title: "PHONK",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600",
      onExplore: () => console.log("Exploring PHONK")
    },
    {
      number: "02",
      title: "MELODY",
      bgColor: "bg-gradient-to-br from-blue-400 to-purple-500",
      onExplore: () => console.log("Exploring MELODY")
    },
    {
      number: "03",
      title: "LO-FI",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
      onExplore: () => console.log("Exploring LO-FI")
    },
    {
      number: "04",
      title: "8D",
      bgColor: "bg-gradient-to-br from-purple-600 to-pink-600",
      onExplore: () => console.log("Exploring 8D")
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="flex flex-wrap gap-8 justify-center max-w-6xl">
        {genres.map((genre, index) => (
          <GenreCard
            key={index}
            number={genre.number}
            title={genre.title}
            bgColor={genre.bgColor}
            onExplore={genre.onExplore}
          />
        ))}
      </div>
    </div>
  );
}

export default App;