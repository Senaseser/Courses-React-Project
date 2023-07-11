// import Course from "./course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const { title, content, price } = courses[index];
  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) return 0;
    return index;
  };
  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const getRandomCourse = () => {
    let randomNumber = Math.floor(Math.random() * courses.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  };
  return (
    <div className="mainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <button className="randomBtn" onClick={getRandomCourse}>
        Rastgele Kurs Ata!
      </button>
      <div className="cardDiv">
        <button className="prevNextBtn" onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price} TL</h4>

            <p>{content}</p>
          </div>

          {/* <button
        className="cardDelete"
        onClick={() => {
          removeOneCourse(id);
        }}
      >
        Sil
      </button> */}
        </div>
        <button className="prevNextBtn" onClick={nextCourse}>
          <FaChevronRight />
        </button>
        {/* {courses.map((course) => {
          return (
            <Course
              {...course}
              key={course.id}
              removeOneCourse={removeCourse}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default Courses;
