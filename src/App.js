import Button from "./components/Button";
import ButtonGradient from "../src/assets/ButtonGradient";
import Header from "./components/Header";
import Main from "./components/Main";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hiddenn">
        <ButtonGradient />

        <Header />
        <Main />
      </div>
    </>
  );
};
export default App;
