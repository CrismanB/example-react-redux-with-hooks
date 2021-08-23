import { useSelector, useDispatch } from "react-redux";

function CourseList() {
  const qtd = 4;
  const courses = useSelector((state) => state.data.slice(0, qtd), [qtd]);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch({ type: "ADD_COURSE", title: "PHP LARAVEL" });
  }

  return (
    <>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar Curso
      </button>
    </>
  );
}

export default CourseList;
