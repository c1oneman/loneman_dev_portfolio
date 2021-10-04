const Hero = ({ h1, h2, p }) => {
  return (
    <div className="w-full sm:px-6 lg:px-8 mx-auto bg-gradient-to-r from-yellow-600 sm:via-pink-500 to-red-500 flex justify-center">
      <div class="max-w-6xl py-6 text-center sm:py-36 sm:px-0">
        <h1 class="text-4xl w-full tracking-tight font-bold text-gray-50 sm:text-5xl md:text-6xl">
          <span class="block xl:inline">{h1}</span>
        </h1>
        <h2 class="text-2xl w-full tracking-tight font-bold text-gray-200 sm:text-3xl md:text-4xl p-2">
          {h2}
        </h2>
        <p class="text-2xl w-full sm:w-full tracking-tight font-mediumtext-gray-200 sm:text-2xl md:text-3xl p-2">
          {p}
        </p>
      </div>
    </div>
  );
};

export default Hero;
