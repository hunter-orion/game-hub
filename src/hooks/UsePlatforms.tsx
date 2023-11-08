import platform from "../data/platform";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

//useData<Platform>("/platforms/lists/parents");

const usePlatforms = () => ({ data: platform, error: null });

export default usePlatforms;
