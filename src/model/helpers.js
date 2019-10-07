export function array_chunks(array, chunk_size) {
        return Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size));
}

export function sortArrayWithKey(array, key) {
        const sort = (a, b) => {
                return a[key] > b[key] ? 1 : -1;
        };
        return array.slice().sort(sort);
}