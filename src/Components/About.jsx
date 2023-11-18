import bright from "../assets/images/kobe.webp";

const About = () => {
  return (
    <section className="mobile md:tablet xl:desktop md:grid grid-cols-2">
      <picture>
        <img src={bright} type="image/webp" alt="A picture of Bright Orton" className="h-[34.6rem] md:h-[60rem] w-full md:w-[54rem] object-cover" />
      </picture>
      <div>
        <h2>about me</h2>
        <p>
          Hey there! I&apos;m a budding front-end developer on the lookout for an
          exhilarating opportunity in the tech realm. My forte lies in crafting
          HTML that&apos;s accessible to everyone, harnessing the latest CSS
          techniques, and weaving pristine JavaScript code. My JavaScript
          expertise primarily orbits around React, but I&apos;m all about
          versatility—ready to embrace any tool that the job demands. While
          rooted in Accra, Ghana, I thrive in remote work setups, seasoned with
          a solid background in collaborative remote teams. Beyond the screen,
          you&apos;ll catch me reveling in the great outdoors. Whether it&apos;s
          strolling, jogging, or pedaling through nature&apos;s wonders, count me in!
          Curious about my work? I&apos;d be thrilled for you to take a peek.
        </p>
      </div>
    </section>
  );
};

export default About;
