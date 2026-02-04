import { useState, useRef, useEffect } from 'react'
import './App.css'

// Import all songs
import song1 from './assets/Ed Sheeran - Perfect.mp3'
import song2 from './assets/Burna Boy - For My Hand ft. Ed Sheeran.mp3'
import song3 from './assets/Ruth B. - Dandelions (Lyrics).mp3'
import song4 from './assets/Made For Me by Muni Long.mp3'

// Songs list with display names
const songsList = [
  { src: song1, name: 'Ed Sheeran - Perfect' },
  { src: song2, name: 'Burna Boy - For My Hand' },
  { src: song3, name: 'Ruth B. - Dandelions' },
  { src: song4, name: 'Muni Long - Made For Me' },
]

// Import all your photos
import photo1 from './assets/photos/73662871872__EE9BEDF6-545B-4BFE-BE0A-D7C194E129B2.jpeg'
import photo2 from './assets/photos/IMG_1515.jpeg'
import photo3 from './assets/photos/IMG_1518.JPG'
import photo4 from './assets/photos/IMG_1555.JPG'
import photo5 from './assets/photos/IMG_1556.JPG'
import photo6 from './assets/photos/IMG_1604.jpeg'
import photo7 from './assets/photos/IMG_1609.jpeg'
import photo8 from './assets/photos/IMG_1614.jpeg'
import photo9 from './assets/photos/IMG_4610.JPG'
import photo10 from './assets/photos/IMG_4719.JPG'
import photo11 from './assets/photos/IMG_5595.PNG'
import photo12 from './assets/photos/IMG_5608.JPG'
import photo13 from './assets/photos/IMG_5650.PNG'
import photo14 from './assets/photos/IMG_5773.jpeg'
import photo15 from './assets/photos/IMG_6050.jpeg'
import photo16 from './assets/photos/IMG_7349.JPG'
import photo17 from './assets/photos/IMG_7355.jpeg'
import photo18 from './assets/photos/IMG_7358.jpeg'
import photo19 from './assets/photos/IMG_7361.jpeg'
import photo20 from './assets/photos/IMG_7364.jpeg'
import photo21 from './assets/photos/IMG_7413.jpeg'
import photo22 from './assets/photos/IMG_7418.jpeg'
import photo23 from './assets/photos/IMG_8318.PNG'
import photo24 from './assets/photos/IMG_8365.PNG'
import photo25 from './assets/photos/IMG_8444.JPG'
import photo26 from './assets/photos/IMG_9244.jpeg'
import photo27 from './assets/photos/IMG_9249.jpeg'
import photo28 from './assets/photos/IMG_9250.jpeg'
import photo29 from './assets/photos/IMG_9255.jpeg'
import photo30 from './assets/photos/IMG_9258.jpeg'
import photo31 from './assets/photos/IMG_9428.jpeg'
import photo32 from './assets/photos/IMG_9431.jpeg'
import photo33 from './assets/photos/IMG_9437.JPG'
import photo34 from './assets/photos/IMG_9439.JPG'
import photo35 from './assets/photos/b517a6fb-8fda-48d7-ace0-eb63608c7c2e.jpg'

// Import videos
import video1 from './assets/photos/3987382b01d34225bb1d230899e54c9c.MOV'
import video2 from './assets/photos/4B5AB871-A0BF-40D8-BBEF-706AFF968CEA.mp4'
import video3 from './assets/photos/785EEA76-DBB6-4F8F-93DF-D175030FD15A.MP4'
import video4 from './assets/photos/88007156-8F82-43C1-B0D0-BD7B63D44102.mov'
import video5 from './assets/photos/CB34F89F-D45D-4522-9FB4-74E6A68A4C6E.mp4'
import video6 from './assets/photos/E2FD6A42-41CD-4AE3-A64F-485C7CF04E56.mp4'
import video7 from './assets/photos/E5241136-9853-4248-B8BD-EBD1CD1F1DDF.mp4'
import video8 from './assets/photos/IMG_9234.MOV'
import video9 from './assets/photos/cm-chat-media-video-1:a736b71c-5ee4-5fba-bf7a-a1081ff5984b:4294:0:0.mov'
import video10 from './assets/photos/filtered-20EE980C-67F4-4606-836F-A514EDF3FD81.mp4'
import video11 from './assets/photos/filtered-ED8CFB74-EE66-45BF-8722-CF0B6F8AD192.mp4'

