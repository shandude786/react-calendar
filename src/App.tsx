import { useState } from 'react';
import Calendar from './components/Calendar';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
     setSelectedDate(new Date(value + 'T00:00:00'));
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>React Calendar Component</h1>
        <p className="subtitle">Technical Assessment</p>
        
        <div className="date-picker">
          <label htmlFor="date-input">Select a date:</label>
          <input
            id="date-input"
            type="date"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={handleDateChange}
          />
        </div>

        <Calendar date={selectedDate} />
      </div>
    </div>
  );
}

export default App;