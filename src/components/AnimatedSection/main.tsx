import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

// Define a SectionData type for better typing
interface SectionData {
  id: string;
  heading: string;
  backgroundImage: string;
}

const AnimatedSections = () => {
  // Update refs types to accept HTMLElement | null
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const outerRefs = useRef<(HTMLElement | null)[]>([]);
  const innerRefs = useRef<(HTMLElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const headingsRef = useRef<(HTMLElement | null)[]>([]);

  const sectionsData: SectionData[] = [
    {
      id: "first",
      heading: "Scroll down",
      backgroundImage:
        "https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920",
    },
    {
      id: "second",
      heading: "Animated with GSAP",
      backgroundImage:
        "https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920",
    },
    {
      id: "third",
      heading: "GreenSock",
      backgroundImage:
        "https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDk4Mg&ixlib=rb-1.2.1&q=75&w=1920",
    },
    {
      id: "fourth",
      heading: "Animation platform",
      backgroundImage:
        "https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDgzMQ&ixlib=rb-1.2.1&q=75&w=1920",
    },
    {
      id: "fifth",
      heading: "Keep scrolling",
      backgroundImage:
        "https://images.unsplash.com/photo-1617141636403-f511e2d5dc17?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxODAzMjc4Mw&ixlib=rb-1.2.1&q=75&w=1920",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(Observer);

    let currentIndex = -1;
    const wrap = gsap.utils.wrap(0, sectionsData.length);
    let animating = false;

    const gotoSection = (index: number, direction: number) => {
      index = wrap(index);
      animating = true;
      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;
      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => {
          animating = false;
        },
      });

      if (currentIndex >= 0) {
        gsap.set(sectionsRef.current[currentIndex], { zIndex: 0 });
        tl.to(imagesRef.current[currentIndex], { yPercent: -15 * dFactor }).set(
          sectionsRef.current[currentIndex],
          { autoAlpha: 0 }
        );
      }

      gsap.set(sectionsRef.current[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerRefs.current[index], innerRefs.current[index]],
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      )
        .fromTo(
          imagesRef.current[index],
          { yPercent: 15 * dFactor },
          { yPercent: 0 },
          0
        )
        .fromTo(
          headingsRef.current[index],
          { autoAlpha: 0, yPercent: 150 * dFactor },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: { each: 0.02, from: "random" },
          },
          0.2
        );

      currentIndex = index;
    };

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);
  }, []);

  return (
    <div>
      {sectionsData.map((section, index) => (
        <section
          key={section.id}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="fixed w-full h-full top-0 invisible"
        >
          <div
            ref={(el) => (outerRefs.current[index] = el)}
            className="w-full h-full overflow-hidden"
          >
            <div
              ref={(el) => (innerRefs.current[index] = el)}
              className="w-full h-full overflow-hidden"
            >
              <img
                ref={(el) => (imagesRef.current[index] = el)}
                src={section.backgroundImage}
                alt={`Background for ${section.heading}`}
                className="absolute h-full w-full top-0 object-cover z-10"
              />
              <h2
                ref={(el) => (headingsRef.current[index] = el)}
                className="z-20 absolute text-center  top-[50%]  w-full"
              >
                <div
                  className="w-full  flex text-5xl font-primary text-secondary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)]
 justify-center"
                >
                  {section.heading}
                </div>
              </h2>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AnimatedSections;







gunavarma
  11:49 AM
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

// Define a SectionData type for better typing
interface SectionData {
  id: string;
  heading: string;
  backgroundImage: string;
}

const AnimatedSections = () => {
  // Update refs types to accept HTMLElement | null
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const outerRefs = useRef<(HTMLElement | null)[]>([]);
  const innerRefs = useRef<(HTMLElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const headingsRef = useRef<(HTMLElement | null)[]>([]);

  const sectionsData: SectionData[] = [
    {
      id: "first",
      heading: "Scroll down",
      backgroundImage:
        "https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920",
    },
    {
      id: "second",
      heading: "Animated with GSAP",
      backgroundImage:
        "https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920",
    },
    {
      id: "third",
      heading: "GreenSock",
      backgroundImage:
        "https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDk4Mg&ixlib=rb-1.2.1&q=75&w=1920",
    },
    {
      id: "fourth",
      heading: "Animation platform",
      backgroundImage:
        "https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDgzMQ&ixlib=rb-1.2.1&q=75&w=1920",
    },
    {
      id: "fifth",
      heading: "Keep scrolling",
      backgroundImage:
        "https://images.unsplash.com/photo-1617141636403-f511e2d5dc17?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxODAzMjc4Mw&ixlib=rb-1.2.1&q=75&w=1920",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(Observer);

    let currentIndex = 1;
    const totalSections = sectionsData.length;
    let animating = false;

    const gotoSection = (index: number, direction: number) => {
      // Prevent navigation beyond first and last sections
      if (index < 0 || index >= totalSections) return;

      animating = true;
      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;
      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => {
          animating = false;
        },
      });

      if (currentIndex >= 0) {
        gsap.set(sectionsRef.current[currentIndex], { zIndex: 0 });
        tl.to(imagesRef.current[currentIndex], { yPercent: -15 * dFactor }).set(
          sectionsRef.current[currentIndex],
          { autoAlpha: 0 }
        );
      }

      gsap.set(sectionsRef.current[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerRefs.current[index], innerRefs.current[index]],
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      )
        .fromTo(
          imagesRef.current[index],
          { yPercent: 15 * dFactor },
          { yPercent: 0 },
          0
        )
        .fromTo(
          headingsRef.current[index],
          { autoAlpha: 0, yPercent: 150 * dFactor },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: { each: 0.02, from: "random" },
          },
          0.2
        );

      currentIndex = index;
    };

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);
  }, []);

  return (
    <div className="">
      {sectionsData.map((section, index) => (
        <section
          key={section.id}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="fixed w-full h-full top-0 invisible"
        >
          <div
            ref={(el) => (outerRefs.current[index] = el)}
            className="w-full h-full overflow-hidden"
          >
            <div
              ref={(el) => (innerRefs.current[index] = el)}
              className="w-full h-full overflow-hidden"
            >
              <img
                ref={(el) => (imagesRef.current[index] = el)}
                src={section.backgroundImage}
                alt={`Background for ${section.heading}`}
                className="absolute h-full w-full top-0 object-cover z-10"
              />
              <h2
                ref={(el) => (headingsRef.current[index] = el)}
                className="z-20 absolute text-center  top-[50%]  w-full"
              >
                <div
                  className="w-full  flex text-5xl font-primary text-secondary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)]
 justify-center"
                >
                  {section.heading}
                </div>
              </h2>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AnimatedSections;