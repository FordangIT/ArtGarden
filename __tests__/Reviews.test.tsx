// import React from "react";
// import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { rest } from "msw";
// import { setupServer } from "msw/node";
// import Reviews from "@/components/main/Reviews";

// const server = setupServer(
//   rest.get("http://54.180.145.33:8080/reviews", (req, res, ctx) => {
//     return res(
//       ctx.json([
//         {
//           id: "1",
//           perform_id: "performance1",
//           content: "Great performance",
//           rate: 5,
//           member_id: 123,
//           created_at: "2024-03-13",
//           modified_at: "2024-03-13",
//         },
//       ])
//     );
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// test("renders reviews", async () => {
//   render(<Reviews />);

//   // 로딩 텍스트가 나타나는지 확인
//   expect(screen.getByText("Loading...")).toBeInTheDocument();

//   // 데이터가 로드되기를 기다림
//   await waitFor(() =>
//     expect(screen.getByText("performance1")).toBeInTheDocument()
//   );

//   // 데이터가 정상적으로 렌더링 되는지 확인
//   expect(screen.getByText("performance1")).toBeInTheDocument();
//   expect(screen.getByText("Great performance")).toBeInTheDocument();
//   expect(screen.getByText("사용자: 123")).toBeInTheDocument();
//   expect(screen.getByText("별점: 5")).toBeInTheDocument();
// });
