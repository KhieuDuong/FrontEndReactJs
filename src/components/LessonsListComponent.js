import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LessonsListService from "../services/LessonsListService";
import { useParams } from 'react-router-dom';

const LessonsListComponent = () => {
  const { id } = useParams();
  const [lessons, setLessons] = useState(null);

  useEffect(() => {
    LessonsListService.findByLevel(id)
      .then(response => {
        setLessons(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!lessons) {
    return <div>Loading...1{id}</div>;
  }

  return (
    <div>
      <h2>Danh sách bài học tiếng hàn sơ cấp {id}</h2>
      {lessons.map((lesson) => (
        <div key={lesson.id}>
          <Link to={`/lessonDetail/${lesson.id}`}>
            <h5>{lesson.title}</h5>
          </Link>
          {/* <div>{lesson.description}</div> */}
        </div>
      ))}
    </div>
  );
};

export default LessonsListComponent;
