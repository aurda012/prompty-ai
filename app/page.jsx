import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Welcome to Prompty AI
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          Discover real-world AI Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Prompty AI is an open-source AI prompting tool for the modern world to
        discover, create and share creative prompts.
      </p>

      <Feed />
    </section>
  );
};
export default Home;
