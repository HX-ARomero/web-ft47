import React, { useEffect, useState } from "react";
import { getCharacters, getEpisodes, getLocations } from "../services/apiService";

export default function useFetch(endpoint) {
  //* endpoint : character || location || episode
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(endpoint === "character") {
          const characters = await getCharacters();
          setData(characters);
        } else if (endpoint === "location") {
          const locations = await getLocations();
          setData(locations);
        } else if (endpoint === "episode") {
          const episodes = await getEpisodes();
          setData(episodes);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, error };
}
