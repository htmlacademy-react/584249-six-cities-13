import ReviewForm from './review-form';
import ReviewsListItem from './reviews-list-item';
import { Review } from '../../types/review';
import { AuthorizationStatus } from '../../const';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((i) => (
          <ReviewsListItem review={i} key={i.id}/>
        ))}
      </ul>
      {AuthorizationStatus.Auth === 'AUTH' &&
      <ReviewForm />}
    </section>
  );
}

export default ReviewsList;
