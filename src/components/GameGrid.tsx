import { useEffect, useState } from "react";
import axios from "axios";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<FetchGamesResponse>("https://api.rawg.io/api/games", {
        params: {
          key: "a0ccc7e743fd4bfc8fa444832c73109c",
        },
      })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
