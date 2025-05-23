// src/hooks/useNotices.ts
import { useEffect, useState } from 'react';
import type { Notice } from '../types';
import { fetchNotices } from '../../api/notices';

const useNotices = (url: string) => {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [view, setView] = useState<Record<string, string> | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            setError(null);

            try {
                const { notices, view } = await fetchNotices(url);
                setNotices(notices);
                setView(view);
            } catch (err) {
                if (err instanceof Error && err.name !== 'AbortError') {
                    setError('Failed to fetch notices');
                    setNotices([]);
                }
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [url]);

    return { notices, view, loading, error };
};

export default useNotices;