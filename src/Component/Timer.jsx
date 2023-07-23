import React, { useEffect, useState } from 'react'

function Timer({ targetDate }) {
    const [remainingTime, setRemainingTime] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;
  
        setRemainingTime(difference);
  
        if (difference <= 0) {
          clearInterval(interval);
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }, [targetDate]);
  
    const formatTime = (time) => {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((time % (1000 * 60)) / 1000);
  
      return `${days} gün : ${formatNumber(hours)} : ${formatNumber(minutes)} : ${formatNumber(seconds)}`;
    };
  
    const formatNumber = (number) => {
      return number < 10 ? `0${number}` : number.toString();
    };
  
    return <p className='time'>{formatTime(remainingTime)}</p>;
  }
  
  export default Timer;