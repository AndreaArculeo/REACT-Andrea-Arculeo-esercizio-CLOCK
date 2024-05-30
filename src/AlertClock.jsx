export default function AlertClock() {
  function handleButtonClick() {
    const actualTime = new Date();

    alert(`The current time is ${actualTime.toLocaleTimeString()}`);
  }
  return <button onClick={handleButtonClick}>Showtime!</button>;
}
