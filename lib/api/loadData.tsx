import clientPromise from "../utils/mongodb";
export async function loadBest() {
  try {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let lately =
      String(year) +
      String(month).padStart(2, "0") +
      String(day - 1).padStart(2, "0");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/ranks/${lately}`
    );
    if (!response.ok) {
      throw new Error("failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("failed to fetch data");
  }
}
export async function loadNew() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/performances?status=all&days=30&page=1&size=9&orderby=latest`
    );
    if (!response.ok) {
      throw new Error("failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error fetching data", error);
    throw new Error("failed to fetch data");
  }
}

export async function loadBestExhibit() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/exhibits?days=30&page=1&size=9&orderby=popular`
    );
    if (!response.ok) {
      throw new Error("failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error fetching data", error);
    throw new Error("failed to fetch data");
  }
}

export async function loadNewExhibit() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/exhibits?days=30&page=1&size=9&orderby=latest`
    );
    if (!response.ok) {
      throw new Error("failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error fetching data", error);
    throw new Error("failed to fetch data");
  }
}

export async function loadNewPopup() {
  const client = await clientPromise;
  const db = client.db("popupstores");
  const collections = db.collection("allPopupstores");
  const data = await collections.find({}).toArray();
  const bestPopup = data
    .map((item) => ({
      ...item,
      _id: item._id.toString()
    }))
    .slice(-9)
    .reverse();
  return bestPopup;
}

export async function loadBestPopup() {
  const client = await clientPromise;
  const db = client.db("popupstores");
  const collections = db.collection("allPopupstores");
  const data = await collections.find({}).toArray();
  const bestPopup = data
    .map((item) => ({
      ...item,
      _id: item._id.toString()
    }))
    .slice(-12)
    .reverse();
  return bestPopup;
}

export async function loadReview() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews?page=1&size=8`
    );
    if (!response.ok) {
      throw new Error("failed to fetch data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error fetching data", error);
    throw new Error("failed to fetch data");
  }
}

export async function loadMainBannerPopup() {
  const client = await clientPromise;
  const db = client.db("popupstores");
  const collections = db.collection("mainBannerPopupstore");
  const data = await collections.find({}).toArray();
  const bestPopup = data.map((item) => ({
    ...item,
    _id: item._id.toString()
  }));
  return bestPopup;
}

export async function loadAllPopupStore() {
  const client = await clientPromise;
  const db = client.db("popupstores");
  const collections = db.collection("allPopupstores");
  const data = await collections.find({}).toArray();
  const allPopup = data.map((item) => ({
    ...item,
    _id: item._id.toString()
  }));
  return allPopup;
}

export async function loadDetailPopupStore(id: string) {
  try {
    const client = await clientPromise;
    const db = client.db("popupstores");
    const collection = db.collection("allPopupstores");

    // ObjectId를 사용하여 특정 id의 문서를 찾음
    const document = await collection.findOne({ id: id });
    if (!document) {
      throw new Error(`Document with id ${id} not found`);
    }

    // ObjectId를 문자열로 변환
    const detailPopupStore = {
      ...document,
      _id: document._id.toString()
    };

    return detailPopupStore;
  } catch (error) {
    console.error("Failed to fetch detail popup store from MongoDB:", error);
    throw error;
  }
}
