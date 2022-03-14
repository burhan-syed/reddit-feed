export const imgError = (e:Event) => {
    (e.target as HTMLElement).parentElement.removeChild(e.target as HTMLElement);
}