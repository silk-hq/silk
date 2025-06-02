"use client";
import { useCallback, useState } from "react";
import { Scroll } from "@silk-hq/components";
import { SheetWithStackingStack, SheetWithStacking } from "./SheetWithStacking";
import "./ExampleSheetWithStacking.css";

// ================================================================================================
// Data
// ================================================================================================

const ExampleSheetWithStackingData = {
  name: "Erik Johansson",
  username: "erikjohansson",
  followers: 387,
  following: 453,
  posts: 64,
  bio: "Storyteller, dreamer, and lover of words. Crafting narratives that inspire and connect.",

  content: [
    {
      name: "Erik Johansson",
      username: "erikjohansson",
      hoursPast: 1,
      content: [
        "Starting my day with a fresh cup of coffee and a new chapter. Writing is both a challenge and a joy, and today feels like a good day for creativity!",
      ],
      commentsCount: 28,
      sharesCount: 10,
      likesCount: 75,
    },
    {
      reposted: true,

      name: "Olivia Dupont",
      username: "oliviadupont",
      hoursPast: 5,
      content: [
        "Tried a new recipe today! It was a mix of bold flavors and fresh ingredients. Cooking has become my new passion.",
      ],
      commentsCount: 14,
      sharesCount: 5,
      likesCount: 38,
    },
    {
      name: "Erik Johansson",
      username: "erikjohansson",
      hoursPast: 7,
      content: [
        "A good book and a quiet evening—nothing beats that. What are you all reading this week? 📚",
      ],
      commentsCount: 20,
      sharesCount: 7,
      likesCount: 65,
    },
  ],
  nestedSheet: {
    name: "Sophie Dubois",
    username: "sophiedubois",
    followers: 465,
    following: 239,
    posts: 47,
    bio: "Author of captivating contemporary fiction. Creating stories that resonate.",

    content: [
      {
        name: "Sophie Dubois",
        username: "sophiedubois",
        hoursPast: 1,
        content: [
          "Excited to share a sneak peek of my upcoming novel! This story has been a journey, and I can't wait for you all to read it.",
        ],
        commentsCount: 30,
        sharesCount: 12,
        likesCount: 80,
      },
      {
        reposted: true,

        name: "Liam Müller",
        username: "liammuller",
        hoursPast: 3,
        content: [
          "Spent the weekend hiking in the mountains. The views were breathtaking, and the fresh air was invigorating. We spotted some wildlife and enjoyed the beauty of nature.",
          "Can't wait to plan the next adventure and explore more of what the great outdoors has to offer.",
        ],
        commentsCount: 20,
        sharesCount: 8,
        likesCount: 60,
      },
      {
        reposted: true,

        name: "Olivia Dupont",
        username: "oliviadupont",
        hoursPast: 5,
        content: [
          "Finally got around to reading that book everyone's been talking about. The characters were well-developed, and the plot kept me on the edge of my seat. 📚✨",
        ],
        commentsCount: 12,
        sharesCount: 3,
        likesCount: 35,
      },
    ],
  },
};

// ================================================================================================
// View
// ================================================================================================

