import React from 'react';
import styles from './Pagination.module.scss';
import { useNavigate } from 'react-router';

const paginationMap = [
    { label: '<<', key: 'hydra:first', disableIf: 'hydra:previous' },
    { label: '<', key: 'hydra:previous', disableIf: 'hydra:previous' },
    { label: '>', key: 'hydra:next', disableIf: 'hydra:next' },
    { label: '>>', key: 'hydra:last', disableIf: 'hydra:next' },
];

interface PaginationProps {
    view: Record<string, string> | null;
}

const Pagination: React.FC<PaginationProps> = ({ view }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            {paginationMap.map(({ label, key, disableIf }) => {
                const url = view?.[key];
                const shouldDisable = !view?.[disableIf];
                return (
                    <button
                        key={key}
                        className={styles.button}
                        disabled={shouldDisable}
                        aria-disabled={shouldDisable}
                        onClick={() => url && navigate(url)}
                        aria-label={key}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;
