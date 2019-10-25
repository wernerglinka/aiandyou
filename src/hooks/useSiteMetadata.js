import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          pageURL
          description
          faviconURL
          social {
            siteOwner
            twitterHandle
          }
          title
          copyright
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
