import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";
import styled from "@emotion/styled";
import { Link as SmoothScrollLink } from "react-scroll";
import { ParallaxBanner } from "react-scroll-parallax";
import Container from "../components/container";
import BoardMember from "./board-member";

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
  margin-bottom: 50px;

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

  .media-list {
    margin: 50px 0 0;
    list-style: none;
    display: flex;
    justify-content: center;

    @media (max-width: 470px) {
      flex-direction: column;
    }

    li {
      flex: 0 0 33%;
      padding: 20px;
      display: flex;
      justify-content: center;

      img {
        margin: 0;
        width: 150px;
      }
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
    margin: 0;

    p {
      font-size: 22px;
    }
  }

  &.mission-statement {
    font-size: 22px;
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

  .note {
    display: block;
    font-style: italic;
    margin: -15px 0 20px;
    color: #666;
  }

  .members {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 -50px 50px;

    @media (max-width: 550px) {
      display: block;
      margin: 0;
    }

    > div {
      max-width: 280px;
      flex: 0 0 40%;
      padding: 0 20px 50px;
      text-align: center;

      @media (max-width: 550px) {
        margin: 0 auto;
      }

      img {
        border: 1px solid #f0f0f0;
        border-radius: 50%;
      }

      h3 {
        text-align: center;
      }

      button {
        border: 1px solid #9ed9f5;
        background: none;
        padding: 5px 20px;
        cursor: pointer;

        &:hover {
          background-color: #f8f8f8;
        }
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

const SpecialMsg = styled.div`
  float: right;
  padding: 30px;
  color: white;
  background-color: red;
  margin: -20px -20px 0 0;
  font-weight: bold;
  cursor: pointer;
`;

const home = ({ data }) => {
  const pageContent = data.allMarkdownRemark.edges[0].node.frontmatter;
  const specialMessageTarget = "covid19";
  return (
    <>
      <Container>
        {/* Introduction */}

        <section>
          <SmoothScrollLink
            to={specialMessageTarget}
            spy
            smooth
            offset={-100}
            duration={1000}
          >
            <SpecialMsg>AI & COVID-19</SpecialMsg>
          </SmoothScrollLink>

          <SectionProse
            className="hasHighlight intro"
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.intro.section1),
            }}
          />
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.intro.section2),
            }}
          />
        </section>

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
              height: "300px",
            }}
          >
            <h1>{pageContent.mission.title}</h1>
          </ParallaxBanner>
          <SectionProse
            className="mission-statement"
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.mission.prose),
            }}
          />
        </SectionWithHeader>

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
        {/* Approach */}

        <SectionWithHeader id="approach">
          <ParallaxBanner
            className="parallax-title"
            layers={[
              {
                image: pageContent.approach.image,
                amount: 0.5,
              },
            ]}
            style={{
              height: "200px",
            }}
          >
            <h1>{pageContent.approach.title}</h1>
          </ParallaxBanner>
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.approach.prose),
            }}
          />
        </SectionWithHeader>
      </Container>

      <Container>
        {/* Outcomes */}

        <SectionWithHeader id="outcomes">
          <ParallaxBanner
            className="parallax-title"
            layers={[
              {
                image: pageContent.outcomes.image,
                amount: 0.5,
              },
            ]}
            style={{
              height: "200px",
            }}
          >
            <h1>{pageContent.outcomes.title}</h1>
          </ParallaxBanner>
          <SectionProse
            style={{ paddingBottom: 0 }}
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.outcomes.prose),
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

      <Container>
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
          <div className="members">
            {pageContent.board_advisors.board.members.map(member => (
              <BoardMember member={member} key={member.name} />
            ))}
          </div>

          <h2>{pageContent.board_advisors.advisors.title}</h2>
          <span className="note">
            {pageContent.board_advisors.advisors.note}
          </span>
          <div className="members">
            {pageContent.board_advisors.advisors.members.map(member => (
              <BoardMember member={member} key={member.name} />
            ))}
          </div>
        </SectionBoard>

        <SectionWithHeader id="get-involved">
          <ParallaxBanner
            className="parallax-title"
            layers={[
              {
                image: pageContent.get_involved1.image,
                amount: 0.5,
              },
            ]}
            style={{
              height: "200px",
            }}
          >
            <h1>{pageContent.get_involved1.title}</h1>
          </ParallaxBanner>
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.get_involved1.prose),
            }}
          />
        </SectionWithHeader>

        <SectionWithHeader id="covid19">
          <ParallaxBanner
            className="parallax-title"
            layers={[
              {
                image: pageContent.covid19.image,
                amount: 0.5,
              },
            ]}
            style={{
              height: "200px",
            }}
          >
            <h1>{pageContent.covid19.title}</h1>
          </ParallaxBanner>
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.covid19.prose),
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
            }
            about {
              title
              image
              prose
            }
            approach {
              title
              image
              prose
            }
            outcomes {
              title
              image
              prose
            }
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
                members {
                  name
                  image
                  bio
                }
              }
              advisors {
                title
                note
                members {
                  name
                  position
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
            get_involved1 {
              title
              image
              prose
            }
            covid19 {
              title
              image
              prose
            }
          }
        }
      }
    }
  }
`;
