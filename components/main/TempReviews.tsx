// import path from "path";
// import fs from "fs/promises";
// import { useEffect } from "react";

// interface Review {
//   id: string;
//   title: string;
// }

// interface TempReviewsProps {
//   reviews: Review[];
// }

// function TempReviews(props: TempReviewsProps) {
//   const { reviews } = props;
//   useEffect(() => {
//     console.log(reviews, "리뷰 데이터");
//   }, []);
//   return (
//     <ul>
//       {reviews.map((el) => (
//         <li key={el.id}>{el.title}</li>
//       ))}
//     </ul>
//   );
// }
// export default TempReviews;

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);

//   return {
//     props: {
//       reviews: data.reviews,
//     },
//   };
// }
