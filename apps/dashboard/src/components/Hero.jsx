function Hero() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-24">
      <h2 className="text-5xl font-bold max-w-4xl leading-tight">
        Websites that learn,
        <span className="text-blue-600"> adapt</span>,
        and improve themselves.
      </h2>

      <p className="text-gray-600 text-lg mt-6 max-w-2xl">
        AdaptiveAI helps businesses understand user behavior,
        personalize experiences, and continuously optimize their
        websites using Artificial Intelligence.
      </p>

      <button className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition">
        Get Started
      </button>
    </main>
  );
}

export default Hero;