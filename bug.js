```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: setting count to a string instead of a number
    setCount('0'); 
  }, []);

  return <div>Count: {count}</div>;
}
```