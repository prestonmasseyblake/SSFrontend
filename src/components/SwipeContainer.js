import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./SwipeContainer.css";

function parseCategories(categoryText) {
  let arr = [];
  for (let i = 0; i < categoryText.length; i++) {}
}

const SwipeContainer = ({ products, cartItems, setCartItems }) => {
  const [currentIndex, setCurrentIndex] = useState(products.length - 1);
  const [lastDirection, setLastDirection] = useState();

  useEffect(() => {}, []);

  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(products.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swipedRight = (index) => {
    // setCartItems(["fwg"]);
    if (cartItems.findIndex((item) => item.name === products[index].name) < 0)
      setCartItems(cartItems.concat(products[index]));
    // console.log("cartItems ... ", cartItems)
  };

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < products.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    if (direction === "right") {
      swipedRight(index);
    }
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < products.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div>
      <div className="swipe-container  flex flex-col justify-center items-center">
        <link
          href="https://fonts.googleapis.com/css?family=Damion&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
          rel="stylesheet"
        />
        <h1 class="text-6xl mb-8">Santa Swiper</h1>
        <div className="cardContainer flex justify-center max-w-xs rounded-lg bg-[#333]">
          {products.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe tinder-card flex flex-col rounded-md items-center max-w-xs rounded-lg"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name, index)}
              onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
              <div className="bg-[#FFF] flex flex-col   items-center swiper-card text-left ">
                <div
                  style={{ backgroundImage: "url(" + character.image + ")" }}
                  className="card"
                ></div>
                <div className="p-2">
                  <h3 className="font-bold">{character.name}</h3>
                  <div className="">
                    <p>{character.category}</p>
                    <h3 className="">price: ${character.price}</h3>
                  </div>
                </div>
              </div>
            </TinderCard>
          ))}
        </div>
        <div className="buttons">
          <button
            className="bg-red-400"
            style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
            onClick={() => swipe("left")}
          >
            Dislike
          </button>
          <button
            className="bg-[#333]"
            style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
            onClick={() => goBack()}
          >
            Undo
          </button>
          <button
            className="bg-green-400"
            style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
            onClick={() => swipe("right")}
          >
            Like
          </button>
        </div>
        {/* {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText">
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )} */}
      </div>
    </div>
  );
};

export default SwipeContainer;
