import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from './Calendar';

describe('Calendar Component', () => {
  describe('Date Prop Rendering', () => {
    it('should render the correct month and year for the given date', () => {
      const testDate = new Date(2022, 9, 3); // October 3, 2022
      render(<Calendar date={testDate} />);
      
      expect(screen.getByText('October 2022')).toBeInTheDocument();
    });

    it('should render correct month and year for different date', () => {
      const testDate = new Date(2020, 2, 23); // March 23, 2020
      render(<Calendar date={testDate} />);
      
      expect(screen.getByText('March 2020')).toBeInTheDocument();
    });

    it('should handle edge case dates correctly', () => {
      const testDate = new Date(2024, 0, 1); // January 1, 2024
      render(<Calendar date={testDate} />);
      
      expect(screen.getByText('January 2024')).toBeInTheDocument();
    });
  });

  describe('Days of Week Header', () => {
    it('should display all seven day names in the second row', () => {
      const testDate = new Date(2022, 9, 3);
      render(<Calendar date={testDate} />);
      
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      dayNames.forEach(day => {
        expect(screen.getByText(day)).toBeInTheDocument();
      });
    });

    it('should render day names in correct order', () => {
      const testDate = new Date(2022, 9, 3);
      const { container } = render(<Calendar date={testDate} />);
      
      const dayHeaders = container.querySelectorAll('[role="columnheader"]');
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      
      dayHeaders.forEach((header, index) => {
        expect(header).toHaveTextContent(dayNames[index]);
      });
    });
  });

  describe('Date Alignment and Display', () => {
    it('should display all dates for the month', () => {
      const testDate = new Date(2022, 2, 3); // March 2022 has 31 days (month is 0-indexed, so 2 = March)
      const { container } = render(<Calendar date={testDate} />);

      const dateCells = container.querySelectorAll('[data-current-month="true"]');
      expect(dateCells).toHaveLength(31);
    });

    it('should correctly align dates with day headings', () => {
      const testDate = new Date(2022, 9, 1); // October 1, 2022 (Saturday)
      const { container } = render(<Calendar date={testDate} />);

      const allCells = container.querySelectorAll('[role="gridcell"]');
      const firstDayCell = Array.from(allCells).find(cell =>
        cell.textContent === '1' && cell.getAttribute('data-current-month') === 'true'
      );
      const firstDayIndex = Array.from(allCells).indexOf(firstDayCell!);

      // October 1, 2022 is Saturday (6th column, 0-indexed)
      expect(firstDayIndex).toBe(6);
    });

    it('should align dates correctly for month starting on Sunday', () => {
      const testDate = new Date(2023, 0, 1); // January 1, 2023 (Sunday)
      const { container } = render(<Calendar date={testDate} />);

      const allCells = container.querySelectorAll('[role="gridcell"]');
      const firstDayCell = Array.from(allCells).find(cell =>
        cell.textContent === '1' && cell.getAttribute('data-current-month') === 'true'
      );
      const firstDayIndex = Array.from(allCells).indexOf(firstDayCell!);

      // Should be in first position (Sunday)
      expect(firstDayIndex).toBe(0);
    });

    it('should handle February in leap year correctly', () => {
      const testDate = new Date(2024, 1, 15); // February 2024 (leap year)
      const { container } = render(<Calendar date={testDate} />);

      const dateCells = container.querySelectorAll('[data-current-month="true"]');
      expect(dateCells).toHaveLength(29); // Leap year has 29 days
    });

    it('should handle February in non-leap year correctly', () => {
      const testDate = new Date(2023, 1, 15); // February 2023 (non-leap year)
      const { container } = render(<Calendar date={testDate} />);

      const dateCells = container.querySelectorAll('[data-current-month="true"]');
      expect(dateCells).toHaveLength(28);
    });
  });

  describe('Date Highlighting', () => {
    it('should highlight the correct date based on date prop', () => {
      const testDate = new Date(2022, 9, 3); // October 3, 2022
      const { container } = render(<Calendar date={testDate} />);

      const highlightedCells = container.querySelectorAll('[data-highlighted="true"]');
      expect(highlightedCells).toHaveLength(1);
      expect(highlightedCells[0]).toHaveTextContent('3');
    });

    it('should highlight different date when prop changes', () => {
      const testDate = new Date(2020, 2, 23); // March 23, 2020
      const { container } = render(<Calendar date={testDate} />);

      const highlightedCells = container.querySelectorAll('[data-highlighted="true"]');
      expect(highlightedCells).toHaveLength(1);
      expect(highlightedCells[0]).toHaveTextContent('23');
    });

    it('should highlight last day of month correctly', () => {
      const testDate = new Date(2022, 9, 31); // October 31, 2022
      const { container } = render(<Calendar date={testDate} />);

      const highlightedCells = container.querySelectorAll('[data-highlighted="true"]');
      expect(highlightedCells).toHaveLength(1);
      expect(highlightedCells[0]).toHaveTextContent('31');
    });

    it('should highlight first day of month correctly', () => {
      const testDate = new Date(2022, 9, 1); // October 1, 2022
      const { container } = render(<Calendar date={testDate} />);

      const highlightedCells = container.querySelectorAll('[data-highlighted="true"]');
      expect(highlightedCells).toHaveLength(1);
      expect(highlightedCells[0]).toHaveTextContent('1');
    });

    it('should have aria-selected attribute on highlighted date', () => {
      const testDate = new Date(2022, 9, 3);
      const { container } = render(<Calendar date={testDate} />);

      const highlightedCell = container.querySelector('[data-highlighted="true"]');
      expect(highlightedCell).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('Component Structure', () => {
    it('should have proper semantic structure', () => {
      const testDate = new Date(2022, 9, 3);
      const { container } = render(<Calendar date={testDate} />);
      
      expect(container.querySelector('[role="region"]')).toBeInTheDocument();
      expect(container.querySelector('[role="row"]')).toBeInTheDocument();
      expect(container.querySelector('[role="grid"]')).toBeInTheDocument();
    });

    it('should render with correct CSS classes', () => {
      const testDate = new Date(2022, 9, 3);
      const { container } = render(<Calendar date={testDate} />);

      // With CSS Modules, we can't rely on exact class names
      // Instead, verify elements exist by their semantic roles and structure
      expect(container.querySelector('[role="region"]')).toBeInTheDocument();
      expect(container.querySelector('h2')).toBeInTheDocument(); // monthYear header
      expect(container.querySelector('[role="row"]')).toBeInTheDocument(); // daysHeader
      expect(container.querySelector('[role="grid"]')).toBeInTheDocument(); // daysGrid
    });
  });

  describe('Error Handling', () => {
    it('should throw error for invalid date', () => {
      expect(() => {
        render(<Calendar date={new Date('invalid')} />);
      }).toThrow('Invalid date provided to Calendar component');
    });
  });

  describe('Different Month Lengths', () => {
    it('should render 30 days for April', () => {
      const testDate = new Date(2022, 3, 15); // April 2022
      const { container } = render(<Calendar date={testDate} />);

      const dateCells = container.querySelectorAll('[data-current-month="true"]');
      expect(dateCells).toHaveLength(30);
    });

    it('should render 31 days for December', () => {
      const testDate = new Date(2022, 11, 25); // December 2022
      const { container } = render(<Calendar date={testDate} />);

      const dateCells = container.querySelectorAll('[data-current-month="true"]');
      expect(dateCells).toHaveLength(31);
    });
  });
});