import BaseEnumCls from './base'

export class MessagingCode extends BaseEnumCls<number> {
  static readonly ERROR_CODE_NORMAL = new MessagingCode(-1, '错误码通用')
  static readonly SUCCESS_CODE_NORMAL = new MessagingCode(0, '成功码通用')
}
