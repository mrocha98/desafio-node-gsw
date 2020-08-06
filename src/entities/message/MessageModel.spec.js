const MessageModel = require('./MessageModel')

describe('MESSAGE MODEL', () => {
  const messageModel = new MessageModel()

  it('should transform a message in a valid code', () => {
    const messageToTransform = 'TESTE DE MESA'
    const expectedCode = '833777783303_33063377772'

    expect(messageModel.messageToCode(messageToTransform)).toBe(expectedCode)
  })

  it('should transform a valid code in the respectively message', () => {
    const codeToTransform = '833777783303_33063377772'
    const expectedMessage = 'TESTE DE MESA'

    expect(messageModel.codeToMessage(codeToTransform)).toBe(expectedMessage)
  })

  it("should return '0' as code when nothing is provided as message", () => {
    expect(messageModel.messageToCode()).toBe('0')
  })

  it('should return a space character when nothing is provided as code', () => {
    expect(messageModel.codeToMessage()).toBe(' ')
  })
})
