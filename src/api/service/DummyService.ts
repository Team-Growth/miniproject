import IDummy from "../models/Dummy";

const getRandom = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min) + min);

const getRandomF = (max: number, min: number) =>
  Math.random() * (max - min) + min;

const getRnadomImgSize = (w: number, h: number) => {
  const width = 230;
  const height = Math.floor((width / w) * h);
  return {
    width,
    height,
  };
};
function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export default (num: number) => {
  return [...Array(num)].map((_, id) => {
    const pictures = [...Array(4)].map((_) => {
      const { width, height } = getRnadomImgSize(
        getRandomF(1, 1.5),
        getRandomF(1, 1.5)
      );
      return `https://picsum.photos/${width}/${height}`;
    });

    return {
      id,
      title: `dummy-${id}`,
      pictures,
      // thumbnail: "https://picsum.photos/200",
      content: `hello! this is content of ${id}`,
      author: `author_${id}`,
      favoriates: 0,
      isDel: false,

      createdAt: randomDate(new Date(2019, 0, 1), new Date()),
    } as IDummy;
  });
};
