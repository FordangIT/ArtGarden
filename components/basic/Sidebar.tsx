import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Sidebar() {
  const toggleDrawer = () => {
    const drawerCheckbox = document.getElementById(
      "my-drawer-4"
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false; // 드로어 닫기
    }
  };

  return (
    <div className="drawer drawer-end z-50">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content z-40">{/* Page content here */}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="relative menu w-96 min-h-full bg-white z-50 text-black tracking-wide p-10">
          <div className="flex-col">
            <FaArrowRight
              className="w-8 h-6 mb-8 cursor-pointer text-gray-600"
              onClick={toggleDrawer}
            />
            <span className="block text-base font-black text-[#6998BD] py-4">
              AG, 둘러보기
            </span>
            <div className="flex flex-col text-xl gap-y-3 font-semibold">
              <Link href="/performances" className="block">
                공연
              </Link>
              <Link href="/exhibitions" className="block ">
                전시회
              </Link>
              <Link href="/popupstores" className="block">
                팝업스토어
              </Link>
            </div>
          </div>
          <div className="flex justify-center w-4/5 fixed bottom-5 flex-col gap-y-2 text-[#999999] text-xl font-semibold">
            <Link href="/auth/signin">
              <div className="flex justify-center items-center w-full h-11 border-[1px] border-[#dcdcdc]">
                LOGIN
              </div>
            </Link>
            <Link href="/user/mypage">
              <div className="flex justify-center items-center w-full h-12 border-[1px] border-[#dcdcdc]">
                MY PAGE
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
