/* eslint-disable react/prop-types */
function Hero(props) {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-start px-8 md:px-12 lg:px-24 text-white z-0"
      id="home"
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif">
          {props.title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-4">
          {props.discr}
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-[#C19A6B] hover:bg-[#A67B5B] text-white text-lg px-8 py-3 rounded-full transition"
        >
          {props.btn}
        </a>
      </div>
    </section>
  );
}

export default Hero;
