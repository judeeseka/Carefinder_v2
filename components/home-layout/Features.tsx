import { File, Hospital, Mail } from "lucide-react";

const Features = () => {
  return (
    <section className="p-4 sm:p-6 md:p-10 text-center">
      <h2 className="font-bold text-2xl md:text-5xl mb-6 md:mb-12">Features</h2>

      <div className="flex flex-wrap gap-4 justify-center">
        <div className="border-l border-myColors-main w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]  p-4 flex flex-col items-center gap-5">
          <Hospital />
          <h3 className="font-bold text-xl md:text-3xl">Search Hospitals</h3>
          <p>
            Easily find healthcare services in your area with detailed contact
            information.
          </p>
        </div>
        <div className="border-l border-myColors-main w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]  p-4 flex flex-col items-center gap-5">
          <File />
          <h3 className="font-bold text-xl md:text-3xl">Export Information</h3>
          <p>
            Export hospital details to a CSV file for easy sharing and
            reference.
          </p>
        </div>
        <div className="border-l border-myColors-main w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]  p-4 flex flex-col items-center gap-5">
          <Mail />
          <h3 className="font-bold text-xl md:text-3xl">Share with Others</h3>
          <p>Share hospital information via email or a shareable link.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
