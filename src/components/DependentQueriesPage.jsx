import { useQuery } from "react-query";
import { api } from "../api/axios";

const fetchEmail = async (email) => {
  const result = await api.get(`users/${email}`);
  return result.data;
};
const fetchCourses = async (channelId) => {
  const result = await api.get(`channels/${channelId}`);
  return result.data;
};

const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["users", email], () => fetchEmail(email));
  const channelId = user?.channelId;

  const { data: courses } = useQuery(
    ["courses", channelId],
    () => fetchCourses(channelId),
    {
      enabled: !!channelId,
    }
  );
  console.log(user, channelId, courses);
  return <div>DependentQueriesPage</div>;
};

export default DependentQueriesPage;
