export function flatten(arr, parentref) {
  return arr
    ? arr.reduce(
        (result, item) => [
          ...result,
          {
            name: item.name,
            id: item.id,
            hierarchy: parentref ? [...parentref, item.name] : [item.name],
          },
          ...flatten(
            item.children,
            parentref ? [...parentref, item.name] : [item.name]
          ),
        ],
        []
      )
    : [];
}
