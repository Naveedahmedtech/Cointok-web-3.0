// src/routes.js
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Header } from "../layout";
import { AddCoins, Home, NewCoin, Play } from "../views";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="new-coins" element={<NewCoin />} />
        <Route path="play" element={<Play />} />
        <Route path="add-coins" element={<AddCoins />} />
      </Route>
    </>
  )
);
