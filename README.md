# Helpful Hooks

A collection of React Hooks for future reference.

## useMousePosition

Returns an object with the user's mouse's current `clientX` and `clientY` positions.

```tsx
function App() {
  const mousePosition = useMousePosition();

  return (
    <div>
      <p>
        {mousePosition.x} / {mousePosition.y}
      </p>
    </div>
  );
}
```
