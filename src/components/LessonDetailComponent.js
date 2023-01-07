import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LessonDetailService from "../services/LessonDetailService";
import { useParams } from 'react-router-dom';


const LessonDetailComponent = () => {
  const { id } = useParams();
  const [lessons, setLessons] = useState(null);

  useEffect(() => {
    LessonDetailService.get(id)
      .then(response => {
        setLessons(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!lessons) {
    return <div>Loading id...{id}</div>;
  }

  return (
    <div>
        <div key={lessons.id}>
        <h5>{lessons.title}</h5>

        <div>
          {lessons.description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>

        {/* <div>{lessons.description}</div> */}
        </div>

    </div>
  );
};

export default LessonDetailComponent;
