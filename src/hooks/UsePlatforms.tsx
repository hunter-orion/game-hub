import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import apiClient from "../services/api.client";
import { FetchResponse } from "../services/api.client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//useData<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get("/platforms/lists/parents")
        .then<FetchResponse<Platform>>((res) => res.data),
    staleTime: 25 * 60 * 60 * 1000, //25 hrs
    initialData: { count: platform.length, results: platform },
  });

export default usePlatforms;
