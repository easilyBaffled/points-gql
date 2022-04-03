import { useQuery, UseQueryOptions } from 'react-query';
import { axiosGQL } from '../lib/axios';
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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type App = {
  __typename?: 'App';
  _id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  lastResolve?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type AppInput = {
  _id?: InputMaybe<Scalars['ID']>;
  lastResolve?: InputMaybe<Scalars['Date']>;
};

export type Bank = {
  __typename?: 'Bank';
  _id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  points?: Maybe<Scalars['Float']>;
  special?: Maybe<Array<Maybe<BankSpecial>>>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type BankInput = {
  _id?: InputMaybe<Scalars['ID']>;
  points?: InputMaybe<Scalars['Float']>;
  special?: InputMaybe<Array<InputMaybe<BankSpecialInput>>>;
};

export type BankSpecial = {
  __typename?: 'BankSpecial';
  _id?: Maybe<Scalars['ID']>;
  pizza?: Maybe<Scalars['Float']>;
};

export type BankSpecialInput = {
  _id?: InputMaybe<Scalars['ID']>;
  pizza?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _INTERNAL?: Maybe<Mutation_Internal>;
  createReward?: Maybe<Reward>;
  createStreak?: Maybe<Streak>;
  createTask?: Maybe<Task>;
  deleteReward?: Maybe<Reward>;
  deleteStreak?: Maybe<Streak>;
  deleteTask?: Maybe<Task>;
  updateApp?: Maybe<App>;
  updateBank?: Maybe<Bank>;
  updateReward?: Maybe<Reward>;
  updateStreak?: Maybe<Streak>;
  updateTask?: Maybe<Task>;
};

export type MutationCreateRewardArgs = {
  input?: InputMaybe<RewardInput>;
};

export type MutationCreateStreakArgs = {
  input?: InputMaybe<StreakInput>;
};

export type MutationCreateTaskArgs = {
  input?: InputMaybe<TaskInput>;
};

export type MutationDeleteRewardArgs = {
  _id: Scalars['ID'];
};

export type MutationDeleteStreakArgs = {
  _id: Scalars['ID'];
};

export type MutationDeleteTaskArgs = {
  _id: Scalars['ID'];
};

export type MutationUpdateAppArgs = {
  input?: InputMaybe<AppInput>;
};

export type MutationUpdateBankArgs = {
  input?: InputMaybe<BankInput>;
};

export type MutationUpdateRewardArgs = {
  _id: Scalars['ID'];
  input?: InputMaybe<RewardInput>;
};

export type MutationUpdateStreakArgs = {
  _id: Scalars['ID'];
  input?: InputMaybe<StreakInput>;
};

export type MutationUpdateTaskArgs = {
  _id: Scalars['ID'];
  input?: InputMaybe<TaskInput>;
};

export type Mutation_Internal = {
  __typename?: 'Mutation_INTERNAL';
  createReward?: Maybe<Reward>;
  createStreak?: Maybe<Streak>;
  createTask?: Maybe<Task>;
  deleteReward?: Maybe<Reward>;
  deleteStreak?: Maybe<Streak>;
  deleteTask?: Maybe<Task>;
  updateApp?: Maybe<App>;
  updateBank?: Maybe<Bank>;
  updateReward?: Maybe<Reward>;
  updateStreak?: Maybe<Streak>;
  updateTask?: Maybe<Task>;
};

export type Mutation_InternalCreateRewardArgs = {
  input?: InputMaybe<RewardInput>;
};

export type Mutation_InternalCreateStreakArgs = {
  input?: InputMaybe<StreakInput>;
};

export type Mutation_InternalCreateTaskArgs = {
  input?: InputMaybe<TaskInput>;
};

export type Mutation_InternalDeleteRewardArgs = {
  _id: Scalars['ID'];
};

export type Mutation_InternalDeleteStreakArgs = {
  _id: Scalars['ID'];
};

export type Mutation_InternalDeleteTaskArgs = {
  _id: Scalars['ID'];
};

export type Mutation_InternalUpdateAppArgs = {
  input?: InputMaybe<AppInput>;
};

export type Mutation_InternalUpdateBankArgs = {
  input?: InputMaybe<BankInput>;
};

export type Mutation_InternalUpdateRewardArgs = {
  _id: Scalars['ID'];
  input?: InputMaybe<RewardInput>;
};

export type Mutation_InternalUpdateStreakArgs = {
  _id: Scalars['ID'];
  input?: InputMaybe<StreakInput>;
};

export type Mutation_InternalUpdateTaskArgs = {
  _id: Scalars['ID'];
  input?: InputMaybe<TaskInput>;
};

export type PickerOption = {
  __typename?: 'PickerOption';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PickerOptionInput = {
  _id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _INTERNAL?: Maybe<Query_Internal>;
  app?: Maybe<App>;
  bank?: Maybe<Bank>;
  reward?: Maybe<Reward>;
  rewards?: Maybe<Array<Maybe<Reward>>>;
  streak?: Maybe<Streak>;
  streaks?: Maybe<Array<Maybe<Streak>>>;
  task?: Maybe<Task>;
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type QueryRewardArgs = {
  _id: Scalars['ID'];
};

export type QueryStreakArgs = {
  _id: Scalars['ID'];
};

export type QueryTaskArgs = {
  _id: Scalars['ID'];
};

export type Query_Internal = {
  __typename?: 'Query_INTERNAL';
  app?: Maybe<App>;
  bank?: Maybe<Bank>;
  reward?: Maybe<Reward>;
  rewards?: Maybe<Array<Maybe<Reward>>>;
  streak?: Maybe<Streak>;
  streaks?: Maybe<Array<Maybe<Streak>>>;
  task?: Maybe<Task>;
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type Query_InternalRewardArgs = {
  _id: Scalars['ID'];
};

export type Query_InternalStreakArgs = {
  _id: Scalars['ID'];
};

export type Query_InternalTaskArgs = {
  _id: Scalars['ID'];
};

export type Reward = {
  __typename?: 'Reward';
  _id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  value?: Maybe<Scalars['Float']>;
};

export type RewardInput = {
  _id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  value?: InputMaybe<Scalars['Float']>;
};

export type Streak = {
  __typename?: 'Streak';
  _id: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  currentStreakIndex?: Maybe<Scalars['Float']>;
  streakIterations?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type StreakInput = {
  _id?: InputMaybe<Scalars['ID']>;
  currentStreakIndex?: InputMaybe<Scalars['Float']>;
  streakIterations?: InputMaybe<Scalars['Float']>;
};

export type Task = {
  __typename?: 'Task';
  _id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  status?: Maybe<PickerOption>;
  streak?: Maybe<Streak>;
  tags?: Maybe<Array<Maybe<TaskTag>>>;
  task: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  value?: Maybe<Scalars['Float']>;
};

export type TaskInput = {
  _id?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<PickerOptionInput>;
  streak?: InputMaybe<Scalars['ID']>;
  tags?: InputMaybe<Array<InputMaybe<TaskTagInput>>>;
  task: Scalars['String'];
  value?: InputMaybe<Scalars['Float']>;
};

export type TaskTag = {
  __typename?: 'TaskTag';
  _id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
};

export type TaskTagInput = {
  _id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

export type GetTasksQueryVariables = Exact<{ [key: string]: never }>;

export type GetTasksQuery = {
  __typename?: 'Query';
  tasks?: Array<{
    __typename?: 'Task';
    task: string;
    _id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    value?: number | null;
    tags?: Array<{
      __typename?: 'TaskTag';
      text?: string | null;
    } | null> | null;
    streak?: {
      __typename?: 'Streak';
      _id: string;
      createdAt?: any | null;
      updatedAt?: any | null;
      streakIterations?: number | null;
    } | null;
    status?: {
      __typename?: 'PickerOption';
      label?: string | null;
      value?: string | null;
    } | null;
  } | null> | null;
};

export const GetTasksDocument = `
    query getTasks {
  tasks {
    task
    _id
    createdAt
    updatedAt
    value
    tags {
      text
    }
    streak {
      _id
      createdAt
      updatedAt
      streakIterations
    }
    status {
      label
      value
    }
  }
}
    `;
export const useGetTasksQuery = <TData = GetTasksQuery, TError = unknown>(
  variables?: GetTasksQueryVariables,
  options?: UseQueryOptions<GetTasksQuery, TError, TData>
) =>
  useQuery<GetTasksQuery, TError, TData>(
    variables === undefined ? ['getTasks'] : ['getTasks', variables],
    axiosGQL<GetTasksQuery, GetTasksQueryVariables>(
      GetTasksDocument,
      variables
    ),
    options
  );
