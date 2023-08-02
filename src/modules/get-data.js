const getData = async (query) => {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${query}`,
    {
      method: 'GET',
    },
  );
  return response.json();
};

export default getData;