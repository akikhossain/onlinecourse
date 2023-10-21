import { useState } from "react";
import "./App.css";
import Courses from "./Components/Courses/Courses";
import Credithour from "./Components/Credithour/Credithour";
import Header from "./Components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [coursenames, setCourseNames] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [creditHour, setCreditHour] = useState(0);
  const handleCourseName = (course) => {
    const isExist = coursenames.find((item) => item.title == course.title);
    let count = course.price;
    let creditHour = course.credit_hour;
    if (isExist) {
      toast.error("YOU HAVE ALREADY SELECTED THIS ONE!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: "light",
      });
    } else {
      coursenames.forEach((item) => {
        count = count + item.price;
      });
      coursenames.forEach((item) => {
        creditHour = creditHour + item.credit_hour;
      });
      const totalRemaining = 20 - creditHour;
      if (creditHour > 20) {
        toast.error("YOU CAN NOT TAKE MORE THAN 20 CREDIT HOURS!!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
          theme: "colored",
        });
      } else {
        setRemaining(totalRemaining);
        setTotalPrice(count);
        setCreditHour(creditHour);
        const newCourseNames = [...coursenames, course];
        setCourseNames(newCourseNames);
      }
    }
  };
  return (
    <>
      <Header></Header>
      <div className="flex  gap-6 max-w-[1380px] mx-auto">
        <Courses handleCourseName={handleCourseName}></Courses>
        <Credithour
          coursenames={coursenames}
          totalPrice={totalPrice}
          remaining={remaining}
          creditHour={creditHour}
        ></Credithour>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
