"use client";

import React, {useRef, useEffect} from 'react';
import Image from 'next/image';

const createParticle = (x, y, width, height) => {
  const particle = document.createElement('span');
  particle.className = 'particle';
  document.body.appendChild(particle);

  const size = Math.random() * 14 + 5;
  const color = `hsl(${Math.random() * 40 + 170}, 70%, 50%)`;
  const rotation = Math.random() * 520;

  // Set only dynamic styles here
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}`;
  particle.style.background = color;

  // Determine start position and direction
  const distance = 140;
  const side = Math.floor(Math.random() * 4);
  let startX, startY, destinationX, destinationY;

  // Fix offset - weird magic
  x -= 3*side;
  y -= 10;
  height += 5*side;

  if (side === 0) { // Top
    startX = x + Math.random() * width;
    startY = y;
    destinationX = (Math.random() - 0.5) * distance;
    destinationY = -(Math.random() * (distance / 3)); // Move upward
  } else if (side === 1) { // Right
    startX = x + width;
    startY = y + Math.random() * height;
    destinationX = Math.random() * (distance / 3); // Move rightward
    destinationY = (Math.random() - 0.5) * distance;
  } else if (side === 2) { // Bottom
    startX = x + Math.random() * width;
    startY = y + height;
    destinationX = (Math.random() - 0.5) * distance;
    destinationY = Math.random() * (distance / 3); // Move downward
  } else { // Left
    startX = x;
    startY = y + Math.random() * height;
    destinationX = -(Math.random() * (distance / 3)); // Move leftward
    destinationY = (Math.random() - 0.5) * distance;
  }

  const animation = particle.animate([
    {
      transform: `translate(${startX}px, ${startY}px) rotate(0deg)`,
      opacity: 1
    },
    {
      transform: `translate(${startX + destinationX}px, ${startY + destinationY}px) rotate(${rotation}deg)`,
      opacity: 0
    }
  ], {
    duration: Math.random() * 500 + 1500,
    delay: 0
  });

  animation.onfinish = () => particle.remove();
};

export default function BookCover() {
  const ref = useRef();

  useEffect(() => {
    const handlePop = () => {
      const rect = ref.current?.getBoundingClientRect();

      if (!rect)
        return;

      createParticle(rect.left, rect.top, rect.width, rect.height);
    };

    let interval;

    setTimeout(() => {
      interval  = setInterval(() => {
        handlePop()
      }, 100);
    }, 500) // Delay for load in animation

    return () => interval.cancel();

  }, []);

  return (
      <Image
        src="/RFB_Cover.jpg"
        alt="Sheryl Portrait"
        ref={ref}
        className="w-6/7 md:3/4 max-w-[400] rounded-3xl mx-auto shadow-xl z-100"
        width={1613}
        height={2400}
        priority
        style={{
          perspective: 1000,
        }}
      />
  );
};