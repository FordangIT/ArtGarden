interface RegionDropdownProps {
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
}

const regions = [
  { name: "전체", key: "전체" },
  { name: "강원도", key: "강원도" },
  { name: "경기도", key: "경기도" },
  { name: "경남", key: "경남" },
  { name: "경북", key: "경북" },
  { name: "광주", key: "광주" },
  { name: "대구", key: "대구" },
  { name: "대전", key: "대전" },
  { name: "부산", key: "부산" },
  { name: "서울", key: "서울" },
  { name: "세종", key: "세종" },
  { name: "울산", key: "울산" },
  { name: "인천", key: "인천" },
  { name: "전남", key: "전남" },
  { name: "전북", key: "전북" },
  { name: "제주도", key: "제주도" },
  { name: "충남", key: "충남" },
  { name: "충북", key: "충북" },
  { name: "해외", key: "해외" }
];

export default function RegionDropdown({
  selectedRegion,
  onSelectRegion
}: RegionDropdownProps) {
  return (
    <div className="dropdown dropdown-right dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        {selectedRegion}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-y-2"
      >
        {regions.map((region) => (
          <div
            key={region.key}
            onClick={() => onSelectRegion(region.key)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              defaultChecked={region.key === selectedRegion}
              className="checkbox checkbox-sm"
            />
            <div>{region.name}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}
