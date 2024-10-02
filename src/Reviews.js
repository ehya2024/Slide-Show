import { LuChevronLeftSquare } from "react-icons/lu";
import { LuChevronRightSquare } from "react-icons/lu";
import { FaQuoteRight } from "react-icons/fa6";
import data from './data';
import { useState } from "react";

export default function Reviews() {

    const [index, setIndex] = useState(0);
    const {image,name,job,info} = data[index];

    const nextSlide = () => {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      })
    }

    const prevSlide = () => {
      setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      })
    }

    const checkNumber = (number) => {
      if (number > data.length - 1) {
        return 0;
      }
      if (number < 0) {
        return data.length - 1;
      }
      return number;
    }

    const randomPerson = () => {
      setIndex(() => {
        let randomNumber = Math.floor(Math.random() * data.length);
        if (randomNumber === index) {
          randomNumber = index + 1;
        }
        return checkNumber(randomNumber);
      })
    }

  return (
    <article className='reviews'>
      <div className='reviews-img'>
        <img src={image} draggable='false' />
        <FaQuoteRight className="quote" />
      </div>
      <h4 className='name'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{info}</p>
      <div className='reviews-btns'>
        <button onClick={nextSlide}><LuChevronRightSquare /></button>
        <button onClick={prevSlide}><LuChevronLeftSquare /></button>
      </div>
      <button className='random-btn' onClick={randomPerson}>تصادفی</button>
    </article>
  )
}
