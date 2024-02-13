import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  //send a request to the backend api
  const [data, setData] = useState<Array<any>>([]);
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/performances/${id}`);
          if (!response.ok) {
            throw new Error("failed to fetch data");
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("error fetching datat", error);
        }
      };
      fetchData();
    }
    console.log(id, "id");
    console.log(data[0], "data");
  }, [id]);
  //to fetch the news item with performanceId

  return <>{data.length > 0 && <div key={data[0].key}>{data[0].start}</div>}</>;
}
export default DetailPage;
