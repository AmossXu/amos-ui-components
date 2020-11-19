/**
 * @file 超过固定长度自动 ...，hover 显示全部
 */

import * as React from 'react';
import { Tooltip } from 'antd';
import { TooltipPlacement } from 'antd/lib/tooltip';

class AbbrProps {
  /** 额外的 className */
  className?: string;
  /** 原始文本 */
  text: number | string = '';
  /** 限制长度 */
  length?: number = 20;
  /** 是否斜体显示，用于 Tab 处于 preview 模式等 */
  italic?: boolean = false;
  /** 展现位置，默认为 topLeft */
  placement?: TooltipPlacement = 'top';
}

class Abbr extends React.Component<AbbrProps, any> {

  getShortName(text, length) {
    const result = [];
    let currLength = 0;

    let i = 0;
    while (currLength < length && i < text.length) {
      const char = text[i];
      result.push(char);

      if (char === 'I') {
        currLength += 0.3;
      } else if (char.match(/[a-z0-9_-]/)) {
        currLength += 0.75;
      } else {
        currLength += 2;
      }

      i++;
    }

    const finalStr = result.join('');
    return finalStr === text ? finalStr : finalStr + '...';
  }

  render() {
    const { className, text, length, italic, placement = 'top', ...restProps } = this.props;
    const textStr = text + '';

    if (!text) {
      return null;
    }

    const shortName = this.getShortName(textStr, length);
    const shortNameEl = italic ? <i>{shortName}</i> : <span>{shortName}</span>;

    const nameEl =
      shortName === textStr ? (
        shortNameEl
      ) : (
        <Tooltip
          title={textStr}
          placement={placement}
          overlayStyle={{
            wordBreak: 'break-all',
            wordWrap: 'break-word',
          }}>
          {shortNameEl}
        </Tooltip>
      );

    return nameEl;
  }
}

export default Abbr;
