export default function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <p>{message}</p>
      <p>Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.</p>
    </div>
  );
}
