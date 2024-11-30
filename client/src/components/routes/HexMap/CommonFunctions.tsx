import * as React from 'react';

type EnumType = Record<string, string | number>;

export function getFromEnumSelectComponents(...enumObjs: EnumType[]) {
  return enumObjs.flatMap((enumObj, enumIndex) =>
    Object.entries(enumObj).map(([key, value]) => (
      <div key={`${enumIndex}-${key}`}>
        <span>{key}</span>: <span>{value}</span>
      </div>
    ))
  );
}

