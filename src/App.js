import "./styles.css";
import { useState } from "react";

var fruitEmojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry"
};

var fruitEmoji = Object.keys(fruitEmojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = fruitEmojiDictionary[userInput];

    if (meaning === undefined) {
      meaning =
        "Not available in our garden, Can you please provide us some seeds";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(fruit) {
    var meaning = fruitEmojiDictionary[fruit];

    setMeaning(meaning);

    console.log(meaning);
  }
  return (
    <div className="App">
      <h1>Know Your Emoji Fruits</h1>

      <input onChange={inputChangeHandler} />
      <div style={{ color: "green", marginTop: ".5rem" }}> {meaning} </div>

      <h3>Fruits We Have</h3>
      {fruitEmoji.map(function (fruits) {
        return (
          <span
            onClick={() => emojiClickHandler(fruits)}
            style={{ fontSize: "1.5rem", padding: ".4rem", cursor: "pointer" }}
            key={fruits}
          >
            {fruits}
          </span>
        );
      })}
    </div>
  );
}
