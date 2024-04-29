import Image from "next/image";
function PopupStores() {
  return (
    <div className="flex justify-center items-center my-44 ">
      <Image
        src="/readyPage.png"
        alt="준비중 페이지"
        width={100}
        height={100}
        className="w-96 h-96"
      />
    </div>
  );
}
export default PopupStores;
