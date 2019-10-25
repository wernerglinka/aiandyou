import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";
import styled from "@emotion/styled";
import { ParallaxBanner } from "react-scroll-parallax";

function mdStringToHTML(mdString) {
  return remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(mdString)
    .toString();
}

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;

  @media (max-width: 767px) {
    padding: 0 15px;
  }
`;

const SectionProse = styled.div`
  ul {
    margin-left: 20px;
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
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.intro),
            }}
          />
        </section>
        <section id="about">
          <ParallaxBanner
            className="your-class"
            layers={[
              {
                image: "https://foo.com/foo.jpg",
                amount: 0.1,
              },
            ]}
            style={{
              height: "500px",
            }}
          >
            <h1>About</h1>
          </ParallaxBanner>
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.about),
            }}
          />
        </section>
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
        <section id="mission">
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.mission),
            }}
          />
        </section>
        <section id="approach">
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.approach1),
            }}
          />
        </section>
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
        <section id="story">
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.story),
            }}
          />
        </section>
        <section id="leadership">
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.leadership),
            }}
          />
        </section>
        <section id="communities">
          <SectionProse
            dangerouslySetInnerHTML={{
              __html: mdStringToHTML(pageContent.communities),
            }}
          />
        </section>
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
            intro
            about
            approach1
            approach2
            mission
            story
            leadership
            communities
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
