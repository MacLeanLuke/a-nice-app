import React from "react";
import { useQuery, gql } from "@apollo/client";
// import gql from "graphql-tag";

import { Link } from "react-router-dom";

const SERVICES = gql`
  {
    services {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;

function Service() {
  const { loading, error, data } = useQuery(SERVICES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return <>{data.services.edges.map()}</>;
}

// const Services = () => <useQuery query={gql``}></useQuery>;

export default Service;
