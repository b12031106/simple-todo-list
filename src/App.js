import { useState } from "react";
import { useSelector } from "react-redux";
import { SORT_TYPE_ASC, SORT_TYPE_DESC } from "./constants";
import {
    FILTER_TYPE_ALL,
    FILTER_TYPE_COMPLETED,
    FILTER_TYPE_UNCOMPLETED,
} from "./constants";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Sorting from "./components/Sorting";
import Tasks from "./components/Tasks";
import Filter from "./components/Filter";

function App() {
    const [sortType, setSortType] = useState(SORT_TYPE_DESC);
    const [filterType, setFilterType] = useState(FILTER_TYPE_ALL);
    const [filterKeyword, setFilterKeyword] = useState("");
    const tasks = useSelector((state) => state.tasks.tasks);

    const handleSortTypeChange = (sortType) => {
        setSortType(sortType);
    };

    const handleFilterTypeChange = (filterType) => {
        setFilterType(filterType);
    };

    const handleKeywordChange = (keyword) => {
        setFilterKeyword(keyword);
    };

    const sortedTasks = [...tasks].sort((a, b) => {
        if (sortType === SORT_TYPE_ASC) {
            return a.createdAt - b.createdAt;
        } else {
            return b.createdAt - a.createdAt;
        }
    });

    const filteredTasks = sortedTasks
        .filter((task) => {
            if (filterType === FILTER_TYPE_ALL) {
                return true;
            } else if (filterType === FILTER_TYPE_COMPLETED) {
                return task.completed;
            } else if (filterType === FILTER_TYPE_UNCOMPLETED) {
                return !task.completed;
            }
        })
        .filter((task) => {
            if (filterKeyword.length === 0) {
                return true;
            } else {
                return (
                    task.title.includes(filterKeyword) ||
                    (task.description &&
                        task.description.includes(filterKeyword))
                );
            }
        });

    return (
        <>
            <Header />
            <AddTask />
            <Sorting
                sortType={sortType}
                onSortTypeChange={handleSortTypeChange}
            />
            <Filter
                filterType={filterType}
                onFilterTypeChange={handleFilterTypeChange}
                keyword={filterKeyword}
                onKeywordChange={handleKeywordChange}
            />
            <Tasks tasks={filteredTasks} />
        </>
    );
}

export default App;
