import React, { useEffect } from "react";
import Header from "./components/Header";
import Tree from "./components/Tree";
import "./styles/app.css";
import { getContent } from "./requests";
import { setInitialData } from "./store/tree";
import { RootState } from "./store";
import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const { data } = useAppSelector((state: RootState) => state.tree);
  const dispatch = useAppDispatch();
  useEffect(() => {
    getContent().then((data) => {
      dispatch(setInitialData(data));
    });
  }, [dispatch]);

  return (
    <section className="ant-layout">
      <Header />
      <Tree data={data} />
    </section>
  );
}

export default App;
