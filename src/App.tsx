import { useState } from "react";
import "./App.css";
import AppProviders from "./providers/AppProviders";

function App() {
  const [sortBy, setSortBy] = useState("latest");
  return <AppProviders>salam</AppProviders>;
}

export default App;
