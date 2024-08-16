export function filterFonts(fonts: FontData[], filter: string) {
    return (fonts || []).filter(item => {
        return item.fullName.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });
}

export interface FontFamilyData {
    name: string;
    items: FontData[];
}

export function groupByFamily(fonts: FontData[]): FontFamilyData[] {
    const buffer: Record<string, FontFamilyData> = {};

    fonts.forEach(item => {
        buffer[item.family] = buffer[item.family] || { name: item.family, items: [] };
        buffer[item.family].items.push(item);
    });

    const result: FontFamilyData[] = [];
    Object.keys(buffer).forEach(key => {
        result.push(buffer[key]);
        buffer[key].items.sort((a, b) => a.fullName > b.fullName ? 1 : -1);
    });

    result.sort((a, b) => a.name > b.name ? 1 : -1);

    return result;
}