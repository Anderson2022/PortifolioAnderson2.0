import React, { useState, useRef, useEffect } from 'react';
import { Coment } from '../components/Coment';
import imagesvg3 from '../public/assets/movies/alternate-expand.svg';

export const CardVideo = ({ selectedVideo, playlistItems }) => {
    const videoElement = useRef(null);
    const [videoSize, setVideoSize] = useState({ width: '100%', height: 'auto' });
    const [isFullscreen, setIsFullscreen] = useState(false);
    const video = playlistItems.find(item => item.id === selectedVideo);

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            if (videoElement.current.requestFullscreen) {
                videoElement.current.requestFullscreen();
            } else if (videoElement.current.mozRequestFullScreen) { // Firefox
                videoElement.current.mozRequestFullScreen();
            } else if (videoElement.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
                videoElement.current.webkitRequestFullscreen();
            } else if (videoElement.current.msRequestFullscreen) { // IE/Edge
                videoElement.current.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        }
        setIsFullscreen(!isFullscreen);
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(document.fullscreenElement != null);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        };
    }, []);

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            {video ? (
                <div className="mb-8">
                    <div className="relative pb-[56.25%] h-48 rounded-md border-slate-950 border-2 shadow-2xl overflow-hidden">
                        <video
                            ref={videoElement}
                            className="absolute top-1/2 left-1/2 w-auto h-auto max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2 rounded-md border-slate-950"
                            controls
                            src={video.video || video.videoUrl || ''}
                        />
                        <button
                            onClick={toggleFullscreen}
                            className="absolute top-2 right-2  text-white px-2 py-1 rounded"
                        >
                            <img
                                src={imagesvg3.src}
                                alt="Fullscreen"
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                    <div className="mt-2">
                        <p className="text-lg font-bold">{video.title}</p>
                    
                    </div>
                    <div
                        className={`mt-6 transition-max-height duration-300 overflow-hidden rounded-lg bg-slate-600 ${expanded ? 'max-h-[1000px]' : 'max-h-12'}`}
                    >
                        <div>
                            <div className="flex justify-center py-2 shadow-2xl">
                                <ul className="flex space-x-4 list-none p-0 m-0">
                                    <li>
                                        <button className="text-2xl transition-transform transform hover:scale-110 focus:outline-none" data-id="star"> 🌟 </button>
                                    </li>
                                    <li>
                                        <button className="text-2xl transition-transform transform hover:scale-110 focus:outline-none" data-id="100"> 💯 </button>
                                    </li>
                                    <li>
                                        <button className="text-2xl transition-transform transform hover:scale-110 focus:outline-none active:text-yellow-400" data-id="clap"> 👏 </button>
                                    </li>
                                    <li>
                                        <button className="text-2xl transition-transform transform hover:scale-110 focus:outline-none" data-id="tada"> 🎉 </button>
                                    </li>
                                    <li>
                                        <button className="text-2xl transition-transform transform hover:scale-110 focus:outline-none" data-id="laugh"> 😂 </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={toggleExpand}
                                            className="px-2 py-2 text-white rounded focus:outline-none"
                                        >
                                            {expanded ? 'Menos' : 'Mais'}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <Coment video={video} /> {/* Incluindo o componente Coment */}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center text-gray-500">Nenhum vídeo selecionado</div>
            )}
        </>
    );
};
