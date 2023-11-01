import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const x = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    console.log(json);
  };
  useEffect(() => {});
  getMovie();
  return <h1>Detail</h1>;
}
export default Detail;

// Home에서 해주었던 loading을 Detail에서도 해주기
// movie가 State에 없음. 현재 API에서 json을 받아와서 아무것도 안 하고 있는 상태
// 힌트: json을 state에 넣어보기
