import '../../src/webAnimation.css'

const WaveAnimation = () => {
    return (
      <div className="wave-container">
        <div className="wave-content">
          <p></p>
        </div>
        <svg
          className="waves"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    );
  };
  
  export default WaveAnimation;