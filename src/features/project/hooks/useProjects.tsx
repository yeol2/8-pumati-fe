import { PROJECT_QUERY_KEY } from '@/constants';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getRankedProjects } from '../services';

export function useProjects(contextId: number) {
  return useSuspenseInfiniteQuery({
    queryKey: PROJECT_QUERY_KEY.RANKED_PROJECTS,
    queryFn: ({ pageParam }) =>
      getRankedProjects(contextId, pageParam as number),
    staleTime: 1000 * 60 * 5,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.meta.nextCursorId,
  });
}
