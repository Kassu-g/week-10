import React, { useEffect, useState } from "react";
import "./../styles/About.css";
const About: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [visibleItems, setVisibleItems] = useState<number>(12); // 12

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
  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 12);///testataan
  };
  ///
    // <div class="grid-container">
    //     <div class="item1">1</div>
    //     <div class="item2">2</div>
    //     <div class="item3">3</div>
    //     <div class="item4">4</div>
    //     <div class="item5">5</div>
    //     <div class="item6">6</div>
    //     <div class="item7">7</div>
    //     <div class="item8">8</div>
    //     <div class="item9">9</div>
    // </div>



  return (
    <div>
      <h2>About Page</h2>
      <div className="grid-container">
        {data.slice(0, visibleItems).map((item) => (
          <div key={item.id} className="grid-item"> 
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      {/* Button to load more items */}
      {visibleItems < data.length && ( // Show the button only if there are more items to show
        <button className="show-more-button" onClick={handleShowMore}>
          Show more
        </button>
      )}
    </div>
  );// griditemi lisäys
};
// return (
//     <div>
//       <h2>About Page</h2>
//       <div className="grid-container">
//         {data.slice(0, visibleItems).map((item) => ( 
//           <div key={item.id} className="grid-item">
//             <h3>{item.title}</h3>
//             <p>{item.body}</p>
//           </div>
//         ))}
//       </div>
//       {visibleItems < data.length && ( 
//           Show more
//         </button>
//       )}
//     </div>
//   );
// };
export default About;
