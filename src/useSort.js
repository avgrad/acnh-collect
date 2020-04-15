import { useState } from "react";

export default function useSort(defaultSortField, defaultSortDirection = "ASC") {
  const [ field, setField ] = useState(defaultSortField);
  const [ direction, setDirection ] = useState(defaultSortDirection);

  return {
    field,
    setField,
    direction,
    setDirection
  };
}
