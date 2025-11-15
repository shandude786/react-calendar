import React from 'react';
import type { CalendarProps, DayCell } from './Calendar.types';
import styles from './Calendar.module.css';

/**
 * Calendar Component
 * 
 * A reusable calendar component that displays a month view for a given date.
 * The component shows the month/year header, day names, and a grid of dates
 * with the specified date highlighted.
 * 
 * @example
 * ```tsx
 * <Calendar date={new Date(2022, 9, 3)} />
 * ```
 */
const Calendar: React.FC<CalendarProps> = ({ date }) => {
  // Validate date prop
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date provided to Calendar component');
  }

  const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ] as const;

  const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

  /**
   * Get the number of days in a specific month
   */
  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  /**
   * Get the day of week (0-6) for the first day of the month
   */
  const getFirstDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month, 1).getDay();
  };

  /**
   * Generate the calendar grid data
   * Returns an array of day cells including empty cells for alignment
   */
  const generateCalendarCells = (): DayCell[] => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const highlightDay = date.getDate();

    const daysInMonth = getDaysInMonth(month, year);
    const firstDayOfWeek = getFirstDayOfMonth(month, year);
    const cells: DayCell[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      cells.push({
        day: null,
        isCurrentMonth: false,
        isHighlighted: false
      });
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push({
        day,
        isCurrentMonth: true,
        isHighlighted: day === highlightDay
      });
    }

    return cells;
  };

  const month = date.getMonth();
  const year = date.getFullYear();
  const calendarCells = generateCalendarCells();

  return (
    <div className={styles.calendar} role="region" aria-label="Calendar">
      {/* First Row: Month and Year */}
      <div className={styles.header}>
        <h2 className={styles.monthYear}>
          {MONTH_NAMES[month]} {year}
        </h2>
      </div>

      {/* Second Row: Days of the Week */}
      <div className={styles.daysHeader} role="row">
        {DAY_NAMES.map((dayName, index) => (
          <div
            key={`day-${index}`}
            className={styles.dayName}
            role="columnheader"
            aria-label={dayName}
          >
            {dayName}
          </div>
        ))}
      </div>

      {/* Following Rows: Date Grid */}
      <div className={styles.daysGrid} role="grid">
        {calendarCells.map((cell, index) => (
          <div
            key={`cell-${index}`}
            className={`
              ${styles.dayCell}
              ${cell.isCurrentMonth ? styles.currentMonth : styles.emptyCell}
              ${cell.isHighlighted ? styles.highlighted : ''}
            `.trim()}
            role="gridcell"
            aria-selected={cell.isHighlighted}
            aria-label={cell.day ? `Day ${cell.day}` : 'Empty'}
            data-current-month={cell.isCurrentMonth}
            data-highlighted={cell.isHighlighted}
          >
            {cell.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;