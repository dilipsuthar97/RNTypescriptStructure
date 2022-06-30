// --------------- LIBRARIES ---------------
import { useState, useEffect } from 'react';

// --------------- HOOK DECLARATION ---------------
/**
 * Returns a filtered data, and a function to update the main data source.
 *
 * @param {string} query - query which is going to search.
 * @param {string[]} keysToSearch - list of keys to search for value.
 */
const useFilteredData = (query: string, keysToSearch: string[]): [any, any] => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(
      data.filter(d =>
        keysToSearch.some(k => {
          const keysArr: string[] = k.split('.');

          if (keysArr.length > 1) {
            return (
              (d[keysArr[0]][keysArr[1]] ?? '')
                .toLowerCase()
                .indexOf(query.toLowerCase()) > -1
            );
          }

          if (keysArr.length > 0) {
            return (
              (d[keysArr[0]] ?? '').toLowerCase().indexOf(query.toLowerCase()) >
              -1
            );
          }

          return false;
        }),
      ),
    );
  }, [query, data]);

  return [filteredData, setData];
};

export default useFilteredData;
