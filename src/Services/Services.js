import React from "react";
import { useQuery, gql } from "@apollo/client";

import { Link } from "react-router-dom";

const SERVICES = gql`
  {
    services {
      edges {
        node {
          title
          uri
          serviceMeta {
            image {
              id
              uri
              altText
            }
            price
            leadTime
          }
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
  return (
    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
          John's Pretty Nice Services
        </h2>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.services.edges.map((service, key) => {
            return (
              <div key={key} class="group relative">
                <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={service.node.serviceMeta.image.uri}
                    alt={service.node.serviceMeta.image.altText}
                    class="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <Link to={`/service/${service.node.slug}`}>
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        {service.node.title}
                      </Link>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">
                      {service.node.serviceMeta.leadTime}
                    </p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">
                    {service.node.serviceMeta.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;
