import React from "react";

const VideoTitle = ({ title, desc }) => {
  const styles = {
    buttonStyles: "w-36 bg-gray-400 h-16 rounded-md font-bold text-center mt-8 mr-4 hover:opacity-90",
  };

  return (
    <div className="w-full mb-10 font-sans px-12 text-white aspect-video absolute bg-gradient-to-r from-black pt-[15%] h-[100vh]">
      <h1 className="font-bold text-4xl">{title}</h1>
      <h2 className="mt-2 w-[40%]">{desc}</h2>

      <button className={styles.buttonStyles}>Play</button>

      <button className={styles.buttonStyles}>More Info</button>
    </div>
  );
};

export default VideoTitle;
