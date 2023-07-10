import Course from "./course";

function Courses({ courses, removeCourse }) {
  return (
    <div className="mainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="cardDiv">
        {courses.map((course) => {
          return (
            <Course
              {...course}
              key={course.id}
              removeOneCourse={removeCourse}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
