import { useQuery } from 'react-query';
import { axiosGQL } from '../../lib/axios';
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
export const useGetTasksQuery = (variables, options) =>
  useQuery(
    variables === undefined ? ['getTasks'] : ['getTasks', variables],
    axiosGQL(GetTasksDocument, variables),
    options
  );
