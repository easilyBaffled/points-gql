import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Chat = Node & {
  __typename?: 'Chat';
  id: Scalars['ID'];
  messages: Array<ChatMessage>;
  users: Array<User>;
};

export type ChatMessage = Node & {
  __typename?: 'ChatMessage';
  content: Scalars['String'];
  id: Scalars['ID'];
  time: Scalars['Date'];
  user: User;
};

export type Node = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Maybe<User>>>;
  me: User;
  myChats: Array<Chat>;
  search: Array<SearchResult>;
  user?: Maybe<User>;
};

export type QuerySearchArgs = {
  term: Scalars['String'];
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
}

export type SearchResult = Chat | ChatMessage | User;

export type User = Node & {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  role: Role;
  username: Scalars['String'];
};

export type FindUserQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;

export type FindUserQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'User';
    id: string;
    username: string;
    role: Role;
  } | null;
};

export type UserFieldsFragment = {
  __typename?: 'User';
  id: string;
  username: string;
  role: Role;
};

export const UserFieldsFragmentDoc = `
    fragment UserFields on User {
  id
  username
  role
}
    `;
export const FindUserDocument = `
    query findUser($userId: ID!) {
  user(id: $userId) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const useFindUserQuery = <TData = FindUserQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: FindUserQueryVariables,
  options?: UseQueryOptions<FindUserQuery, TError, TData>
) =>
  useQuery<FindUserQuery, TError, TData>(
    ['findUser', variables],
    fetcher<FindUserQuery, FindUserQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      FindUserDocument,
      variables
    ),
    options
  );
