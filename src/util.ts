export function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

export function genId(prefix = '') {
  const suffix = s4() + s4();

  if (prefix) {
    return `${prefix}-${suffix}`;
  }

  return suffix;
}

// 合并组件的 attrs， 并且也放入组件 props 里面
export function generAttrs(schema, attrs) {
  return {
    placeholder: schema.description,
    ...schema.attrs,
    ...attrs,
  };
}
