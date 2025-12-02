import './App.css';

function App() {
  // Создаём частицы для фона
  const particles = Array.from({ length: 50 }, (_, i) => i);
  
  return (
    <>
      {/* Видео фон */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      
      {/* Светящиеся частицы */}
      <div className="particles">
        {particles.map((i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 2}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>
      
      <div className="main-content">
        <div className="photo-container">
          <div className="photo-wrapper">
            {/* Пульсирующие кольца */}
            <div className="pulse-ring pulse-ring-1"></div>
            <div className="pulse-ring pulse-ring-2"></div>
            <div className="pulse-ring pulse-ring-3"></div>
            
            {/* Светящееся свечение */}
            <div className="glow-effect"></div>
            
            <img src="/photo.jpeg" alt="Photo" className="main-photo" />
          </div>
          
          {/* Имя под фото */}
          <div className="name-container">
            <h1 className="name">Elizabeth Silkina</h1>
            <div className="name-underline"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

