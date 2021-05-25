import { useEffect, useState } from "react";
import { DEFAULT_LANGUAGES } from "./Const";
import Contents from "./ui/Contents";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import SideBar from "./ui/SideBar";

function App() {
  const [languages, setLanguages] = useState(DEFAULT_LANGUAGES);

  const LANGUAGES_LS = "languages";

  useEffect(() => {
    console.log("Header mounted");
    const localLanguages =
      JSON.parse(localStorage.getItem(LANGUAGES_LS)) || DEFAULT_LANGUAGES;
    setLanguages(localLanguages);
  }, []);

  const url = "/python.md";
  fetch(url)
    .then((r) => r.text())
    .then((t) => {
      // console.log(t);
      const md2json = require("md-2-json");
      const output = md2json.parse(t);
      console.log(output);
    });

  return (
    <div className="App">
      <Header languages={languages} setLanguages={setLanguages} />
      <div>
        <SideBar />
        <Contents languages={languages} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
