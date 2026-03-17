import React, { useState } from "react"
import { Star } from "./Star"

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px"
}

const starContainerStyle = {
  display: "flex",
  alignItems: "center",
}

type StarRatingProps = {
  maxRating: number,
  color?: string,
  size?: number,
  className?: string,
  defaultRating?: number,
  onSetRating?: (rating: number) => void,
}

export const StarRating = ({ maxRating, color = "#fcc419", size = 48, className, defaultRating = 0, onSetRating}: StarRatingProps) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating: number) {
    setRating(rating);
    onSetRating?.(rating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px` 
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => <span>
          <Star
            key={i}
            onClick={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        </span>)}
        <p style={textStyle}>{tempRating ? tempRating : rating || ""}</p>
      </div>
    </div>
  )
}