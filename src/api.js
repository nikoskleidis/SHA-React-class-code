import itemData from "./data/MOCK_DATA.json";
import { delay } from "./utils";

export async function getItems() {
  await delay(3000);
  return itemData;
}

export async function getItem(id) {
  await delay(2000);
  return itemData.find((item) => item.id === Number(id));
}
