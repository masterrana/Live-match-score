const API_KEY = "5U3CtTzbnwOIHzFK7u2AdWJN6HE2";

//  get all the matches [upcomming  matches]

export const getMatches = () => {
  const url = `https://cricapi.com/api/matches/?apikey=${API_KEY}`;

  return fetch(url).then(rs=> rs.json()).catch((error) => console.log("ERROR:", error));
}

//Load match details

export const getMatchDetail = (id) => {
    const url = ` https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url).then(rs=> rs.json()).catch((error) => console.log("ERROR:", error));
  }