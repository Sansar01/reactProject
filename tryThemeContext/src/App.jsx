
import ThemeBtn from "./component/ThemeBtn.jsx";
import Card from "./component/Card.jsx";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";

function App() {
  
  return (
    <>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
