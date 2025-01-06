```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: setting count to a number
    setCount(0); 
  }, []);

  return <div>Count: {count}</div>;
}
```