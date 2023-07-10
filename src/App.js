import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Courses from "./components/courses";
import Loading from "./components/loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const deleteCourse = (id) => {
    const afterDeleteCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeleteCourses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="refresh">
              <h2>Kursların hepsini sildin!</h2>
              <button
                className="cardDelete"
                onClick={() => {
                  fetchCourses();
                }}
              >
                Yenile
              </button>
            </div>
          ) : (
            <Courses courses={courses} removeCourse={deleteCourse} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
