export type QueryStringObject = Record<string, string | string[] | undefined>;

const decodeValue = (value: string) => {
    try {
        return decodeURIComponent(value);
    } catch (e) {
        return value;
    }
};

// parse only VALID search or hash part of URL
export function parseQueryString(qs: string): QueryStringObject {
    const result: QueryStringObject = {};
    const qsBody = qs.replace(/^[?#]+/, '').replace(/#.*$/, '');
    const params: string[] = qsBody.split('&');

    for (let i = 0; i < params.length; i += 1) {
        const index = params[i].indexOf('=');

        let key;
        let value;
        if (index === -1) {
            key = decodeValue(params[i]);
            value = '';
        } else {
            key = decodeValue(params[i].slice(0, index));
            value = params[i].slice(index + 1);
        }

        if (key) {
            const isValueArray = Boolean(/(\[\])$/.exec(key));
            key = key.replace(/\[\]$/, '');
            if (!isValueArray) {
                result[key] = decodeValue(value);
            } else if (result[key] === undefined) {
                result[key] = [decodeValue(value)];
            } else {
                result[key] = ([] as string[]).concat(result[key] || [], decodeValue(value));
            }
        }
    }

    return result;
}
