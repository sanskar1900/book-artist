import "./LoadingIndicator.css";

const LoadingIndicator = () => {
  return (
    <div
      duration={2}
      delay={0.5}
      animationRepeat="once"
      className="loading-container"
    >
      <section>
        <div className="loading loading02">
          <span>A</span>
          <span>r</span>
          <span>t</span>
          <span>i</span>
          <span>s</span>
          <span>t</span>

          <span>N</span>
          <span>e</span>
          <span>x</span>
          <span>t</span>

          <span>D</span>
          <span>o</span>
          <span>o</span>
          <span>r</span>
        </div>
      </section>
    </div>
  );
};

export default LoadingIndicator;
