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

  // Format date for input (avoids timezone issues)
  const formatDateForInput = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="app">
      <div className="container">
        <h1>React Calendar App</h1>
        <p className="subtitle">Technical Assessment</p>

        <div className="date-picker">
          <label htmlFor="date-input">Select a date:</label>
          <input
            id="date-input"
            type="date"
            value={formatDateForInput(selectedDate)}
            onChange={handleDateChange}
          />
        </div>

        <Calendar date={selectedDate} />
      </div>
    </div>
  );
}

export default App;