const ExampleSheetWithStackingView = ({ data: propsData }: any) => {
  const data = propsData ?? ExampleSheetWithStackingData;

  const [scrolled, setScrolled] = useState(false);
  const travelStatusChangeHandler = useCallback((travelStatus: string) => {
    if (travelStatus === "idleOutside") setTimeout(() => setScrolled(false), 50);
  }, []);

  return (
    <SheetWithStacking.Portal>
      <SheetWithStacking.View onTravelStatusChange={travelStatusChangeHandler}>
        <SheetWithStacking.Backdrop />
        <SheetWithStacking.Content>
          <div className="ExampleSheetWithStacking-content">
            <Scroll.Root className="ExampleSheetWithStacking-scrollRoot">
              <Scroll.View
                className="ExampleSheetWithStacking-scrollView"
                scrollGestureTrap={{ yEnd: true }}
                onScroll={({ distance }) => setScrolled(distance > 0)}
              >
                <Scroll.Content className="ExampleSheetWithStacking-scrollContent">
                  <div className="ExampleSheetWithStacking-banner" />
                  <div className="ExampleSheetWithStacking-profilePicture" />
                  <div className="ExampleSheetWithStacking-info">
                    <div className="ExampleSheetWithStacking-identification">
                      <SheetWithStacking.Title className="ExampleSheetWithStacking-name">
                        {data.name}
                      </SheetWithStacking.Title>
                      <div className="ExampleSheetWithStacking-username">@{data.username}</div>
                    </div>

                    <div className="ExampleSheetWithStacking-metrics">
                      <div className="ExampleSheetWithStacking-metric">
                        <span className="ExampleSheetWithStacking-metricCount">
                          {data.followers}
                        </span>
                        <span className="ExampleSheetWithStacking-metricLabel"> followers</span>
                      </div>

                      <div className="ExampleSheetWithStacking-metric">
                        <span className="ExampleSheetWithStacking-metricCount">
                          {data.following}
                        </span>
                        <span className="ExampleSheetWithStacking-metricLabel"> following</span>
                      </div>

                      <div className="ExampleSheetWithStacking-metric">
                        <span className="ExampleSheetWithStacking-metricCount">{data.posts}</span>
                        <span className="ExampleSheetWithStacking-metricLabel"> posts</span>
                      </div>
                    </div>

                    <div className="ExampleSheetWithStacking-bio">{data.bio}</div>
                  </div>
                  <div className="ExampleSheetWithStacking-postsContainer">
                    <section className="ExampleSheetWithStacking-posts">
                      {data.content.map((post: any, index: number) => (
                        <div className="ExampleSheetWithStacking-post" key={index}>
                          {post.reposted && (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ExampleSheetWithStacking-postRepostIcon"
                              >
                                <path d="m2 9 3-3 3 3" />
                                <path d="M13 18H7a2 2 0 0 1-2-2V6" />
                                <path d="m22 15-3 3-3-3" />
                                <path d="M11 6h6a2 2 0 0 1 2 2v10" />
                              </svg>

                              <div className="ExampleSheetWithStacking-postRepostText">
                                {data.name} reposted
                              </div>
                            </>
                          )}
                          <div className="ExampleSheetWithStacking-postProfilePicture" />
                          <div className="ExampleSheetWithStacking-postContent">
                            <div className="ExampleSheetWithStacking-postHeader">
                              <div className="ExampleSheetWithStacking-postName">
                                {post.username}
                              </div>
                              <div>@{post.username}</div>
                              <div>·</div>
                              <div>{post.hoursPast}h</div>
                            </div>
                            <div className="ExampleSheetWithStacking-postBody">
                              {post.content.map((paragraph: string, index: number) => (
                                <p className="ExampleSheetWithStacking-postParagraph" key={index}>
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                            <div className="ExampleSheetWithStacking-postActions">
                              <div className="ExampleSheetWithStacking-postAction">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.05"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                <div>{post.commentsCount}</div>
                              </div>
                              <div className="ExampleSheetWithStacking-postAction">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="23"
                                  height="23"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.6"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m2 9 3-3 3 3" />
                                  <path d="M13 18H7a2 2 0 0 1-2-2V6" />
                                  <path d="m22 15-3 3-3-3" />
                                  <path d="M11 6h6a2 2 0 0 1 2 2v10" />
                                </svg>
                                <div>{post.sharesCount}</div>
                              </div>
                              <div className="ExampleSheetWithStacking-postAction">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.05"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                </svg>
                                <div>{post.likesCount}</div>
                              </div>

                              <div className="ExampleSheetWithStacking-postAction">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                  <polyline points="16 6 12 2 8 6" />
                                  <line x1="12" x2="12" y1="2" y2="15" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </section>

                    {data.nestedSheet && (
                      <SheetWithStacking.Root>
                        <div className="ExampleSheetWithStacking-relatedPages">
                          <SheetWithStacking.Trigger className="ExampleSheetWithStacking-presentTrigger">
                            Sheet with Stacking
                          </SheetWithStacking.Trigger>
                        </div>
                        <ExampleSheetWithStackingView data={data.nestedSheet} />
                      </SheetWithStacking.Root>
                    )}
                  </div>
                </Scroll.Content>
              </Scroll.View>
            </Scroll.Root>
            <div className={`ExampleSheetWithStacking-topBar fullyVisible-${scrolled}`}>
              <SheetWithStacking.Trigger
                className="ExampleSheetWithStacking-dismissTrigger"
                action="dismiss"
              >
                {/* Chevron icons */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`ExampleSheetWithStacking-topDismissChevronIcon fullyVisible-${scrolled}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`ExampleSheetWithStacking-flowDismissChevronIcon fullyVisible-${scrolled}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>

                {/* Cross icons */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`ExampleSheetWithStacking-topDismissCrossIcon fullyVisible-${scrolled}`}
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`ExampleSheetWithStacking-flowDismissCrossIcon fullyVisible-${scrolled}`}
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </SheetWithStacking.Trigger>
            </div>
          </div>
        </SheetWithStacking.Content>
      </SheetWithStacking.View>
    </SheetWithStacking.Portal>
  );
};

// ================================================================================================
// Full component
// ================================================================================================

const ExampleSheetWithStacking = () => {
  return (
    <SheetWithStackingStack.Root asChild>
      <SheetWithStacking.Root>
        <SheetWithStacking.Trigger className="ExampleSheetWithStacking-presentTrigger">
          Sheet with Stacking
        </SheetWithStacking.Trigger>
        <ExampleSheetWithStackingView />
      </SheetWithStacking.Root>
    </SheetWithStackingStack.Root>
  );
};

export { ExampleSheetWithStacking };
