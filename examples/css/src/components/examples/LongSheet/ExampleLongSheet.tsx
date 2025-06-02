import React, { useContext } from "react";
import { Sheet } from "@silk-hq/components";
import { LongSheet } from "./LongSheet";
import "./ExampleLongSheet.css";
import { SheetDismissButton } from "@/components/examples/_GenericComponents/SheetDismissButton/SheetDismissButton";

import Image from "next/image";
import picture from "./../../../app/images/image7.jpg";
import image from "./../../../app/images/thumbnails/LongSheet.png";
import { SheetTriggerCard } from "@/components/app/SheetTriggerCard/SheetTriggerCard";

const ExampleLongSheet = () => {
  return (
    <LongSheet
      presentTrigger={
        <SheetTriggerCard color="blue">Long Sheet</SheetTriggerCard>
      }
      sheetContent={
        <article className="ExampleLongSheet-article">
          <div className="ExampleLongSheet-illustration" />
          <Sheet.Trigger
            className="ExampleLongSheet-dismissTrigger"
            action="dismiss"
            asChild
          >
            <SheetDismissButton />
          </Sheet.Trigger>
          <div className="ExampleLongSheet-articleContent">
            <Sheet.Title className="ExampleLongSheet-title" asChild>
              <h1>Beneath the Golden Sky: A House in the Fields</h1>
            </Sheet.Title>
            <h2 className="ExampleLongSheet-subtitle">
              Where the Winds Carry Forgotten Stories
            </h2>
            <div className="ExampleLongSheet-author">
              by{" "}
              <span className="ExampleLongSheet-authorName">
                Elara Whitmore
              </span>
            </div>
            <section className="ExampleLongSheet-articleBody">
              <p className="ExampleLongSheet-articleParagraph">
                In the heart of the vast, golden fields, where the sky met the
                earth in a tender embrace, stood a solitary house. It was not
                merely a house, but a sanctuary of memories and echoes of
                laughter that had long since faded. The house, a humble
                two-story structure, was nestled amidst a sea of wheat that
                swayed gently with the breeze. Its faded white walls and rustic
                charm told tales of a simpler time, when life moved at a slower
                pace and the world seemed a little kinder.
              </p>

              <p className="ExampleLongSheet-articleParagraph">
                The house had been built by the hands of a man named Thomas, a
                farmer with a heart as vast as the fields he tended. He had
                poured his soul into every beam and nail, crafting a home that
                would shelter his family for generations. The roof, though now
                slightly worn, still bore the imprint of his careful
                craftsmanship. The windows, though dusty, still held the
                reflection of the golden sky that stretched endlessly above.
              </p>

              <p className="ExampleLongSheet-articleParagraph">
                Inside, the house was a treasure trove of forgotten stories. The
                walls were adorned with faded photographs, each capturing a
                moment in time that was now but a distant memory. There were
                pictures of Thomas and his wife, Martha, their faces beaming
                with joy on their wedding day. There were snapshots of their
                children, growing from tiny infants to young adults, their lives
                intertwined with the rhythm of the fields.
              </p>

              <p className="ExampleLongSheet-articleParagraph">
                The kitchen, with its old wooden table and cast-iron stove, was
                the heart of the home. It was here that Martha had prepared
                countless meals, her hands kneading dough with the same love
                that she poured into her family. The aroma of freshly baked
                bread and hearty stews still lingered in the air, a ghostly
                reminder of the warmth that had once filled the house.
              </p>

              <p className="ExampleLongSheet-articleParagraph">
                Upstairs, the bedrooms were quiet and still, their occupants
                long since moved on. The beds were neatly made, the quilts
                hand-stitched by Martha with patterns that told stories of their
                own. In the smallest room, a tiny crib stood in the corner, a
                silent testament to the hopes and dreams that had once been
                nurtured within these walls.
              </p>

              <p className="ExampleLongSheet-articleParagraph">
                Outside, the fields stretched as far as the eye could see, a
                golden sea that whispered secrets to the wind. The wheat rustled
                softly, its gentle murmur a lullaby that had soothed many a
                weary soul. The fields had seen countless sunrises and sunsets,
                their golden hues painting the sky with a beauty that was both
                fleeting and eternal.
              </p>

              <p className="ExampleLongSheet-articleParagraph">
                The house had witnessed joy and sorrow, birth and death, and
                everything in between. It had stood steadfast through storms and
                droughts, its foundations deeply rooted in the earth. It had
                been a beacon of hope and a sanctuary of love, a testament to
                the resilience of the human spirit.
              </p>

              <p className="ExampleLongSheet-articleParagraph">
                As the years passed, the house began to show signs of age. The
                paint peeled, the roof sagged, and the fields around it grew
                wild and untamed. Yet, despite its wear and tear, the house
                retained an aura of dignity and grace. It was as if the very
                walls remembered the love and laughter that had once filled
                them, and they refused to let go.
              </p>

              <p className="ExampleLongSheet-articleParagraph">
                One day, a young couple stumbled upon the house while exploring
                the countryside. They were captivated by its rustic charm and
                the stories it seemed to whisper. They decided to restore the
                house to its former glory, breathing new life into its worn
                walls and faded memories. As they worked, they felt a connection
                to the past, a sense of continuity that linked them to Thomas
                and Martha and all who had come before.
              </p>

              <p className="ExampleLongSheet-articleParagraph">
                And so, the house in the fields stood once more, its walls
                echoing with new laughter and fresh dreams. The golden sky above
                watched over it, carrying the forgotten stories on the winds,
                ensuring that the spirit of the house lived on, forever
                intertwined with the rhythm of the fields and the passage of
                time.
              </p>
            </section>
          </div>
        </article>
      }
    />
  );
};

export { ExampleLongSheet };
