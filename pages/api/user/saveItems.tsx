import { performances } from "../../../data/performances"; // 데이터는 자신의 데이터 구조에 맞게 조정

export default function handler(req, res) {
  if (req.method === "POST") {
    const { ids } = req.body;
    const filteredPerformances = performances.filter((performance) =>
      ids.includes(performance.id)
    );
    res.status(200).json(filteredPerformances);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
