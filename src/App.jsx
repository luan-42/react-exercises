import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router";
import Counter from "./components/Counter";
import BackgroundColor from "./components/BackgroundColor";
import TaskList from "./components/TaskList";
import Stopwatch from "./components/Stopwatch";
import List from "./components/List";
import Form from "./components/Form";
import Posts from "./components/Posts";
import Gallery from "./components/Gallery";
import Timer from "./components/Timer";
import Tabs from "./components/Tabs";
import style from "./App.module.css";

export default function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Counter />}/>
          <Route path="/1" element={<Counter />}/>
          <Route path="/2" element={<BackgroundColor />}/>
          <Route path="/3" element={<TaskList />}/>
          <Route path="/4" element={<Stopwatch />}/>
          <Route path="/5" element={<List />}/>
          <Route path="/6" element={<Form />}/>
          <Route path="/7" element={<Posts />}/>
          <Route path="/8" element={<Gallery />}/>
          <Route path="/9" element={<Timer />}/>
          <Route path="/10" element={<Tabs />}/>
        </Routes>
      </BrowserRouter>
  )
}

function Navbar() {
  const location = useLocation();
  return (
    <nav className={style.navbar}>
      <ul>
      <li className={location.pathname == "/1" && style.active}><Link to="/1">Atividade 1</Link></li>
      <li className={location.pathname == "/2" && style.active}><Link to="/2">Atividade 2</Link></li>
      <li className={location.pathname == "/3" && style.active}><Link to="/3">Atividade 3</Link></li>
      <li className={location.pathname == "/4" && style.active}><Link to="/4">Atividade 4</Link></li>
      <li className={location.pathname == "/5" && style.active}><Link to="/5">Atividade 5</Link></li>
      <li className={location.pathname == "/6" && style.active}><Link to="/6">Atividade 6</Link></li>
      <li className={location.pathname == "/7" && style.active}><Link to="/7">Atividade 7</Link></li>
      <li className={location.pathname == "/8" && style.active}><Link to="/8">Atividade 8</Link></li>
      <li className={location.pathname == "/9" && style.active}><Link to="/9">Atividade 9</Link></li>
      <li className={location.pathname == "/10" && style.active}><Link to="/10">Atividade 10</Link></li>
      </ul>
    </nav>
  );
}