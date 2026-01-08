import React, { Component } from 'react';

export class MusicPlayer extends Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
        this.state = {
            isPlaying: false,
            artist: 'Herbalistek',
            songName: 'Expanding',
            hasUserInteracted: false
        };
    }

    componentDidMount() {
        const audio = this.audioRef.current;
        if (audio) {
            // Set volume to 0.3
            audio.volume = 0.3;
            
            // Add event listeners to track audio state
            audio.addEventListener('play', this.handlePlay);
            audio.addEventListener('pause', this.handlePause);
            audio.addEventListener('ended', this.handleEnded);
            audio.addEventListener('error', this.handleError);
            audio.addEventListener('loadeddata', this.handleLoadedData);

            // Try to auto-play (may be blocked by browser - this is normal)
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        this.setState({ isPlaying: true });
                    })
                    .catch(() => {
                        // Auto-play was prevented by browser - this is expected behavior
                        // User will need to click play button to start audio
                        this.setState({ isPlaying: false });
                    });
            }
        }
    }

    componentWillUnmount() {
        const audio = this.audioRef.current;
        if (audio) {
            audio.removeEventListener('play', this.handlePlay);
            audio.removeEventListener('pause', this.handlePause);
            audio.removeEventListener('ended', this.handleEnded);
            audio.removeEventListener('error', this.handleError);
            audio.removeEventListener('loadeddata', this.handleLoadedData);
        }
    }

    handlePlay = () => {
        this.setState({ isPlaying: true, hasUserInteracted: true });
    };

    handlePause = () => {
        this.setState({ isPlaying: false });
    };

    handleEnded = () => {
        this.setState({ isPlaying: false });
    };

    handleError = (e) => {
        const audio = this.audioRef.current;
        if (audio && audio.error) {
            // Only log actual errors, not auto-play prevention
            if (audio.error.code !== audio.error.MEDIA_ERR_ABORTED) {
                console.error('Audio error:', {
                    code: audio.error.code,
                    message: audio.error.message,
                    networkState: audio.networkState,
                    readyState: audio.readyState,
                    src: audio.src
                });
            }
        }
    };

    handleLoadedData = () => {
        console.log('Audio loaded successfully');
    };

    togglePlayPause = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const audio = this.audioRef.current;
        if (!audio) {
            return;
        }

        if (audio.paused) {
            // Ensure volume is set to 0.3
            audio.volume = 0.3;
            // Skip to 30 seconds if not already past that point
            if (audio.currentTime < 30) {
                audio.currentTime = 30;
            }
            
            // User clicked play - this should work after user interaction
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        this.setState({ isPlaying: true, hasUserInteracted: true });
                    })
                    .catch(error => {
                        // If play fails, log for debugging
                        console.error('Error playing audio:', error);
                        this.setState({ isPlaying: false });
                    });
            } else {
                // Fallback for older browsers
                this.setState({ isPlaying: true, hasUserInteracted: true });
            }
        } else {
            // User clicked pause
            audio.pause();
            this.setState({ isPlaying: false });
        }
    };

    render() {
        const { isPlaying, artist, songName } = this.state;
        
        return (
            <div className="MusicPlayer">
                <audio
                    ref={this.audioRef}
                    src="/audio/Herbalistek - Expanding.mp3"
                    loop
                    preload="auto"
                    crossOrigin="anonymous"
                />
                <div className="MusicPlayer-content">
                    <div className="MusicPlayer-info">
                        <div className="MusicPlayer-artist">{artist}</div>
                        <div className="MusicPlayer-song">{songName}</div>
                    </div>
                    <button 
                        type="button"
                        className="MusicPlayer-button" 
                        onClick={this.togglePlayPause}
                        onMouseDown={(e) => e.stopPropagation()}
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                        {isPlaying ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        );
    }
}