// Create media array with type info
const mediaList = [
  // Photos
  { src: photo1, type: 'image' },
  { src: photo2, type: 'image' },
  { src: photo3, type: 'image' },
  { src: photo4, type: 'image' },
  { src: photo5, type: 'image' },
  { src: photo6, type: 'image' },
  { src: photo7, type: 'image' },
  { src: photo8, type: 'image' },
  { src: photo9, type: 'image' },
  { src: photo10, type: 'image' },
  { src: photo11, type: 'image' },
  { src: photo12, type: 'image' },
  { src: photo13, type: 'image' },
  { src: photo14, type: 'image' },
  { src: photo15, type: 'image' },
  { src: photo16, type: 'image' },
  { src: photo17, type: 'image' },
  { src: photo18, type: 'image' },
  { src: photo19, type: 'image' },
  { src: photo20, type: 'image' },
  { src: photo21, type: 'image' },
  { src: photo22, type: 'image' },
  { src: photo23, type: 'image' },
  { src: photo24, type: 'image' },
  { src: photo25, type: 'image' },
  { src: photo26, type: 'image' },
  { src: photo27, type: 'image' },
  { src: photo28, type: 'image' },
  { src: photo29, type: 'image' },
  { src: photo30, type: 'image' },
  { src: photo31, type: 'image' },
  { src: photo32, type: 'image' },
  { src: photo33, type: 'image' },
  { src: photo34, type: 'image' },
  { src: photo35, type: 'image' },
  // Videos
  { src: video1, type: 'video' },
  { src: video2, type: 'video' },
  { src: video3, type: 'video' },
  { src: video4, type: 'video' },
  { src: video5, type: 'video' },
  { src: video6, type: 'video' },
  { src: video7, type: 'video' },
  { src: video8, type: 'video' },
  { src: video9, type: 'video' },
  { src: video10, type: 'video' },
  { src: video11, type: 'video' },
]

