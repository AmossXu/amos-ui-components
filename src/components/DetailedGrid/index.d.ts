export interface GridProps<T> {
  /** 传入详情对象 */
  detailedGridData: T,
  /** 传入属性数组控制每个数据项的内容 */
  keyWordsList: Array<KeyWordsList<T>>,
  /** 传入默认数据项宽度一行为24 传入6即说明一行四项，传入8则为一行三项。不传默认一行四项 */
  defaultSpan?: 6 | 8,
}
export interface KeyWordsList<T> {
  /** 用于展示标签名 */
  label: string;
  /** 用于展示传入detailedGridData对应键值(key)内的值 */
  key: string;
  /** 决定当前数据项的展示宽度 */
  span?: number;
  /** 决定是否启用<Abbr/>组件控制最大宽度,值为number */
  isAbbr?: number;
  /**
   * render函数
   * @param {any} text 当前元素
   * @param {T} record 当前元素集合泛型定义
   * @param {number} index 当前数组下标
   */
  render?: (text: any, record?: T, index?: number) => React.ReactNode;
}