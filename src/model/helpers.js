export function array_chunks(array, chunk_size) {
        return Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size));
}

export function sortArrayWithKey(array, key) {
        const sort = (a, b) => {
                return a[key] > b[key] ? 1 : -1;
        };
        return array.slice().sort(sort);
}

export function debounce(func, wait, immediate) {
        let timeout,
            args,
            context,
            timestamp,
            result;
        if (null == wait) wait = 100;

        function later() {
                let last = Date.now() - timestamp;

                if (last < wait && last >= 0) {
                        timeout = setTimeout(later, wait - last);
                } else {
                        timeout = null;
                        if (!immediate) {
                                result  = func.apply(context, args);
                                context = args = null;
                        }
                }
        }

        let debounced = function () {
                context     = this;
                args        = arguments;
                timestamp   = Date.now();
                let callNow = immediate && !timeout;
                if (!timeout) timeout = setTimeout(later, wait);
                if (callNow) {
                        result  = func.apply(context, args);
                        context = args = null;
                }

                return result;
        };

        debounced.clear = function () {
                if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                }
        };

        debounced.flush = function () {
                if (timeout) {
                        result  = func.apply(context, args);
                        context = args = null;

                        clearTimeout(timeout);
                        timeout = null;
                }
        };

        return debounced;
};