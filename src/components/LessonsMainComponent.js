import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import "./LessonsMainComponent.css";
import LessonsMainService from "../services/LessonsMainService";
import TutorialDataService from '../services/tutorial.service';
const LessonsListComponent = () => {
  const [lessons, setLessons] = useState(null);

  useEffect(() => {
    LessonsMainService.getAll()
      .then(response => {
        setLessons(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!lessons) {
    return (
    <div>Loading...</div>
    );
  }

  return (
    <div>
      <h4>Học tiếng hàn để dẫn đầu xu thế</h4>
      <p>Mục đích của trang web này là cung cấp cho học viên một nguồn tài nguyên duy nhất để học tiếng Hàn Quốc. Chúng tôi cố gắng cung cấp các giải thích chi tiết nhất, chính xác nhất và rõ ràng nhất tại mỗi bước - từ học cách đọc đến ngữ pháp nâng cao. Bài học của chúng tôi luôn là miễn phí và đầy đủ nội dung.</p>

      <div className="image-container">
        <img src={require('../common/images/btssmail.png')} className="centered-image"  />
      </div>
      <div>
          <Link to={`/lessons/1`}>
            <h5>Tiếng hàn sơ cấp 1</h5>
          </Link>
          <div>Chào mừng bạn đến với tiếng hàn sơ cấp 1. Bài học trong level 1 sẽ cung cấp cho bạn mọi thứ bạn cần để có thể đọc tiếng Hàn. Sau khi đã dạy cho chính mình, tôi hiểu thử thách mà người nói tiếng Anh có thể gặp phải khi học cách đọc. Vì vậy, giống như mỗi bài học, tôi sẽ giải thích mọi thứ theo cách cho phép tôi hiểu khi tôi đang dạy cho chính mình.</div>
      </div>
      <div>
          <Link to={`/lessons/2`}>
            <h5>Tiếng hàn sơ cấp 2</h5>
          </Link>
          <div>Trong phần này, bạn sẽ bắt đầu học ngữ pháp, từ và cấu trúc câu cơ bản. Đó là rất quan trọng khi bạn học một ngôn ngữ để xây dựng từ vựng của mình để có thể nói trong các cuộc hội thoại hàng ngày</div>
      </div>
      <div>
          <Link to={`/lessons/3`}>
            <h5>Tiếng hàn trung cấp 1</h5>
          </Link>
          <div>Trong phần này, bạn sẽ bắt đầu học ngữ pháp một chút nâng cao hơn! Ngoài việc tăng độ phức tạp của ngữ pháp, danh sách từ vựng sẽ có 100 từ mỗi bài học!</div>
      </div>
      <div>
          <Link to={`/lessons/4`}>
            <h5>Tiếng hàn trung cấp 2</h5>
          </Link>
          <div>Trong phần này, bạn sẽ học ngữ pháp mức độ cao hơn so với những gì cô đã dạy cho bạn! Danh sách từ vựng sẽ tiếp tục là 30 từ mỗi bài học. Trong Đơn vị này, bạn sẽ học thêm những nguyên tắc ngữ pháp sẽ giúp bạn nghe giống một người Hàn Quốc giao tiếp chuyên nghiệp!</div>
      </div>
      <div>
          <Link to={`/lessons/5`}>
            <h5>Tiếng hàn cao cấp 1</h5>
          </Link>
          <div>Trong phần này, tôi sẽ dạy bạn một số ngữ pháp tiếng Hàn mà sẽ làm bạn cảm thấy như bạn đã quay trở lại Bài 1 lần nữa!</div>
      </div>
      <div>
          <Link to={`/lessons/6`}>
            <h5>Tiếng hàn cao cấp 2</h5>
          </Link>
          <div>Trong thời của tôi, chúng ta phải học tiếng Hàn cho đến khi bò sữa về nhà! Tôi đang ở đâu rồi? Oh đúng, vâng! Các bạn trẻ và nhạc của các bạn!</div>
      </div>

    </div>
  );
};

export default LessonsListComponent;
