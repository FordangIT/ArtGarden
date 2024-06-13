import { useEffect } from "react";
import { getScrap } from "@/lib/api/scrap";
export default function LoggedInFavorites() {
  useEffect(() => {
    let data = getScrap();
    console.log(data);
  }, []);

  return <div>안뇽</div>;
}
