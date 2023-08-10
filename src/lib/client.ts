"use client";

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { GRAPHQL_ENDPOINT } from "../common/constant";
import { StorageTokenKey } from "../type/enum/auth";

export const { getClient } = registerApolloClient(() => {
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(StorageTokenKey.ACCESS_TOKEN);
    console.log(token);
    console.log("token");

    return {
      headers: {
        ...headers,
        authorization: headers?.authorization ?? `Bearer ${token}`,
      },
    };
  });

  const apiServerLink = createHttpLink({
    uri: GRAPHQL_ENDPOINT,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink.split((operation) => true, apiServerLink)]),
  });
});
