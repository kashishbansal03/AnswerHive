import React, { useEffect, useState } from "react";
import "./Popular.css";
const Popular = (props) => {
  const { data } = props;
  const [popular, setPopular] = useState([]);

  const getPopular = () => {
    // Filter the data array to find items where isTrending is true
    const trendingItems = data.filter(item => item.isTrending === true);
    setPopular(trendingItems);
  }

  useEffect(() => {
    getPopular();

  }, [data]);
  return (
    <div className="popular">
      <div className="popular-container">
        <div className="popular-header">
          <p>POPULAR COMMUNITIES</p>
        </div>
        {popular.map((data) => {
          return (
            <div className="popular-list" key={data.user_id}>
              <ul>
                <li>
                  <div>
                    <img src={`${data.sub_avatar}`} />
                  </div>
                  <div>
                    <p>r/{data.subreddit}</p>
                    <p>43,322,974 members</p>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
