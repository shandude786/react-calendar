/**
 * Props for the Calendar component
 */
export interface CalendarProps {
  /**
   * The date to display the calendar for.
   * The calendar will show the month and year of this date,
   * and highlight the specific day.
   */
  date: Date;
}

/**
 * Represents a single day cell in the calendar grid
 */
export interface DayCell {
  /**
   * The day number (1-31) or null for empty cells
   */
  day: number | null;
  
  /**
   * Whether this day belongs to the current month
   */
  isCurrentMonth: boolean;
  
  /**
   * Whether this day should be highlighted
   */
  isHighlighted: boolean;
}

/**
 * Calendar utility functions return type
 */
export interface CalendarData {
  monthName: string;
  year: number;
  dayCells: DayCell[];
}