const ProductModal = ({ title, product, setProduct, onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="border p-2 w-full rounded mb-4"
        />
        <input
          type="number"
          placeholder="Precio"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          className="border p-2 w-full rounded mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
