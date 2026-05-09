import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load all pages in /pages
const pages = import.meta.glob("./pages/**/*.jsx");

const generateRoutes = () => {
  return Object.keys(pages).map((path) => {
    const Component = lazy(pages[path]);
    let urlPath = path
      .replace("./pages", "")
      .replace(/\/index\.jsx$/, "/")
      .replace(/\.jsx$/, "")
      .toLowerCase();

    if (urlPath === "/home") urlPath = "/";

    return <Route key={urlPath} path={urlPath} element={<Component />} />;
  });
};

export default function AutoRoutes() {
  return <Routes>{generateRoutes()}</Routes>;
}