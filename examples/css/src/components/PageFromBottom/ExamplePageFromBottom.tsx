import React from "react";
import { PageFromBottom } from "./PageFromBottom";
import { Scroll } from "@silk-hq/components";
import "./ExamplePageFromBottom.css";

const ExamplePageFromBottom = () => {
  return (
    <PageFromBottom.Root>
      <PageFromBottom.Trigger className="ExamplePageFromBottom-presentTrigger">
        Page from Bottom
      </PageFromBottom.Trigger>
      <PageFromBottom.Portal>
        <PageFromBottom.View>
          <PageFromBottom.Backdrop />
          <PageFromBottom.Content>
            <Scroll.Root asChild>
              <Scroll.View className="ExamplePageFromBottom-scrollView" scrollGestureTrap={true}>
                <Scroll.Content asChild>
                  <article className="ExamplePageFromBottom-article">
                    <div className="ExamplePageFromBottom-illustration" />
                    <div className="ExamplePageFromBottom-articleContent">
                      <PageFromBottom.Title className="ExamplePageFromBottom-title" asChild>
                        <h1>The Rise of Minimalism: How Modern Architecture is Redefining Space</h1>
                      </PageFromBottom.Title>
                      <h2 className="ExamplePageFromBottom-subtitle">
                        Exploring how minimalism in architecture is transforming the way we design,
                        live, and interact with spaces.
                      </h2>
                      <div className="ExamplePageFromBottom-author">
                        by <span className="ExamplePageFromBottom-authorName">Frederik Hansen</span>
                      </div>
                      <section className="ExamplePageFromBottom-articleBody">
                        <p className="ExamplePageFromBottom-articleParagraph">
                          Minimalism in architecture has evolved far beyond a simple design trend.
                          Today, it is a defining philosophy that shapes how we conceive, create,
                          and inhabit our spaces. The sleek lines, open plans, and functional
                          designs that characterize minimalist architecture represent a shift toward
                          a more intentional, thoughtful use of space. As urban centers grow and
                          land becomes more valuable, the need for efficient, clean, and flexible
                          environments has never been more critical. But minimalism isn't just about
                          reducing clutter; it's a philosophy that encourages simplicity,
                          tranquility, and a connection to the essentials of living.
                        </p>
                        <p className="ExamplePageFromBottom-articleParagraph">
                          In its early stages, minimalism was driven by modernist principles,
                          particularly those of the Bauhaus movement, which sought to eliminate
                          ornamentation and focus on functional beauty. Architects like Ludwig Mies
                          van der Rohe, with his famous aphorism "Less is more," laid the groundwork
                          for the minimalist approach we recognize today. However, the term
                          "minimalism" has evolved in both meaning and execution, incorporating
                          elements of sustainability, flexibility, and even spirituality into its
                          design ethos. As a result, minimalist architecture today serves both an
                          aesthetic and a practical purpose, offering solutions for a variety of
                          contemporary challenges.
                        </p>
                        <p className="ExamplePageFromBottom-articleParagraph">
                          One of the key drivers behind the rise of minimalism is the desire for
                          more efficient use of space. As cities become more crowded, space is at a
                          premium, and the need to design smaller but more functional homes and
                          offices is becoming increasingly important. Minimalist architecture, with
                          its focus on open floor plans, multifunctional spaces, and streamlined
                          designs, offers an ideal solution. Rather than filling spaces with
                          excessive furnishings or decorative elements, minimalist designs allow
                          each square foot to serve a purpose, eliminating wasted space while
                          creating a sense of openness and freedom.
                        </p>
                        <p className="ExamplePageFromBottom-articleParagraph">
                          Incorporating natural light and clean lines is another hallmark of
                          minimalist design. These elements help to create a sense of peace and
                          serenity, which is central to the minimalist philosophy. Large windows,
                          often floor-to-ceiling, invite the outdoors in, connecting occupants with
                          nature and enhancing the feeling of openness. Natural materials such as
                          wood, stone, and concrete are commonly used, not just for their aesthetic
                          value but for their durability and sustainable qualities. This focus on
                          materials aligns with a growing global emphasis on sustainability in
                          design and construction.
                        </p>
                        <p className="ExamplePageFromBottom-articleParagraph">
                          The minimalist approach also encourages mindfulness in how we interact
                          with our surroundings. In a world filled with distractions, minimalist
                          spaces offer a reprieve—an opportunity to live more consciously. By
                          reducing the number of items in a space, the architecture itself can
                          encourage users to focus on the essentials, be it a piece of furniture, an
                          artwork, or even the sheer quality of light entering the room. This
                          fosters a deeper connection to one's environment and promotes a more
                          intentional lifestyle.
                        </p>
                        <p className="ExamplePageFromBottom-articleParagraph">
                          Technology has also played a significant role in the rise of minimalist
                          architecture. The integration of smart home systems, automated lighting,
                          and energy-efficient appliances enables modern minimalist homes to
                          function more efficiently. These technological advancements complement the
                          clean, simple lines of minimalist design by adding layers of functionality
                          that often go unnoticed. The seamless integration of technology into the
                          design makes it easier for residents to maintain a minimalist lifestyle
                          without sacrificing comfort or convenience.
                        </p>
                        <p className="ExamplePageFromBottom-articleParagraph">
                          Perhaps the most striking element of minimalist architecture is its
                          ability to blur the lines between interior and exterior. By creating open,
                          uninterrupted spaces and using materials that extend from the inside to
                          the outside, minimalist design allows the boundary between the two to
                          dissolve. This creates a sense of harmony and continuity, where nature and
                          architecture exist in perfect balance. As a result, many minimalist
                          designs incorporate elements such as courtyards, terraces, and green roofs
                          to invite nature into the living environment.
                        </p>
                        <p className="ExamplePageFromBottom-articleParagraph">
                          Finally, minimalist architecture is not just about visual aesthetics—it is
                          a tool for enhancing the quality of life. The rise of minimalism reflects
                          a growing recognition that our built environments have a profound impact
                          on our well-being. By creating spaces that are calm, efficient, and
                          uncluttered, architects are offering us a new way to interact with the
                          world around us. In the face of ever-increasing complexity in daily life,
                          minimalist architecture provides a welcome reminder that sometimes, less
                          truly is more.
                        </p>
                      </section>
                    </div>
                  </article>
                </Scroll.Content>
              </Scroll.View>
            </Scroll.Root>
          </PageFromBottom.Content>
        </PageFromBottom.View>
      </PageFromBottom.Portal>
    </PageFromBottom.Root>
  );
};

export { ExamplePageFromBottom };
