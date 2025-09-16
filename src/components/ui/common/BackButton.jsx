const BackButton = ({ onClick, className = '' }) => {
  return (
    <button
      className={`bg-white text-black px-4 py-2 rounded ${className}`}
      onClick={onClick}
    >
      ← Back
    </button>
  );
};

export default BackButton;
