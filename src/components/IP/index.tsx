import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { List } from '../ui/List';
import { Spinner } from '../ui/Spinner';
import { getCfIp } from './utils';
import { fetch } from '../../utils/fetch';

export function IP() {
    const [ipv4, setIpv4] = useState('');
    const [ipv6, setIpv6] = useState('');

    useEffect(() => {
        fetch('https://checkip.amazonaws.com/')
            .then(data => data.text())
            .then(result => {
                setIpv4(result);
            });

        fetch('https://www.cloudflare.com/cdn-cgi/trace')
            .then(data => data.text())
            .then(result => {
                setIpv6(getCfIp(result));
            });
    }, []);

    const items: [string, string | h.JSX.Element][] = [
        ['IPv4', ipv4 || (<Spinner size="s" />)],
        ['IPv6', ipv6 || (<Spinner size="s" />)]
    ];

    return (<List items={items} />);
}
