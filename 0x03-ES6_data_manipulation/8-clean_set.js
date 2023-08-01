export default function cleanSet(set, startString) {
    const filteredValues = [...set]. filter((value) => value.startWith(startString));
    return filteredValues.join('-');
}