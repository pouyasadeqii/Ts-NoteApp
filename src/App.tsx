import "./App.css";
import AppProviders from "./providers/AppProviders";
import { Button } from "./components/ui/button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <AppProviders>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <h1>{count}</h1>
        <Button onClick={() => setCount((prev) => prev + 1)}>Click me</Button>
      </div>
    </AppProviders>
  );
}

export default App;
