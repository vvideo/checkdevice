export function getPreferredColorScheme(): 'dark' | 'light' | undefined {
    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        } 
        
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
    }
    
    return;
}
