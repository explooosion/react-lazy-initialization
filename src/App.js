// @ts-check

import React, { useState } from "react";

/**
 * @param {number} depth
 * @param {number} size
 */
function createInitialTodos(depth = 3, size = 100) {
  if (depth === 0) {
    return Array(size)
      .fill(0)
      .map((_, i) => i);
  }
  return Array(size)
    .fill(0)
    .map(() => createInitialTodos(depth - 1, size));
}

function AppWithDirectValue() {
  const [count, setCount] = useState(0);

  console.time("Direct initializer");
  const [todos, setTodos] = useState(createInitialTodos());
  console.timeEnd("Direct initializer");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        AppWithDirectValue ({count})
      </button>
    </div>
  );
}

function AppWithLazyInitializer() {
  const [count, setCount] = useState(0);

  console.time("Lazy initializer");
  const [todos, setTodos] = useState(createInitialTodos);
  console.timeEnd("Lazy initializer");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        AppWithLazyInitializer ({count})
      </button>
    </div>
  );
}

export default function App() {
  return (
    <>
      <AppWithDirectValue />
      <AppWithLazyInitializer />
    </>
  );
}
