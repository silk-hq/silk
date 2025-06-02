import { Page } from "./Page";
import { Scroll, VisuallyHidden } from "@silk-hq/components";
import "./ExamplePage.css";

const ExamplePage = () => {
  return (
    <Page.Root>
      <Page.Trigger className="ExamplePage-presentTrigger">Page</Page.Trigger>
      <Page.Portal>
        <Page.View>
          <Page.Backdrop />
          <Page.Content>
            <Scroll.Root asChild>
              <Scroll.View className="ExamplePage-scrollView">
                <Scroll.Content asChild>
                  <article className="ExamplePage-article">
                    <div className="ExamplePage-illustration" />
                    <div className="ExamplePage-articleContent">
                      <Page.Title className="ExamplePage-title" asChild>
                        <h1>Starting Small, Dreaming Big: Finding Your Passion in Sports</h1>
                      </Page.Title>
                      <h2 className="ExamplePage-subtitle">
                        Discover how small beginnings can lead to big achievements in the world of
                        athletics
                      </h2>
                      <div className="ExamplePage-author">
                        by <span className="ExamplePage-authorName">Lorenzo Moretti</span>
                      </div>
                      <section className="ExamplePage-articleBody">
                        <p className="ExamplePage-articleParagraph">
                          In the realm of sports, every legendary journey begins with a single,
                          often humble, step. Whether it's a child kicking their first soccer ball
                          in the backyard or a teenager picking up a basketball for the first time,
                          these small beginnings hold the potential for greatness. The path to
                          athletic excellence is paved with dedication, perseverance, and an
                          unyielding passion that drives individuals to push beyond their limits.
                        </p>

                        <p className="ExamplePage-articleParagraph">
                          For many athletes, the spark of passion is ignited in the most unexpected
                          places. It could be a local community center, a school playground, or even
                          a makeshift court in a neighborhood park. These unassuming settings become
                          the breeding grounds for dreams that will one day take flight on the
                          grandest stages. The key is to recognize and nurture that initial spark,
                          allowing it to grow into a flame that fuels a lifelong pursuit.
                        </p>

                        <p className="ExamplePage-articleParagraph">
                          Take, for example, the story of a young girl named Emma who discovered her
                          love for running during a school sports day. What started as a simple race
                          against her classmates evolved into a deep-seated passion for track and
                          field. Emma's journey from a novice runner to a competitive athlete was
                          marked by countless early morning training sessions, late-night strategy
                          meetings with her coach, and a relentless drive to improve.
                        </p>

                        <p className="ExamplePage-articleParagraph">
                          Emma's story is not unique. Across the globe, countless individuals find
                          their passion in sports through small, incremental steps. A boy picking up
                          a tennis racket for the first time might not envision himself competing at
                          Wimbledon, but with each serve and volley, he builds the foundation for a
                          future in the sport. The beauty of sports lies in its ability to transform
                          these small moments into monumental achievements.
                        </p>

                        <p className="ExamplePage-articleParagraph">
                          One of the most inspiring aspects of sports is its inclusivity. Whether
                          you're a natural talent or someone who struggles to keep up, there's a
                          place for everyone. The journey from beginner to expert is filled with
                          challenges and setbacks, but it's also a testament to the power of
                          resilience. Every failure is an opportunity to learn and grow, and every
                          success is a celebration of the hard work and dedication that went into
                          achieving it.
                        </p>

                        <p className="ExamplePage-articleParagraph">
                          For those who dream big, the path to success is often fraught with
                          obstacles. Injuries, financial constraints, and personal struggles can all
                          pose significant challenges. However, it's in these moments of adversity
                          that true champions are forged. The ability to overcome these hurdles and
                          continue pursuing one's passion is what sets apart the extraordinary from
                          the ordinary.
                        </p>

                        <p className="ExamplePage-articleParagraph">
                          The role of mentors and coaches cannot be overstated in the journey of an
                          athlete. These individuals provide guidance, support, and encouragement,
                          helping athletes navigate the complexities of their sport. A good coach
                          can see the potential in a young athlete and help them develop the skills
                          and mindset needed to excel. They are the unsung heroes who stand behind
                          every great achievement, their dedication and belief in their athletes
                          serving as a beacon of hope and inspiration.
                        </p>

                        <p className="ExamplePage-articleParagraph">
                          As athletes progress in their journey, they often find that their passion
                          for sports extends beyond personal achievement. Many become advocates for
                          their sport, inspiring others to take up the mantle and pursue their own
                          dreams. They become role models, embodying the values of hard work,
                          dedication, and perseverance. Their stories serve as a reminder that
                          greatness is not reserved for the privileged few, but is within reach of
                          anyone willing to put in the effort.
                        </p>

                        <p className="ExamplePage-articleParagraph">
                          In the end, the journey of an athlete is not just about winning medals or
                          breaking records. It's about the personal growth and self-discovery that
                          comes from pursuing a passion with unwavering dedication. It's about the
                          friendships forged, the lessons learned, and the memories created along
                          the way. These are the true rewards of a life dedicated to sports, and
                          they are what make the journey worthwhile.
                        </p>

                        <p className="ExamplePage-articleParagraph">
                          So, whether you're a young dreamer just starting out or an experienced
                          athlete looking to take your passion to the next level, remember that
                          every great journey begins with a small step. Embrace the challenges,
                          cherish the victories, and never lose sight of the passion that drives
                          you. For it is in the pursuit of our dreams that we truly find ourselves,
                          and it is in the world of sports that we discover the limitless potential
                          that lies within us all.
                        </p>
                      </section>
                    </div>
                  </article>
                </Scroll.Content>
              </Scroll.View>
            </Scroll.Root>
            <Page.Trigger action="dismiss" asChild>
              <button className="ExamplePage-dismissTrigger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ExamplePage-dismissIcon"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <VisuallyHidden.Root>Dismiss Sheet</VisuallyHidden.Root>
              </button>
            </Page.Trigger>
          </Page.Content>
        </Page.View>
      </Page.Portal>
    </Page.Root>
  );
};

export { ExamplePage };
