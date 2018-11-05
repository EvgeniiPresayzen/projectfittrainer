export const updateObject = (oldObject, updateObject) => {
  console.log(updateObject, 'UPDATED')
  return {
    ...oldObject,
    ...updateObject
  };
};
