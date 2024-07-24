import {CardRoll} from '../components/CardRoll'; // Ajuste o caminho conforme necessário
import { CardVideo } from '../components/CardVideo';
import React, { useState } from 'react';
import video1 from '../public/assets/movies/tACTO.mp4';
import video2 from '../public/assets/movies/Funny Sitcom Theme.mp4';
import video3 from '../public/assets/movies/Comp 1_2.mp4';
import image1 from '../public/assets/movies/Captura de ecrã 2024-07-23 133725.png';
import image2 from '../public/assets/movies/Captura de ecrã 2024-07-23 133803.png';
import image3 from '../public/assets/movies/Captura de ecrã 2024-07-23 133849.png';


const playlistItems = [
  {
    id: 1,
    title: "Tacto",
    channel: "Tecnologia",
    views: "1M",
    uploaded: "1 Fevereiro 2024",
    thumbnail: image1,
    video: video1,
  },
  {
    id: 2,
    title: "My Cooks",
    channel: "Loja",
    views: "500K",
    uploaded: "1 Fevereiro 2024",
    thumbnail: image2,
    video: video2,
  },
  {
    id: 3,
    title: "Tacto",
    channel: "Automação",
    views: "200K",
    uploaded: "1 Fevereiro 2024",
    thumbnail: image3,
    video: video3,
  },
  // ... Outros itens
];

const Movies = () => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const handleSelectVideo = (id) => {
      setSelectedVideoId(id);
  };

  return (
      <div className="mx-auto px-8 pt-24 transition-max-height duration-300 ease-in-out overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-9 w-full gap-4">
              <div className="md:col-span-4 xl:col-span-7 w-full xl:w-11/12">
                  <CardVideo selectedVideo={selectedVideoId} playlistItems={playlistItems} />
              </div>
              <div className="md:col-span-2 w-full">
                  <CardRoll onSelectVideo={handleSelectVideo} playlistItems={playlistItems} />
              </div>
          </div>
      </div>
  );
};

export default Movies;

