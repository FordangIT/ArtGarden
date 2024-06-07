import clientPromise from "../lib/mongodb";

export async function loadBest() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/performances?status=all&days=30&page=1&size=9&orderby=popular`
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
  const bestPopup = data.map((item) => ({
    ...item,
    _id: item._id.toString()
  }));
  return bestPopup;
}

export async function loadBestPopup() {
  const client = await clientPromise;
  const db = client.db("popupstores");
  const collections = db.collection("allPopupstores");
  const data = await collections.find({}).toArray();
  const bestPopup = data.map((item) => ({
    ...item,
    _id: item._id.toString()
  }));
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
