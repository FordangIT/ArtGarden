import Image from "next/image";
const Reviews = () => {
  const data = [
    {
      id: 1,
      name: "제목입니당",
      user: "사용자 이름",
      img: "https://picsum.photos/420/300",
      star: "3",
      content: "평범했어요!",
    },
    {
      id: 2,
      name: "이름입니당",
      user: "사용자 이름",
      img: "https://picsum.photos/420/300",
      star: "2023년 12월 3일",
      content: "",
    },
    {
      id: 3,
      name: "이름입니당",
      user: "사용자 이름",
      img: "https://picsum.photos/420/300",
      star: "2023년 12월 3일",
      content: "",
    },
    {
      id: 4,
      name: "이름입니당",
      user: "사용자 이름",
      img: "https://picsum.photos/420/300",
      star: "2023년 12월 3일",
      content: "",
    },
    {
      id: 5,
      name: "이름입니당",
      user: "사용자 이름",
      img: "https://picsum.photos/420/300",
      star: "2023년 12월 3일",
      content: "",
    },
    {
      id: 6,
      name: "이름입니당",
      user: "사용자 이름",
      img: "https://picsum.photos/420/300",
      star: "2023년 12월 3일",
      content: "",
    },
    {
      id: 7,
      name: "이름입니당",
      user: "사용자 이름",
      img: "https://picsum.photos/420/300",
      star: "2023년 12월 3일",
      content: "",
    },
    {
      id: 8,
      name: "이름입니당",
      user: "사용자 이름",
      img: "https://picsum.photos/420/300",
      star: "2023년 12월 3일",
      content: "",
    },
  ];
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {data &&
          data.map((el) => (
            <div
              key={el.id}
              className="card w-80 h-96 bg-white shadow-xl rounded-xl border-2 border-white"
            >
              <figure>
                <img src={el.img} alt="review-image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{el.name}</h2>
                <h3>사용자: {el.user}</h3>
                <h3>별점: {el.star}</h3>
                <h3>내용: {el.content}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Reviews;
