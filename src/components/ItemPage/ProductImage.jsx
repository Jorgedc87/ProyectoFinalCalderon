export const ProductImage = ({ img, name }) => {
  return (
    <div className="max-w-1/4">
      <img src={img} alt={name} className="w-full remove-bg" />
    </div>
  );
};