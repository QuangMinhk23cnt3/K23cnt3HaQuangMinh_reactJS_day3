import HqmClassComp from "./components/HqmClassComp";
import HqmFuncComp from "./components/HqmFuncComp";
import HqmJsxExpession from "./components/HqmJsxExpession";

function HqmApp() {
  return (
    <div className="container border mt-3 bg-white">
        <h1>React JS Lesson03 - Ha Quang Minh</h1>

        <HqmJsxExpession />

        <hr/>
        {/*Su dung function component */}
        <HqmFuncComp />

        <hr />
        {/*Su dung class component */}
        <HqmClassComp></HqmClassComp>
    </div>
  );
}

export default HqmApp;