// Shuffle media randomly each time
const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const media = shuffleArray(mediaList)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)
  const [started, setStarted] = useState(false)
  const [answered, setAnswered] = useState(null)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [noButtonScale, setNoButtonScale] = useState(1)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const audioRef = useRef(null)
  const noButtonRef = useRef(null)
  const loadedCountRef = useRef(0)

  // Count only images for loading (videos load progressively)
  const totalImages = mediaList.filter(m => m.type === 'image').length

  const handleMediaLoad = () => {
    loadedCountRef.current += 1
    const progress = Math.round((loadedCountRef.current / totalImages) * 100)
    setLoadProgress(progress)
    
    if (loadedCountRef.current >= totalImages) {
      // Small delay for smooth transition
      setTimeout(() => setIsLoading(false), 500)
    }
  }

  // Fallback: hide loading after max 8 seconds even if not all loaded
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 8000)
    return () => clearTimeout(timeout)
  }, [])

  const handleStart = () => {
    setStarted(true)
    if (audioRef.current) {
      audioRef.current.volume = 0.5
      audioRef.current.play().catch(e => console.log('Audio play failed:', e))
    }
  }

  const handleYes = () => {
    setAnswered('yes')
  }

  const handleSongChange = (e) => {
    const newIndex = parseInt(e.target.value)
    setCurrentSongIndex(newIndex)
  }

  // Play new song when it changes
  useEffect(() => {
    if (started && audioRef.current) {
      audioRef.current.load()
      audioRef.current.play().catch(e => console.log('Audio play failed:', e))
    }
  }, [currentSongIndex, started])

  const handleNoHover = (e) => {
    // Get viewport dimensions
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    
    // Get button's current position
    const button = noButtonRef.current
    if (!button) return
    
    const buttonRect = button.getBoundingClientRect()
    const buttonCenterX = buttonRect.left + buttonRect.width / 2
    const buttonCenterY = buttonRect.top + buttonRect.height / 2
    
    // Calculate direction away from mouse
    const mouseX = e.clientX
    const mouseY = e.clientY
    
    // Vector from mouse to button center
    let dx = buttonCenterX - mouseX
    let dy = buttonCenterY - mouseY
    
    // Normalize and multiply by escape distance (100-150px)
    const distance = Math.sqrt(dx * dx + dy * dy) || 1
    const escapeDistance = 100 + Math.random() * 50
    
    dx = (dx / distance) * escapeDistance
    dy = (dy / distance) * escapeDistance
    
    // Add some randomness to make it less predictable
    dx += (Math.random() - 0.5) * 50
    dy += (Math.random() - 0.5) * 50
    
    // Calculate new position
    let newX = noButtonPosition.x + dx
    let newY = noButtonPosition.y + dy
    
    // Keep button within a smaller area (stays near the Yes button)
    const maxX = 180
    const maxY = 120
    
    // If button would go off screen, flip to the opposite side
    if (Math.abs(newX) > maxX) {
      newX = -newX * 0.8
    }
    if (Math.abs(newY) > maxY) {
      newY = -newY * 0.8
    }
    
    // Clamp to bounds
    newX = Math.max(-maxX, Math.min(maxX, newX))
    newY = Math.max(-maxY, Math.min(maxY, newY))
    
    setNoButtonPosition({ x: newX, y: newY })
    
    // Shrink the button slightly each time to make it harder to click
    setNoButtonScale(prev => Math.max(0.6, prev - 0.05))
  }

  return (
    <div className="app">
      {/* Background Music */}
      <audio ref={audioRef} loop src={songsList[currentSongIndex].src} />

      {/* Loading Screen */}
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-hearts">
            <span className="loading-heart heart-1">💕</span>
            <span className="loading-heart heart-2">💖</span>
            <span className="loading-heart heart-3">💕</span>
          </div>
          <h2 className="loading-text">Preparing something special...</h2>
          <div className="loading-bar-container">
            <div 
              className="loading-bar" 
              style={{ width: `${loadProgress}%` }}
            ></div>
          </div>
          <p className="loading-percent">{loadProgress}%</p>
        </div>
      )}

      {/* Photo/Video Collage Background */}
      <div className={`photo-collage ${isLoading ? 'hidden' : ''}`}>
        {media.map((item, index) => (
          <div
            key={index}
            className={`collage-item item-${index + 1}`}
          >
            {item.type === 'video' ? (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img 
                src={item.src} 
                alt="" 
                onLoad={handleMediaLoad}
                onError={handleMediaLoad}
              />
            )}
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className={`dark-overlay ${isLoading ? 'hidden' : ''}`}></div>

      {/* Floating Hearts */}
      <div className={`hearts-bg ${isLoading ? 'hidden' : ''}`}>
        {[...Array(12)].map((_, i) => (
          <div key={i} className="floating-heart" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}>💕</div>
        ))}
      </div>

      {/* Intro Screen */}
      {!isLoading && !started ? (
        <div className="intro-screen">
          <div className="intro-hearts">💕</div>
          <h1 className="intro-title">I Made This For You Ene m!</h1>
          <p className="intro-subtitle">Click to open your surprise...</p>
          <button className="btn-start" onClick={handleStart}>
            Open 💌
          </button>
        </div>
      ) : !isLoading ? (
        <div className={`content ${started ? 'content-visible' : ''}`}>
          {answered === null ? (
            <>
              {/* Song Selector */}
              <div className="song-selector">
                <span className="song-icon">🎵</span>
                <select 
                  value={currentSongIndex} 
                  onChange={handleSongChange}
                  className="song-dropdown"
                >
                  {songsList.map((song, index) => (
                    <option key={index} value={index}>
                      {song.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="main-heart">💖</div>
              <h1 className="title">Will You Be My Valentine?</h1>
              <p className="subtitle">I have never loved you less from the first day we started, I fall for you more every single day ✨</p>

              <div className="buttons">
                <button className="btn btn-yes" onClick={handleYes}>
                  Yes! 💝
                </button>
                <button
                  ref={noButtonRef}
                  className="btn btn-no"
                  onMouseEnter={handleNoHover}
                  onMouseMove={handleNoHover}
                  onClick={(e) => { e.preventDefault(); handleNoHover(e); }}
                  style={{
                    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px) scale(${noButtonScale})`,
                    transition: 'transform 0.2s ease-out'
                  }}
                >
                  No 😢
                </button>
              </div>
            </>
          ) : (
            <div className="success">
              {/* Song Selector */}
              <div className="song-selector">
                <span className="song-icon">🎵</span>
                <select 
                  value={currentSongIndex} 
                  onChange={handleSongChange}
                  className="song-dropdown"
                >
                  {songsList.map((song, index) => (
                    <option key={index} value={index}>
                      {song.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="success-hearts">💕💖💕</div>
              <h1 className="success-title">Yay! Ene M!🎉</h1>
              <p className="success-text">You've made me the happiest person again!</p>
              <p className="success-subtext">I can't wait to spend Valentine's Day with you 💝</p>
              <div className="love-animation">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="love-burst" style={{
                    animationDelay: `${i * 0.1}s`
                  }}>❤️</span>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default App
