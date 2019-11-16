import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";
import styled from "@emotion/styled";
import { ParallaxBanner } from "react-scroll-parallax";
import Container from "../components/container";

/** convert a markdown string from a frontmatter field into an HTML string so it can be rendered */
function mdStringToHTML(mdString) {
  return remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(mdString)
    .toString();
}

const SectionWithHeader = styled.section`
  .parallax-inner {
    z-index: 1;
  }
  h1 {
    position: absolute;
    left: 50px;
    bottom: -10px;
    z-index: 2;
    margin: 0;
    font-size: 60px;
    line-height: 1;
    color: #fff;

    @media (max-width: 500px) {
      left: 20px;
      bottom: -7px;
      font-size: 40px;
    }
  }
`;

const SectionWithImage = styled.section`
  background-color: #9ed9f5;
  padding: 30px 50px;

  @media (max-width: 500px) {
    padding: 10px 20px;
  }

  .no-padding {
    padding: 0 0 50px;
  }
  img {
    float: right;
    margin: 0 0 30px 30px;
    width: 50%;

    @media (max-width: 500px) {
      float: none;
      margin: 0;
      width: 100%;
    }
  }
`;

const SectionProse = styled.div`
  padding: 30px 50px;

  @media (max-width: 500px) {
    padding: 10px 20px;
  }

  p {
    line-height: 1.6;
  }

  ul {
    margin-left: 20px;
  }

  &.hasHighlight {
    background-color: #9ed9f5;
    margin-bottom: 50px;
  }

  &.intro {
    p {
      font-size: 22px;
    }
  }
`;

const SectionBlank = styled.section`
  margin-bottom: 50px;
  padding: 30px 50px;

  @media (max-width: 500px) {
    padding: 10px 20px;
  }
`;

const SectionBoard = styled.section`
  margin-bottom: 50px;
  padding: 30px 50px;

  @media (max-width: 500px) {
    padding: 10px 20px;
  }

  .members {
    display: flex;
    justify-content: center;
    margin: 0 -50px;

    @media (max-width: 767px) {
      flex-wrap: wrap;
    }

    @media (max-width: 550px) {
      display: block;
      margin: 0;
    }

    > div {
      max-width: 280px;
      flex: 0 0 40%;
      padding: 0 20px;

      @media (max-width: 550px) {
        margin: 0 auto;
      }

      img {
        border: 1px solid #f0f0f0;
        border-radius: 50%;
      }
    }

    ul {
      margin: 0 0 20px 20px;
      padding: 0;
    }
  }
`;

const MajorPoint = styled.aside`
  margin: 50px 0;
  background-color: #9ed9f5;
  padding: 50px;

  @media (max-width: 500px) {
    padding: 10px 20px;
  }
`;

const Quote = styled.blockquote`
  margin: 0;

  p {
    font-size: 18px;
    font-style: italic;
  }
  cite {
    font-style: normal;

    &:before {
      content: "- ";
    }
  }
`;

const home = ({ data }) => {
  const pageContent = data.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <>
      <Container>
        {/* Introduction */}

        <section>
          <SectionProse
            className="hasHighlight intro"
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.intro.section1),
            }}
          />
          <img src={pageContent.intro.image} alt="page introduction" />
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.intro.section2),
            }}
          />
        </section>

        {/* About */}

        <SectionWithHeader id="about">
          <ParallaxBanner
            className="parallax-title"
            layers={[
              {
                image: pageContent.about.image,
                amount: 0.5,
              },
            ]}
            style={{
              height: "200px",
            }}
          >
            <h1>{pageContent.about.title}</h1>
          </ParallaxBanner>
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.about.prose),
            }}
          />
        </SectionWithHeader>
      </Container>
      <MajorPoint>
        <Container>
          {/* Quote */}

          <Quote>
            <p>{pageContent.aside1.prose}</p>
            <footer>
              <cite>{pageContent.aside1.attribution}</cite>
            </footer>
          </Quote>
        </Container>
      </MajorPoint>
      <Container>
        {/* Mission */}

        <SectionWithHeader id="mission">
          <ParallaxBanner
            className="parallax-title"
            layers={[
              {
                image: pageContent.mission.image,
                amount: 0.5,
              },
            ]}
            style={{
              height: "200px",
            }}
          >
            <h1>{pageContent.mission.title}</h1>
          </ParallaxBanner>
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.mission.prose),
            }}
          />
        </SectionWithHeader>

        {/* Approach */}

        <SectionWithHeader id="approach">
          <ParallaxBanner
            className="parallax-title"
            layers={[
              {
                image: pageContent.approach1.image,
                amount: 0.5,
              },
            ]}
            style={{
              height: "200px",
            }}
          >
            <h1>{pageContent.approach1.title}</h1>
          </ParallaxBanner>
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.approach1.prose),
            }}
          />
        </SectionWithHeader>
      </Container>

      {/* Quote */}

      <MajorPoint>
        <Container>
          <Quote>
            <p>{pageContent.aside2.prose}</p>
            <footer>
              <cite>{pageContent.aside2.attribution}</cite>
            </footer>
          </Quote>
        </Container>
      </MajorPoint>

      {/* Second part of Approach */}

      <Container>
        <section>
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.approach2),
            }}
          />
        </section>

        {/* Resources */}

        <SectionWithHeader id="resources">
          <ParallaxBanner
            className="parallax-title"
            layers={[
              {
                image: pageContent.resources.image,
                amount: 0.5,
              },
            ]}
            style={{
              height: "200px",
            }}
          >
            <h1>{pageContent.resources.title}</h1>
          </ParallaxBanner>
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.resources.prose),
            }}
          />
        </SectionWithHeader>

        {/* Leadership */}

        <SectionWithImage id="leadership">
          <h1>{pageContent.leadership.title}</h1>
          <img
            src={pageContent.leadership.image}
            alt={pageContent.leadership.title}
          />
          <SectionProse
            className="no-padding"
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.leadership.prose),
            }}
          />
        </SectionWithImage>

        {/* Board and Advisors */}

        <SectionBoard className="hasHighlight" id="board_advisors">
          <h2>{pageContent.board_advisors.board.title}</h2>
          <p>{pageContent.board_advisors.board.temp}</p>

          <h2>{pageContent.board_advisors.advisors.title}</h2>
          <div className="members">
            {pageContent.board_advisors.advisors.members.map(member => (
              <div key={member.name}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <ul>
                  {member.bio.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionBoard>

        {/* Research */}

        <SectionWithHeader id="research">
          <ParallaxBanner
            className="parallax-title"
            layers={[
              {
                image: pageContent.research.image,
                amount: 0.5,
              },
            ]}
            style={{
              height: "200px",
            }}
          >
            <h1>{pageContent.research.title}</h1>
          </ParallaxBanner>
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.research.prose),
            }}
          />
        </SectionWithHeader>
      </Container>
    </>
  );
};

home.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default home;

export const pageQuery = graphql`
  query homeQuery {
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "home" } } }) {
      edges {
        node {
          frontmatter {
            title
            heading
            intro {
              section1
              section2
              image
            }
            about {
              title
              image
              prose
            }
            approach1 {
              title
              image
              prose
            }
            approach2
            mission {
              title
              image
              prose
            }
            resources {
              title
              image
              prose
            }
            leadership {
              title
              image
              prose
            }
            board_advisors {
              title
              board {
                title
                temp
              }
              advisors {
                title
                members {
                  name
                  image
                  bio
                }
              }
            }
            research {
              title
              image
              prose
            }
            aside1 {
              prose
              attribution
            }
            aside2 {
              prose
              attribution
            }
          }
        }
      }
    }
  }
`;
