import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      Увы страница не найдена, перебрасываем в  <Link to="/">Home</Link>
    </div>
  );
}

export default NotFoundPage;
