import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import APIClient, { FetchResponse } from "../services/api.client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//useData<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 25 * 60 * 60 * 1000, //25 hrs
    initialData: { count: platform.length, results: platform },
  });

export default usePlatforms;
