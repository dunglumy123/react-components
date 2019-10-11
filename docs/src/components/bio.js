/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: 4
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: 4,
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`
        }}
        imgStyle={{
          borderRadius: `50%`
        }}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in San Francisco building useful
        things.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>You should follow him on Twitter</a>
      </p>
    </div>
  );
};

export default Bio;