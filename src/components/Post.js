import React from "react";

export default function Post({ post }) {
  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  return (
    <div className="card mb-4">
      <div className="row bg-dark bg-gradient text-white g-0 p-2 rounded-top">
        <div className="col">
          <h3>{post.title}</h3>
        </div>
        <div className="col">
          <p className="float-end">{formatDate(post.date_posted)}</p>
        </div>
      </div>
      <div className="row p-2 rounded-2">
        <div className="col">
          <p className="content">
            {post.content.length > 100 ? post.content.slice(0, 100) + "..." : post.content}
          </p>
        </div>
      </div>
    </div>
  );
}
