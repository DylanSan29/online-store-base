const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-500 mt-2">${product.price}</p>
      <div className="flex mt-4 space-x-2">
        <button
          onClick={onEdit}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Editar
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
