import React from 'react';
import styles from './ColumnFilter.module.scss';

interface Column {
  filterValue: string;
  setFilter: (value: string) => void;
}

interface ColumnFilterProps {
  column: Column;
}

const ColumnFilter: React.FC<ColumnFilterProps> = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <div className={styles.filterContainer}>
      <label className={styles.label}>
        🔍
        <span className={styles.srOnly}>Search by column:</span>
      </label>
      <input
        type="text"
        className={styles.input}
        placeholder="Type to filter..."
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default ColumnFilter;
