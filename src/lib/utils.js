import toast, { Toaster } from "react-hot-toast";
export const notifyTrue = () =>
  toast("Correct", {
    icon: getOneEmoji(postiveEmojis),
  });
export const notifyFalse = () =>
  toast("Wrong", {
    icon: getOneEmoji(negativeEmojis),
  });

const postiveEmojis = ['😎', '🚀', '✨', '👍', '😉', '🎖️', '🤩', '🍺', '🎉', '🥳']
const negativeEmojis = ['😔', '😆', '😞', '👎', '😑', '🤦‍♂️', '💣', '💀', '🤕', '🤏']

const getOneEmoji = (emojiArray) => {
  const length = emojiArray.length;
  const randomNumInArrayRange = Math.floor(Math.random() * length);
  return emojiArray[randomNumInArrayRange]
}


export const getRandomColorHash = () => {
  var letters = "0123456789ABCDEF";
  var color = "";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
