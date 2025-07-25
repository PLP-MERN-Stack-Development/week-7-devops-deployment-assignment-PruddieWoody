import React, { Suspense, lazy } from "react";
const Hello = lazy(() => import("./Hello"));

function App() {
  return (
    <div>
      <h1>Production-Ready React App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Hello />
      </Suspense>
    </div>
  );
}
export default App;
