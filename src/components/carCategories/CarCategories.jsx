import SectionsTitle from "../SectionsTitle";
import CarCategoryCard from "./CarCategoryCard";

const CarCategories = () => {
  return (
    <section className="container car-categories-section">
      <SectionsTitle titleText={"car categories"} />
      <div className="car-categories-box">
        <CarCategoryCard
          imgUrl={"./images/Pick Up Trucks.jpg"}
          imgAlt={"Pick Up Trucks"}
          categoryName={"Pick Up Trucks"}
          categoryDescription={"Lorem ipsum dolor sit amet consectetur adipisicing."}
        />
        <CarCategoryCard
          imgUrl={"./images/SUV cars.jpg"}
          imgAlt={"SUV cars"}
          categoryName={"SUV cars"}
          categoryDescription={"Lorem, ipsum dolor."}
        />
        <CarCategoryCard
          imgUrl={"../images/Super Cars.jpg"}
          imgAlt={"Super Cars"}
          categoryName={"Super Cars"}
          categoryDescription={"Lorem ipsum dolor sit amet."}
        />
      </div>
    </section>
  );
};
export default CarCategories;
