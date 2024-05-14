import React from 'react';
import './card.css';

interface CardProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  image?: string;
  onClick?: () => void;
}

export const Card = ({
  size = 'medium',
  backgroundColor,
  label,
  image = "https://i.kym-cdn.com/entries/icons/facebook/000/034/213/cover2.jpg",
  onClick,
}: CardProps) => {
  return (
    <div
      className={`card card-${size}`}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      <div className="card-image-container">
        <img className="card-image" src={image} alt="Card" />
      </div>
      <div className="card-content">
        <p className="card-label">{label}</p>
      </div>
    </div>
  );
};

export default Card;
