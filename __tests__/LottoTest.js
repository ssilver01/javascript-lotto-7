import Lotto from '../src/Lotto';
import { ERROR_MESSAGE, RULE } from '../src/constants/index.js';

describe('로또 번호 유효성 검사', () => {
  test('로또 번호의 개수가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.NOT_ENOUGH_NUMBERS(RULE.LOTTO_BALL_NUMBER));
  });

  test('로또 번호가 중복되면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.INPUT_DUPLICATION);
  });

  test('로또 번호가 1-45 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow(
      ERROR_MESSAGE.OUT_OF_RANGE_NUMBER(
        RULE.LOTTO_MIN_NUMBER,
        RULE.LOTTO_MAX_NUMBER,
      ),
    );
  });

  test('로또 번호에 빈 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['', 1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGE.NO_BLANK);
  });
});
