import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import FacilitiesSection from "./FacilitiesSection";
import ImageSection from "./ImageSection";
import PriceSection from "./PriceSection";

export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  pricePerNight: number;
  starRating: number;
  facilities: string[];
  imageFiles: FileList;
  adultCount: number;
  childCount: number;
};

const ManageHotelForm = () => {
  const formMethods = useForm<HotelFormData>();

  return (
    <FormProvider {...formMethods}>
      <form>
        <DetailsSection />
        <FacilitiesSection />
        <ImageSection />
        <PriceSection />
      </form>
      ;
    </FormProvider>
  );
};

export default ManageHotelForm;
