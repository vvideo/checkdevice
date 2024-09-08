import { leadZero } from './leadZero';

it('#leadZero', () => {
    expect(leadZero(9)).toEqual('09');
    expect(leadZero(10)).toEqual('10');
});
