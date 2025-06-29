export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} My Movie App. All rights reserved.
        </p>
        <p className="mb-0">
          Made with <i className="bi bi-heart-fill text-danger"></i> by Your
          Name
        </p>
      </div>
    </footer>
  );
}
