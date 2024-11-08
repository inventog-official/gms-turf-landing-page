import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
export type NewsFeed = {
    id: number;
    date: string;
    fileType: 'image' | 'video'|'youtube'|'instagram';
    details: string;
    mediaUrl: string;
  };
  const API_URL = "https://api-gms.vercel.app/api/v1/newsfeed";

export function useNewsFeed() {
  const queryClient = useQueryClient();

  // Fetch all news feeds (READ)
  const getNewsFeeds = useQuery({
    queryKey: ['newsfeeds'],
    queryFn: async () => {
      try {
        const response = await axios.get(`${API_URL}`);
        return response.data as NewsFeed[];
      } catch (error) {
        console.error('Error fetching news feeds:', error);
        throw error;
      }
    },
    staleTime: 6000, // 10 minutes
    refetchInterval:60000
  });

  

  return {
    getNewsFeeds,
    queryClient,
  };
}
