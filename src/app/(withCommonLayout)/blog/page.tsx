import PHTextForm from "./components/PHTextForm";

const BlogPage: React.FC = () => {
  return (
    <div className="dark:bg-black dark:text-white lg:p-6 md:p-2 border shadow-lg my-6 border-amber-100 lg:w-2/3 mx-auto">
      <h2 className="text-center text-primary font-semibold text-4xl my-4">
        Write your Blog!
      </h2>
      <PHTextForm />
    </div>
  );
};

export default BlogPage;
