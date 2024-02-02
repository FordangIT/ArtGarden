import Image from "next/image";
const BestProducts = () => {
  const data = [
    {
      id: 1,
      name: "제목입니당",
      img: "https://i.namu.wiki/i/rjqCCzRZoHd45Pb_laKUJq2Ar-KQJ0wCPOvhMPB5oT5vXDpouTjGbgDLPfyQbEIJL0nChjeXDNItb1suFhsJiILFHuJqWVjcGQqKSxFGE5E-Vf1kb0IiePs30V_u8kl9v02Y1Fm_8U6oSmkCfbEUnQ.webp",
      end: "2023년 12월 3일",
      price: "37,000",
      place: "",
      genre: "",
      rank: "",
    },
    {
      id: 2,
      name: "이름입니당",
      img: "https://i.namu.wiki/i/rjqCCzRZoHd45Pb_laKUJq2Ar-KQJ0wCPOvhMPB5oT5vXDpouTjGbgDLPfyQbEIJL0nChjeXDNItb1suFhsJiILFHuJqWVjcGQqKSxFGE5E-Vf1kb0IiePs30V_u8kl9v02Y1Fm_8U6oSmkCfbEUnQ.webp",
      end: "2023년 12월 3일",
      price: "",
      place: "",
      genre: "",
      rank: "",
    },
    {
      id: 3,
      name: "이름입니당",
      img: "https://i.namu.wiki/i/rjqCCzRZoHd45Pb_laKUJq2Ar-KQJ0wCPOvhMPB5oT5vXDpouTjGbgDLPfyQbEIJL0nChjeXDNItb1suFhsJiILFHuJqWVjcGQqKSxFGE5E-Vf1kb0IiePs30V_u8kl9v02Y1Fm_8U6oSmkCfbEUnQ.webp",
      end: "2023년 12월 3일",
      price: "",
      place: "",
      genre: "",
      rank: "",
    },
    {
      id: 4,
      name: "이름입니당",
      img: "https://i.namu.wiki/i/rjqCCzRZoHd45Pb_laKUJq2Ar-KQJ0wCPOvhMPB5oT5vXDpouTjGbgDLPfyQbEIJL0nChjeXDNItb1suFhsJiILFHuJqWVjcGQqKSxFGE5E-Vf1kb0IiePs30V_u8kl9v02Y1Fm_8U6oSmkCfbEUnQ.webp",
      end: "2023년 12월 3일",
      price: "",
      place: "",
      genre: "",
      rank: "",
    },
    {
      id: 5,
      name: "이름입니당",
      img: "https://i.namu.wiki/i/rjqCCzRZoHd45Pb_laKUJq2Ar-KQJ0wCPOvhMPB5oT5vXDpouTjGbgDLPfyQbEIJL0nChjeXDNItb1suFhsJiILFHuJqWVjcGQqKSxFGE5E-Vf1kb0IiePs30V_u8kl9v02Y1Fm_8U6oSmkCfbEUnQ.webp",
      end: "2023년 12월 3일",
      price: "",
      place: "",
      genre: "",
      rank: "",
    },
    {
      id: 6,
      name: "이름입니당",
      img: "https://i.namu.wiki/i/rjqCCzRZoHd45Pb_laKUJq2Ar-KQJ0wCPOvhMPB5oT5vXDpouTjGbgDLPfyQbEIJL0nChjeXDNItb1suFhsJiILFHuJqWVjcGQqKSxFGE5E-Vf1kb0IiePs30V_u8kl9v02Y1Fm_8U6oSmkCfbEUnQ.webp",
      end: "2023년 12월 3일",
      price: "",
      place: "",
      genre: "",
      rank: "",
    },
    {
      id: 7,
      name: "이름입니당",
      img: "https://i.namu.wiki/i/rjqCCzRZoHd45Pb_laKUJq2Ar-KQJ0wCPOvhMPB5oT5vXDpouTjGbgDLPfyQbEIJL0nChjeXDNItb1suFhsJiILFHuJqWVjcGQqKSxFGE5E-Vf1kb0IiePs30V_u8kl9v02Y1Fm_8U6oSmkCfbEUnQ.webp",
      end: "2023년 12월 3일",
      price: "",
      place: "",
      genre: "",
      rank: "",
    },
    {
      id: 8,
      name: "이름입니당",
      img: "https://i.namu.wiki/i/rjqCCzRZoHd45Pb_laKUJq2Ar-KQJ0wCPOvhMPB5oT5vXDpouTjGbgDLPfyQbEIJL0nChjeXDNItb1suFhsJiILFHuJqWVjcGQqKSxFGE5E-Vf1kb0IiePs30V_u8kl9v02Y1Fm_8U6oSmkCfbEUnQ.webp",
      end: "2023년 12월 3일",
      price: "",
      place: "",
      genre: "",
      rank: "",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {data &&
        data.map((el) => (
          <div
            key={el.id}
            className="card w-[26rem] h-[30rem] bg-white shadow-xl rounded-none border-2 border-white"
          >
            <figure>
              <img src={el.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {el.name}
                <div className="badge bg-main-pink text-white">BEST</div>
              </h2>
              가격: {el.price}원 <p>장소: {el.place}</p>
              <div className="card-actions justify-end">
                {el.end} <div className="badge badge-outline">{el.genre}</div>
                <div className="badge badge-outline">{el.rank}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default BestProducts;
