function Button({ children }) {
  return (
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
      {children}
    </button>
  );
}

export default Button;  