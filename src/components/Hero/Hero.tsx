import './Hero.scss';

type PropsType = {
  background: string;
  title?: string;
  subtitle?: string;
  height?: number;
  heightUnit?: 'px' | 'vh';
};

const Hero = ({
  background,
  title,
  subtitle,
  height,
  heightUnit,
}: PropsType) => (
  <div
    className="hero content-wrapper"
    style={{
      backgroundImage: `url(${background})`,
      height: `${height || 340}${heightUnit || 'px'}`,
    }}
  >
    <div className="hero-content">
      {title && <h1 className="hero-title">{title}</h1>}
      {subtitle && <p className="hero-subtitle">{subtitle}</p>}
    </div>
  </div>
);

export default Hero;
