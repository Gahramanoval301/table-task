import React from 'react';
import styles from "./style.module.scss"
import { FILTER_OPTIONS } from '../../utils/constants';

interface GlobalFilterProps {
    filter: string | undefined;
    setFilter: (value: string) => void;
}

const GlobalFilter: React.FC<GlobalFilterProps> = ({ filter = "", setFilter }) => {
    const options = [
        { label: 'All', value: FILTER_OPTIONS.All },
        { label: 'Active', value: FILTER_OPTIONS.Active },
        { label: 'Archived', value: FILTER_OPTIONS.Archived },
    ];

    return (
        <div style={{ marginBottom: '1rem' }}>
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className={styles.filterSelect}
            >
                {options.map((opt) => (
                    <option key={opt.label} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GlobalFilter;
