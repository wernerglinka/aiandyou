import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";
import styled from "@emotion/styled";
import { ParallaxBanner } from "react-scroll-parallax";
import Container from "../components/container";

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
    background-color: #f8f8f8;
    margin-bottom: 50px;
  }
`;

const MajorPoint = styled.aside`
  margin: 50px 0;
  background-color: #f8f8f8;
  padding: 50px;
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
        <section>
          <SectionProse
            className="hasHighlight"
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
        <SectionWithHeader id="about">
          <ParallaxBanner
            className="parallax-title"
            layers={[
              {
                image: "/uploads/aiandyou1.jpeg",
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
          <Quote>
            <p>{pageContent.aside1.prose}</p>
            <footer>
              <cite>{pageContent.aside1.attribution}</cite>
            </footer>
          </Quote>
        </Container>
      </MajorPoint>
      <Container>
        <SectionWithHeader id="mission">
          <ParallaxBanner
            className="parallax-title"
            layers={[
              {
                image: "/uploads/aiandyou2.jpg",
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
        <SectionWithHeader id="approach">
          <ParallaxBanner
            className="parallax-title"
            layers={[
              {
                image: "/uploads/aiandyou3.jpeg",
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
        <section>
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.approach2),
            }}
          />
        </section>
        <SectionWithHeader id="story">
          <ParallaxBanner
            className="parallax-title"
            layers={[
              {
                image: "/uploads/aiandyou4.jpeg",
                amount: 0.5,
              },
            ]}
            style={{
              height: "200px",
            }}
          >
            <h1>{pageContent.story.title}</h1>
          </ParallaxBanner>
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.story.prose),
            }}
          />
        </SectionWithHeader>
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
        <SectionWithHeader id="communities">
          <ParallaxBanner
            className="parallax-title"
            layers={[
              {
                image: "/uploads/aiandyou6.jpeg",
                amount: 0.5,
              },
            ]}
            style={{
              height: "200px",
            }}
          >
            <h1>{pageContent.communities.title}</h1>
          </ParallaxBanner>
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.communities.prose),
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
              prose
            }
            approach1 {
              title
              prose
            }
            approach2
            mission {
              title
              prose
            }
            story {
              title
              prose
            }
            leadership {
              title
              image
              prose
            }
            communities {
              title
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
