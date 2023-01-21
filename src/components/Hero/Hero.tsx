import './Hero.scss';

type PropsType = {
  background: string;
  title: string;
  subtitle?: string;
  height?: number;
};

const Hero = ({ background, title, subtitle, height }: PropsType) => (
  <div
    className="hero content-wrapper"
    style={{
      backgroundImage: `url(${background})`,
      height: `${height || 340}px`,
    }}
  >
    <div className="hero-content">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
    </div>
  </div>
);

export default Hero;
