import { useRef, useEffect } from 'react';

const BackgroundMusic = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        // Ensure audio starts playing when component mounts
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.log("Auto-play was prevented:", error);
            });
        }
    }, []);

    return (
        <div>
            <audio
                ref={audioRef}
                src="/bmusic.mp3"  // Replace with your audio file path
                autoPlay
                loop
            style={{ display: 'none' }}  // Hides the audio player
            />
        </div>
    );
};

export default BackgroundMusic;