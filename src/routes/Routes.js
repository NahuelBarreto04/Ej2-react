import React from "react";
import { Route, Routes as RoutesDom } from "react-router-dom";
import Home from "../pages/home/Home";
import Pokemons from "../pages/Pokemons/Pokemons";
import Todo from "../pages/todo/Todo";

const Routes = () => {
  return (
    <RoutesDom>
      <Route path="/" element={<Home />}></Route>
      <Route path="todo" element={<Todo />}></Route>
      <Route path="pokemons" element={<Pokemons />}></Route>
    </RoutesDom>
  );
};

export default Routes;
