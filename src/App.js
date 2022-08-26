import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RQSuperHeros from "./components/RQSuperHeros";
import SuperHero from "./components/SuperHero";
import "./App.css";
import RQSuperHeroPage from "./components/RQSuperHeroPage";
import ParallelQuery from "./components/ParallelQuery";
import DynamicParallelQuery from "./components/DynamicParallelQuery";
import DependentQueriesPage from "./components/DependentQueriesPage";
import PaginationQueries from "./components/PaginationQueries";
import InfiniteQuries from "./components/InfiniteQueries";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/super-heros" element={<SuperHero />} />
        <Route path="/rq-super-heros">
          <Route index element={<RQSuperHeros />} />
          <Route path=":id" element={<RQSuperHeroPage />} />
        </Route>
        <Route path="/rq-parallel" element={<ParallelQuery />} />
        <Route
          path="/rq-dynamic-parallel"
          element={<DynamicParallelQuery heroIds={[1, 3]} />}
        />
        <Route
          path="/rq-dependent"
          element={<DependentQueriesPage email="1234@gmail.com" />}
        />
        <Route path="/rq-pagination" element={<PaginationQueries />} />
        <Route path="/rq-infinite" element={<InfiniteQuries />} />
      </Routes>
    </>
  );
}

export default App;
