import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import APIClient from "../services/api.client";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

//useData<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("25h"),
    initialData: platform,
  });

export default usePlatforms;
