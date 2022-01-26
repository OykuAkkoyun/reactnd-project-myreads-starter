import React, {useState, useEffect} from 'react'
import {useDebounce} from "use-debounce";
import * as BooksAPI from './BooksAPI'


export default function queryOperation(query) {
    const [searchBooks, setSearchBooks] = useState([]);
    const [value] = useDebounce(query, 300);

    useEffect(() => {
        let activeSearch = true;
        if (value) {
            BooksAPI.search(value).then(searchResult => {
                if (searchResult.error) {
                    // console.log(searchResult.error);
                } else {
                    if (activeSearch) {
                        setSearchBooks(searchResult)
                    }
                }
                //console.log(searchResult)
            });
        }
        return () => {
            activeSearch = false;
            setSearchBooks([]);
        }
    }, [value]) //anytime query changes run this method. --searchQuery - hook - value
    return [searchBooks, setSearchBooks];
}