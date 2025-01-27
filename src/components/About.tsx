import React, { useEffect, useState } from "react";
const About: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); ///toimiikohan testi1
  }, []);
  return (
    <div>
      <h2>About Page</h2>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3> 
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
