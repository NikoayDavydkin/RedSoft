//function для определения какие будут кнопки

import { IChildren, IParrent } from "./types";

export const returnNameButtons = (page: string, logined: boolean) => {
  if (!logined && page === "/") return ["Авторизация", "Страница с данными"];
  if (!logined && page === "/login")
    return ["На главную", "Страница с данными"];
  if (logined && page === "/") return ["Выйти", "Страница с данными"];
  if (logined && page === "/browse") return ["Выйти", "На главную"];
  return ["Авторизация", "Страница с данными"];
};

//искуственная функция get запроса

export async function getResponse(url: string, method: string) {
  const res = await fetch(`${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
}

//поиск дочерних элементов и сортировка

export const sortAndSearch = (
  data: Array<IParrent>,
  activeParrent: string
): Array<IChildren> => {
  return data
    .find((item) => item.key === activeParrent)!
    .children.sort((a, b) => {
      const nameA = a.name[0];
      const nameB = b.name[0];
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
};
