import AllPopupStores from "@/components/popupstores/AllPopupStores";
import { GetServerSideProps } from "next";
import { loadAllPopupStore } from "@/lib/loadData";
import { useEffect } from "react";
import { AllPopupStore_TYPE } from "@/pages";
function PopupStores(props: AllPopupStore_TYPE) {
  useEffect(() => {
    console.log(props);
  });
  return (
    <div className="flex-col ">
      <AllPopupStores data={props.data} />
    </div>
  );
}
export default PopupStores;

export const getServerSideProps: GetServerSideProps = async () => {
  const allPopupStores = await loadAllPopupStore();
  return {
    props: {
      data: allPopupStores
    }
  };
};
