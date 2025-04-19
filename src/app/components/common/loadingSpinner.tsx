import { Dot, LoadingSpinnerWrapper, Spinner } from './loadingSpinner.style';

export default function LoadingSpinner() {
  return (
    <LoadingSpinnerWrapper>
      <Spinner>
        <Dot />
        <Dot />
        <Dot />
      </Spinner>
    </LoadingSpinnerWrapper>
  );
}
