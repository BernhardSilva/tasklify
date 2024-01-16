'use client';

import { useDebounce } from '@/hooks/use-debounce';
import { Task } from '@/types/task';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import InputSearch from '../ui/input-serach';
import { cn } from '@/lib/utils';
import { useMenuRoute } from '@/hooks/use-menu';
import getTasks from '@/actions/get-tasks';
import { toast } from '../../hooks/use-toast';
import SearchTaskList from './search-list';

interface SearchProductProps {
    className?: string;
    inputClassName?: string;
    dropDownClassName?: string;
}

const SearchProduct = ({ className, inputClassName, dropDownClassName }: SearchProductProps) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>();
    const menuRoute = useMenuRoute();
    const searchResultsRef = useRef<HTMLDivElement>(null);
    const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);
    const debouncedValue = useDebounce(inputValue);

    const filterTasks = async (query: string) => {
        try {
            const tasks = await getTasks({ title: query });
            return tasks;
        } catch (error) {
            console.error(error);
            toast({
                title: "Error at searching the tasks!.",
                variant: 'destructive'
            })
        }
    };

    const cleanSearchResults = () => {
        setTasks([]);
        setInputValue('');
    };

    const handleSearchResultsOpen = () => {
        setIsSearchResultsOpen(!isSearchResultsOpen);
    };

    const { data: productData, isValidating } = useSWR(debouncedValue ?? null, filterTasks);

    useEffect(() => {
        // If search is active, set tasks to search results
        if (debouncedValue.length > 0) {
            // If there is a result, set tasks to result
            if (productData) {
                setTasks(productData);
            }
            // If there is no result, set tasks to empty array
            else {
                setTasks([]);
            }
        }
        // If search is not active, set tasks to initial data
        else {
            setTasks([]);
        }
    }, [productData, debouncedValue]);

    // TODO
    const handleSelectTask = (id: string) => {
        menuRoute('task', id);
        cleanSearchResults();
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (isSearchResultsOpen && searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
                setIsSearchResultsOpen(false);
                cleanSearchResults();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSearchResultsOpen]);

    return (
        <>
            <div className={cn(`relative mb-2.5`, className)} onClick={handleSearchResultsOpen}>
                <InputSearch
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    isHandling={isValidating}
                    className={inputClassName}
                />

                <div
                    className={cn(
                        dropDownClassName
                            ? dropDownClassName
                            : `absolute z-50 bg-black opacity-90 rounded-t-xl rounded-b-xl translate-y-[-5%]
				dark:bg-slate-800 text-white ${isSearchResultsOpen ? '' : 'hidden'}`
                    )}
                    ref={searchResultsRef}
                >
                    {inputValue !== '' && <SearchTaskList tasks={tasks} handleSelectTask={handleSelectTask} />}
                </div>
            </div>
        </>
    );
};

export default SearchProduct;