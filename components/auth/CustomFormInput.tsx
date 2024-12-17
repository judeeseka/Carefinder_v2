import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import { authFormSchema } from "@/lib/utils";

// const formSchema = authFormSchema("");

type FormSchemaType = z.infer<ReturnType<typeof authFormSchema>>;

interface CustomFormInput {
  control: Control<FormSchemaType>;
  name: FieldPath<FormSchemaType>;
  label: string;
  placeholder: string;
}

// interface CustomFormInput {
//   control: Control<z.infer<typeof formSchema>>;
//   name: FieldPath<z.infer<typeof formSchema>>;
//   label: string;
//   placeholder: string;
// }

const CustomFormInput = ({
  control,
  name,
  label,
  placeholder,
}: CustomFormInput) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          {name === "password" ? (
            <div className="relative">
              <FormControl>
                <Input
                  placeholder={placeholder}
                  type={showPassword ? "text" : "password"}
                  {...field}
                />
              </FormControl>

              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="w-5 h-5 text-gray-500" />
                ) : (
                  <EyeOff className="w-5 h-5 text-gray-500" />
                )}
              </div>
            </div>
          ) : (
            <FormControl>
              <Input placeholder={placeholder} type="text" {...field} />
            </FormControl>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormInput;
