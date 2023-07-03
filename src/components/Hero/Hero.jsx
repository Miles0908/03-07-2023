import "./index.scss";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__img">
        <img
          src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-05/81aa90d0-36bd-11eb-a219-73e9ca8fa2ef.jpg"
          alt="hero img"
        />
        <div className="Hero__Text">
          <h2>Choose you're best shrooms for this adventure</h2>
          <button className="Hero__btn">
            <a href="https://funghimagazine.it/">Choose it</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
