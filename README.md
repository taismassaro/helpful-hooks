# Helpful Hooks

A collection of React Hooks for future reference.

> Some of these were taken from [The Joy of React](https://www.joyofreact.com/) exercises.

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

## useToggle

Returns a boolean and a function to invert it, based on the initial value provided.

```tsx
function App() {
  const [isToggled, toggle] = useToggle(true);

  return (
    <>
      <button onClick={toggle}>{isToggled ? "ON" : "OFF"}</button>

      {isToggled && <div />}
    </>
  );
}
```

## useIsOnScreen

Returns a boolean that indicates whether the provided element has entered or left the viewport.

```tsx
function App() {
  const wrapperRef = useRef();
  const isOnscreen = useIsOnscreen(wrapperRef);

  return (
    <>
      <p>Is visible: {isOnscreen ? "YES" : "NO"}</p>
      <div ref={wrapperRef} />
    </>
  );
}
```
