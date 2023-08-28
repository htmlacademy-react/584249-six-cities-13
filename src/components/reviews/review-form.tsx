import { Fragment, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';
import { getPostStatus } from '../../store/reviews-slice/reviews-slice-selectors';

const RATINGS = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
];

const MIN_CHARS = 50;
const MAX_CHARS = 300;

type ReviewFormProps = {
  id: number;
}

function ReviewForm({ id }: ReviewFormProps): JSX.Element {

  const dispatch = useAppDispatch();
  const status = useAppSelector(getPostStatus);

  const [reviewData, setReviewData] = useState({
    rating: 0,
    comment: ''
  });

  useEffect(() => {
    if (status.isSuccess) {
      setReviewData({
        rating: 0,
        comment: ''
      });
    }
  }, [status]);

  const isFormValid = (reviewData.comment.length >= MIN_CHARS && reviewData.comment.length <= MAX_CHARS) && (reviewData.rating !== 0);
  const isButtonDisabled = !isFormValid || status.isLoading;

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setReviewData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postReviewAction({
      id: id,
      rating: reviewData.rating,
      comment: reviewData.comment,
    }));
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((rating) => (
          <Fragment key={rating.value}>
            <input
              onChange={handleInputChange}
              className="form__rating-input visually-hidden"
              name="rating"
              value={rating.value}
              id={`${rating.value}-stars`}
              type="radio"
              disabled={status.isLoading}
              checked={+reviewData.rating === rating.value}
            />
            <label htmlFor={`${rating.value}-stars`} className="reviews__rating-label form__rating-label" title={rating.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        onChange={handleInputChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewData.comment}
        disabled={status.isLoading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>
          and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isButtonDisabled}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
