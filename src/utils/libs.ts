export const getArrayData = (data: any[]) => {
  const getLastItem = (index: number) => index === data.length - 1;
  const getFirstItem = (index: number) => index === 0;

  return { getLastItem, getFirstItem };
};
