import AllPopupStores from "@/components/popupstores/AllPopupStores";
import { GetServerSideProps } from "next";
import { loadAllPopupStore } from "@/lib/api/loadData";
import { AllPopupStore_TYPE } from "@/pages";
import { Fragment } from "react";
import Head from "next/head";
function PopupStores(props: AllPopupStore_TYPE) {
  return (
    <Fragment>
      <Head>
        <title>팝업스토어</title>
        <meta name="description" content="유명한 핫한 팝업스토어"></meta>
      </Head>
      <div className="flex-col my-10">
        <AllPopupStores data={props.data} />
      </div>
    </Fragment>
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
