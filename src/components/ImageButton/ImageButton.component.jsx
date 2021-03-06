import React, { useState } from 'react';

function ImageButton({ className, blurImage, focusImage, clickHandler, alt = 'Submit' }) {
  const [image, setImage] = useState(blurImage);

  return (
    <>
      <input
        className={className}
        type="image"
        src={image}
        {...(focusImage && {
          onMouseOver: () => setImage(focusImage),
          onMouseOut: () => setImage(blurImage),
        })}
        onClick={clickHandler}
        alt={alt}
      />
    </>
  );
}

export default ImageButton;
