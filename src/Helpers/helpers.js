export const getData = (params, setFunction) => {
  fetch(`https://api.tvmaze.com${params}`)
    .then((res) => res.json())
    .then((res) => setFunction(res));
};
export const removeTags = (arg) => {
  let res = arg.replaceAll("/", "");
  res = res.replace(/<b>|<p>|/gi, "");
  return res;
};

export const noimg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019";
