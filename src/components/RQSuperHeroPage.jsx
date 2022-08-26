import useSuperHeroData from "../hooks/useSuperHeroData";
import { useParams } from "react-router-dom";

const RQSuperHeroPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useSuperHeroData(id);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {data?.name} - {data?.alterEgo}
    </div>
  );
};

export default RQSuperHeroPage;
