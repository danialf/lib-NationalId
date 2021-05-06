import NationalId from './index'

describe('NationalId', () => {
  it('validation fails when input is undefined', () => {
    const value = undefined

    const result = NationalId.IsValid(value)

    expect(result).toBeFalsy()
  })

  it('validation fails when input is empty', () => {
    const value = ''

    const result = NationalId.IsValid(value)

    expect(result).toBeFalsy()
  })

  it('validation fails when input is not convertable to number', () => {
    const value = 'something'

    const result = NationalId.IsValid(value)

    expect(result).toBeFalsy()
  })

  it("validation fails when input's length is not 10", () => {
    const value = '123456'

    const result = NationalId.IsValid(value)

    expect(result).toBeFalsy()
  })

  it('validation fails when nationalId is one of exampted', () => {
    const values = [
      '0000000000',
      '2222222222',
      '3333333333',
      '4444444444',
      '5555555555',
      '6666666666',
      '7777777777',
      '8888888888',
      '9999999999',
      '0123456789',
    ]

    values.forEach((value) => {
      const result = NationalId.IsValid(value)

      expect(result).toBeFalsy()
    })
  })

  /**
   * For more info: https://www.yjc.news/fa/news/6787095/%D8%B1%D9%86%D8%AF%D8%AA%D8%B1%DB%8C%D9%86-%D8%B4%D9%85%D8%A7%D8%B1%D9%87-%D9%85%D9%84%DB%8C-%DA%A9%D8%B4%D9%88%D8%B1-%D8%B1%D8%A7-%D8%A8%D8%B4%D9%86%D8%A7%D8%B3%DB%8C%D8%AF
   */
  it('should accept 1111111111 as a valid nationalId', () => {
    const value = '1111111111'

    const result = NationalId.IsValid(value)

    expect(result).toBeTruthy()
  })

  it('should returns Nonvalid instance when nationalId is not valid', () => {
    const invalidNationalId = '7731689951'

    const nationalId = NationalId.create(invalidNationalId)

    expect(nationalId).toEqual(NationalId.NotValid)
    expect(nationalId.IsValid).toBeFalsy()
    expect(nationalId.ToString()).toEqual('XXXXXXXXXX')
  })

  it('getUID returns XXXXXX when not valid', () => {
    const invalidNationalId = '7731689951'

    const nationalId = NationalId.create(invalidNationalId)

    expect(nationalId.IsValid).toBeFalsy()
    expect(nationalId.getUID).toEqual('XXXXXX')
  })

  it('getUID should works', () => {
    const validNationalId = '0683504169'

    const nationalId = NationalId.create(validNationalId)

    expect(nationalId.IsValid).toBeTruthy()
    expect(nationalId.getUID).toEqual('350416')
  })

  it('getParity returns X when not valid', () => {
    const invalidNationalId = '7731689951'

    const nationalId = NationalId.create(invalidNationalId)

    expect(nationalId.IsValid).toBeFalsy()
    expect(nationalId.getParity).toEqual('X')
  })

  it('getParity should works', () => {
    const validNationalId = '0683504169'

    const nationalId = NationalId.create(validNationalId)

    expect(nationalId.IsValid).toBeTruthy()
    expect(nationalId.getParity).toEqual('9')
  })

  it('getSectorCode returns XXX when not valid', () => {
    const invalidNationalId = '7731689951'

    const nationalId = NationalId.create(invalidNationalId)

    expect(nationalId.IsValid).toBeFalsy()
    expect(nationalId.getSectorCode).toEqual('XXX')
  })

  it('getSectorCode should works', () => {
    const validNationalId = '0683504169'

    const nationalId = NationalId.create(validNationalId)

    expect(nationalId.IsValid).toBeTruthy()
    expect(nationalId.getSectorCode).toEqual('068')
  })

  it('ToString returns XXXXXXXXXX when not valid', () => {
    const invalidNationalId = '7731689951'

    const nationalId = NationalId.create(invalidNationalId)

    expect(nationalId.IsValid).toBeFalsy()
    expect(nationalId.ToString()).toEqual('XXXXXXXXXX')
  })

  it('ToString should works', () => {
    const validNationalId = '0683504169'

    const nationalId = NationalId.create(validNationalId)

    expect(nationalId.IsValid).toBeTruthy()
    expect(nationalId.ToString()).toEqual('0683504169')
  })

  it('ToFormattedString should works', () => {
    const validNationalId = '0683504169'

    const nationalId = NationalId.create(validNationalId)

    expect(nationalId.IsValid).toBeTruthy()
    expect(nationalId.ToFormattedString()).toEqual('068-350416-9')
  })
})
